<?php
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Backend\AuthController;
use App\Http\Controllers\Backend\DashboardController;
Route::get('backend', function (){
    return view('backend.auth.login');
});


Route::prefix('backend')->group(function (){

    Route::middleware(['check.login'])->group(function (){
        Route::get('/', [DashboardController::class, 'index'])->name('backend.dashboard.index');
    });

    // AuthController
    Route::get('login', [AuthController::class, 'login'])->name('backend.auth.login');
    Route::post('login', [AuthController::class, 'checkLogin'])->name('backend.auth.checkLogin');
});
