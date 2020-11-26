<?php
namespace App\Http\Controllers\Backend;

use App\Components\BackendController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class AuthController extends BackendController
{
    public function login()
    {
        return view('backend.auth.login');
    }

    public function checkLogin(Request $request)
    {
        $request = $request->only(['email', 'password']);

        if(\Auth::attempt($request)){
            return redirect()->route('backend.dashboard.index');
        }

        $validator = Validator::make([], []);
        $validator->errors()->add('email', 'Email or password invalid');

        return redirect()->route('backend.auth.login')->withErrors($validator);
    }
}
