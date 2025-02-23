<?php

namespace App\Http\Controllers;

use App\Events\NotificationReceived;
use App\Models\Profile;
use App\Models\ProfileResponse;
use App\Models\User;
use Filament\Notifications\Notification;
use Illuminate\Http\Request;

class ProfileResponseController extends Controller
{
    public function index()
    {
        return ProfileResponse::all();
    }

    public function store(Request $request)
    {
        $profile_response = ProfileResponse::updateOrCreate([
            'from_id' => $request->input('like_from_current_user')['from_id'],
            'profile_id' => $request->input('like_from_current_user')['profile_id'],
        ], [
            'from_id' => $request->input('like_from_current_user')['from_id'],
            'response' => $request->input('like_from_current_user')['response'],
            'profile_id' => $request->input('like_from_current_user')['profile_id'],
        ]);


        $admin = User::where('is_admin',1)->first();

        if ($profile_response->response === "positive") {
            ray("Reached here");
            $from = Profile::find($request->input('like_from_current_user')['from_id']);
            $to = Profile::find($request->input('like_from_current_user')['profile_id']);
            Notification::make()
                ->title("Profile Liked")
                ->body("$from->name liked $to->name")
                ->sendToDatabase($admin);
//
//            $admin->notify( Notification::make()
//                ->title("Profile Liked")
//                ->body("$from->name liked $to->name")
//                ->toDatabase()
//            );

            $tags = $profile_response->tags;
            $tags[] = "Like";
            $profile_response->tags = $tags;
            $profile_response->save();



        } elseif ($profile_response->response === "negative") {
            $tags = $profile_response->tags;
            $tags[] = "Hide";
            $profile_response->tags = $tags;
            $profile_response->save();
        }

        $from = Profile::find($profile_response->from_id);
        $to = Profile::find($profile_response->profile_id);


        if ($profile_response->response === "positive") {
            $notification = [
                'message' => $from->name . ' has liked your profile. Like them back to begin the chat',
                'from_user_id' => $from->user->id,
                'to_user_id' => $to->user->id,
                'profile_url' => route('profile', $from),
            ];
            broadcast(new NotificationReceived($notification));
        }

        return response()->json($profile_response);

    }


    public function tagsStore(Request $request)
    {
//        dd($request->all());
        if ($request->has('like_from_current_user') && $request->input('like_from_current_user') !== null) {
            $profile_response = ProfileResponse::findOrFail($request['like_from_current_user']['id']);
            $profile_response->tags = $request->input('tags');
            $profile_response->save();
        } else {
            $profile_response = ProfileResponse::create([
                'tags' => $request['tags'],
                'from_id' => auth()->user()->profile->id,
                'profile_id' => $request['to_user_id'],
            ]);

        }

//        if ($profile_response === null) {
//        } else {
//        }

        return back()->with('success', 'Tags added successfully');
    }

    public
    function show(ProfileResponse $profileResponse)
    {
        return $profileResponse;
    }

    public
    function update(Request $request, ProfileResponse $profileResponse)
    {
        $data = $request->validate([
            'meta' => ['nullable'],
            'profile_id' => ['required', 'exists:profiles'],
            'from_id' => ['required', 'exists:profiles'],
            'response' => ['nullable'],
        ]);

        $profileResponse->update($data);

        return redirect()->route('matches');
    }

    public
    function destroy(ProfileResponse $profileResponse)
    {
        ray($profileResponse);

        $tags = $profileResponse->tags;

        $newTags = [];

        if(is_array($tags) && count($tags)>0){

        $filtered = array_filter($tags, function ($value) {
            return in_array($value, ['positive', 'negative']);
        });

        $newTags =  array_values($filtered);

        }


            $profileResponse->response = "";
            $profileResponse->tags = $newTags;
            $profileResponse->save();


        return null;
    }
}
