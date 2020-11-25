<?php
use Illuminate\Support\Facades\Route;

Route::get('backend', function (){
    return view('backend.auth.login');
});
