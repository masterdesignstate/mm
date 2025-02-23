<?php

namespace App\Http\Controllers\Auth;

use App\Events\UserOnlineStatus;
use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Http\Response as HttpResponse;

class AuthenticatedSessionController extends Controller
{
    /**
     * Display the login view.
     */
    public function create(): Response
    {
        return Inertia::render('Auth/Login', [
            'canResetPassword' => Route::has('password.request'),
            'status' => session('status'),
        ]);
    }

    public function onlineUsers()
    {
        $users = User::all()->map(function ($user) {
            return [
                'id' => $user->id,
                'name' => $user->name,
                'is_online' => $user->isOnline(),
            ];
        });

        return response()->json($users);
    }

    /**
     * Handle an incoming authentication request.
     */
    public function store(LoginRequest $request): RedirectResponse | HttpResponse
    {

        $request->authenticate();

//        if(Auth::user()->is_admin){
//            return redirect()->route();
//        }

        if (auth()->user()->is_admin) {
            return Inertia::location(route('filament.admin.pages.dashboard'));
        }


        $request->session()->regenerate();
        event(new UserOnlineStatus(Auth::user()));

        return redirect()->intended(route('on-boarding', absolute: false));
    }

    /**
     * Destroy an authenticated session.
     */
    public function destroy(Request $request): RedirectResponse
    {

        $user = Auth::user();

        Auth::guard('web')->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        event(new UserOnlineStatus($user));

        return redirect('/');
    }
}
