<?php

namespace App\Http\Middleware;

use Auth;
use Closure;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminRestrictMiddleware
{
    public function handle(Request $request, Closure $next)
    {
        if (Auth::check() && Auth::user()->is_admin) {
            return Inertia::render('Error', ['message' => 'Access Denied! Admins cannot have profile pages. Kindly use impersonate feature to see profile pages.']);
        }
            return $next($request);
    }
}
