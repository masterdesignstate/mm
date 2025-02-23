<?php

namespace App\Http\Controllers;

use App\Models\ChatMessage;
use App\Models\Profile;
use Illuminate\Http\Request;
use Spatie\MediaLibrary\MediaCollections\Models\Media;
use Storage;
use Str;

class FileUploadController extends Controller
{
    public function upload(Request $request)
    {
        $request->validate([
            'file' => 'required|file|max:2048', // Max 2MB file
            'chat_partner' => 'required|string', // Extra field validation
        ]);

        if ($request->hasFile('file')) {
            $partner = Profile::find($request->chat_partner);
            $path = $request->file('file')->store('uploads', 's3'); // Store in `storage/app/public/uploads`

            return response()->json(['path' => $path, 'message' => 'File uploaded successfully!','status' => true]);
        }

        return response()->json(['message' => 'File upload failed.','status'=>false], 400);
    }

    public function dpUpload(Request $request)
    {
        $request->validate([
            'dp' => 'required|file|image|mimes:jpg,png,jpeg|max:2048',
        ]);

        $dp = $request->dp;
        $path = $dp->store('tmp/'.now()->timestamp.Str::random(20) , 'public');

        $profile = auth()->user()->profile;

        $profile->addMedia(public_path('/storage/').$path)->toMediaCollection('dp','s3');

//        dd($profile->getLastMediaUrl('dp'));

        return response($profile->getLastMediaUrl('dp','public'), 200);
    }

    public function galleryUpload(Request $request)
    {
        $request->validate([
            'gallery' => 'required|file|image|mimes:jpg,png,jpeg|max:2048',
        ]);

        $gallery_item = $request->gallery;
        $path = $gallery_item->store('tmp/'.now()->timestamp.Str::random(20) , 'public');

        $profile = auth()->user()->profile;

        $profile->addMedia(public_path('/storage/').$path)->toMediaCollection('gallery','s3');

        return response($profile->getLastMediaUrl('dp','public'), 200);
    }




    public function chatUpload(Request $request)
    {
        ray($request->all());
        $request->validate([
            'dp' => 'required|file|image|mimes:jpg,png,jpeg|max:2048',
            'to_user' => 'required|string',
        ]);



        $dp = $request->dp;
        $path = $dp->store('tmp/'.now()->timestamp.Str::random(20) , 'public');


        $chatMessage = ChatMessage::create([
            'message' => "",
            'from_user_id' => auth()->user()->id,
            'to_user_id' => $request->to_user,
            'message_type' => "image",
        ]);

        $chatMessage->addMedia(public_path('/storage/').$path)->toMediaCollection('chat','s3');

//        dd($profile->getLastMediaUrl('dp'));

        return response($chatMessage->getLastMediaUrl('chat','public'), 200);
    }


    public function remove(Request $request)
    {

        $key = $request->key;


        $media = Media::find($key['options']['metadata']['media_id']);

        $media->delete();


        return back()->with('success', 'File deleted successfully');
    }
}
