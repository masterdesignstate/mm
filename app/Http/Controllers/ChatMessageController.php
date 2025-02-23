<?php

namespace App\Http\Controllers;


use App\Events\MessageSentEvent;
use App\Models\ChatMessage;
use App\Models\Profile;
use App\Models\ProfileResponse;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;
use function PHPUnit\Framework\isEmpty;


class ChatMessageController extends Controller
{
    public function chat(User $partner)
    {
        $me = auth()->user();

        $me_liking_them = ProfileResponse::where('from_id', $me->profile->id)
            ->where('response', 'positive')
            ->pluck('profile_id')->toArray();

        $they_liking_me = ProfileResponse::where('profile_id', $me->profile->id)
            ->where('response', 'positive')
            ->pluck('from_id')->toArray();

        $commonProfiles = array_values( array_intersect($me_liking_them, $they_liking_me));


        $userIdsTo = ChatMessage::where('to_user_id', auth()->user()->id)
            ->pluck('from_user_id')
            ->toArray();
        $userIdsFrom = ChatMessage::Where('from_user_id', auth()->user()->id)
            ->pluck('to_user_id')->toArray();

        $merged = array_merge($userIdsTo, $userIdsFrom);
//        dd($userIdsTo,$userIdsFrom,$merged);

//        $userIds = collect($userIds)
//            ->pluck(['from_user_id','to_user_id'])
//            ->flatten()
//            ->unique()
//            ->reject(fn($id) => $id == auth()->user()->id) // Remove own ID
//            ->values()
//            ->toArray();

//dd($merged);

        $profile_users = Profile::whereIn('id', $commonProfiles)->pluck('user_id')->toArray();

//        $commonUsers = array_values( array_intersect($merged, $profile_users));

//        dd($userIds,$commonProfiles,$commonUsers);

        $users = User::
        whereNot('id', auth()->user()->id)
            ->whereIn('id', $merged)
            ->with('profile')
            ->with(['sent_messages' => function ($query) use ($me) {
                $query->where('to_user_id', $me->id)
                    ->latest()
                    ->limit(1);
            }])
            ->get();


        $partner->load('profile');

        $messages = ChatMessage::whereIn('from_user_id', [$partner->id, $me->id])
            ->with('media')
            ->whereIn('to_user_id', [$partner->id, $me->id])
            ->limit(500)
            ->get();


        $messages = $messages->map(function ($message) {
            if ($message->type === 'image') {
                $message->media_urls = $message->getMedia('chat')->map(function ($media) {
                    return $media->getTemporaryUrl(now()->addMinutes(60));
                });
            } else {
                $message->media_urls = [];
            }
            return $message;
        });


//        dd($messages);
//        dd($partner);
        if (!User::where('id', $partner->id)->exists() && !empty($partner->name)) {
            abort(404, 'User not found');
        }

//
//        $messages->each(function ($message) {
//           $message->setAttribute('image_urls', $message->chat_me);
//        });

//        ray($messages);
//        dd($messages);

        return Inertia::render('Chat', [
            'users' => fn() => $users,
            'partner' => fn() => $partner,
            'messages' => fn() => $messages,
            'me' => fn() => auth()->user()
        ]);
    }

    public function sendMessage(Request $request)
    {


//        dd($request->all());

        $chatMessage = ChatMessage::create([
            'message' => $request->message,
            'from_user_id' => $request->from_user_id,
            'to_user_id' => $request->to_user_id,
            'message_type' => $request->message_type,
        ]);

//        ray($request->all());

        if ($request->has('gallery')) {
            ray($request['gallery']);
            foreach ($request['gallery'] as $image) {
                ray($image);
                if ($image->isFile()) $chatMessage->addMedia($image)->toMediaCollection('chat_messages', 's3');
            }
//            $chatMessage->getMedia('chat_messages')->map(function ($media) {
//                return ["src" => $media->getUrl()];
//            });
        }
        ray($chatMessage);
        broadcast(new MessageSentEvent($chatMessage));
        return back()->with(['success' => 'Message sent']);

    }
}
