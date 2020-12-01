<?php
namespace App\Http\Controllers\Api;

use App\Components\ApiController;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;

class AuthController extends ApiController
{
    public function login(Request $request)
    {
        $request = $request->only(['email', 'password']);

        if(\Auth::attempt($request))
        {
            $user = \Auth::user();
            return response()->json([
                'user' => $user,
                'token' =>  $user->createToken('Laravel Personal Access Client')->accessToken,
            ], 200);
        }
        else {
            throw ValidationException::withMessages([
                'email' => ['Username or Password incorrect'],
            ]);
        }
    }
}
