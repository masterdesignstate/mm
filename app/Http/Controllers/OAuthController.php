<?php

namespace App\Http\Controllers;

use App\Models\Profile;
use App\Models\User;
use Auth;
use Illuminate\Support\Facades\Log;
use Laravel\Socialite\Facades\Socialite;

class OAuthController extends Controller
{
    public function index()
    {

    }

    public function fb_create_user()
    {
        try {
            $user = Socialite::driver('facebook')->user();
            $finduser = User::where('oauth_id', $user->id)->first();


            if ($finduser) {
                Auth::login($finduser);
                return redirect()->route('my-profile');
            } else {
                $newUser = User::create([
                    'name' => $user->name,
                    'email' => $user->email,
                    'oauth_id'=> $user->id,
                    'oauth_platform' => 'facebook',
                    'oauth_avatar' => $user->avatar,
                    'password' => encrypt($user->id)
                ]);

                $profile = Profile::create([
                    'user_id' => $newUser->id,
                    'name' => $user->name,
                ]);

                Auth::login($newUser);
                return redirect()->route('my-profile');
            }
        } catch (\Exception $e) {

            Log::info($e->getMessage());
        }



    }

    public function google_create_user()
    {

        try {
            $user = Socialite::driver('google')->user();
            $finduser = User::where('oauth_id', $user->id)->first();


            if ($finduser) {
                Auth::login($finduser);
                return redirect()->route('my-profile');
            } else {
                $newUser = User::create([
                    'name' => $user->name,
                    'email' => $user->email,
                    'oauth_id'=> $user->id,
                    'oauth_platform' => 'google',
                    'oauth_avatar' => $user->avatar,
                    'password' => encrypt($user->id)
                ]);
                $profile = Profile::create([
                    'user_id' => $newUser->id,
                    'name' => $user->name,
                ]);

                Auth::login($newUser);
                return redirect()->route('my-profile');
            }
        } catch (\Exception $e) {

            Log::info($e->getMessage());

        }



    }
}
