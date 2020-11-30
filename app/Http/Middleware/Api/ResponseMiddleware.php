<?php

namespace App\Http\Middleware\Api;

use Illuminate\Http\Request;

class ResponseMiddleware
{

    public function handle(Request $request, \Closure $next)
    {
        $request->headers->set('Accept', 'application/json');

        return $next($request)
            ->header('Access-Control-Allow-Origin', '*')
            ->header('Access-Control-Allow-Methods', '*')
            ->header('Access-Control-Allow-Credentials', 'true')
            ->header('Access-Control-Allow-Headers', 'X-CSRF-Token');

    }
}
