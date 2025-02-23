<?php

namespace App\Http\Middleware;

use App\Helpers\MyNotifications;
use Illuminate\Http\Request;
use Inertia\Middleware;
use Tighten\Ziggy\Ziggy;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        $profile = auth()->user()?->profile;
        return [
            ...parent::share($request),
            'auth' => [
                'user' => $request->user()?->load('profile'),
            ],
            'ziggy' => fn() => [
                ...(new Ziggy)->toArray(),
                'location' => $request->url(),
            ],
            'csrf_token' => csrf_token(),
            'my_profile'=>$request->user()?->profile,
            'notifications'=>MyNotifications::getAllNotifications(),
        ];
    }
}
