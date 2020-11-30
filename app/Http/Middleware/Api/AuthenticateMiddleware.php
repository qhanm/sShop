<?php

namespace App\Http\Middleware\Api;

use Illuminate\Http\Request;

class AuthenticateMiddleware
{

    public function handle(Request $request, \Closure $next)
    {
        if(!\Auth::check()){
            return  redirect()->route('backend.auth.login');
        }
        return $next($request);

    }
}
