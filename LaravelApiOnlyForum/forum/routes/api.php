<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ThreadsController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\AuthController;


Route::post('/register',[RegisterController::class,'register']);

Route::post('login',[LoginController::class,'login']);


Route::group([
    'middleware'=> 'api',
    'prefix'=>'auth'
],function($router){

Route::get('/threads', [ThreadsController::class, 'index'])->name('threads.index');


Route::get('/threads/{thread}', [ThreadsController::class, 'show']);

Route::post('/threads/{thread}/replies', [ThreadsController::class, 'store']);

});