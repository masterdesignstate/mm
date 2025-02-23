<?php

namespace App\Http\Middleware;

use Auth;
use Closure;
use DB;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class UpdateUserActivity
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {

        if (Auth::check()) {
            DB::table('sessions')->where('user_id', Auth::id())->update([
                'last_activity' => now()->timestamp
            ]);
        }

        return $next($request);
    }
}
