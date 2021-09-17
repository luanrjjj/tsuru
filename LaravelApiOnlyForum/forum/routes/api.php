<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ThreadsController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\CategoriesController;

Route::post('/register',[RegisterController::class,'register']);

Route::post('login',[LoginController::class,'login']);
Route::get('/threads', [ThreadsController::class, 'index'])->name('threads.index');


//Categories 
Route::get('/categories',[CategoriesController::class,'index']);
Route::get('/categories/store',[CategoriesController::class,'store']);


Route::group([
    'middleware'=> ['jwt.verify']],function(){



//Threads
Route::get('/threads/create',[ThreadController::class,'create'])->name('threads.create');
Route::get('/threads/search', [ThreadsController::class, 'show'])->name('search');
Route::get('/threads/{category}', [ThreadsController::class, 'index'])->name('threads.index.channel');
Route::delete('/threads/{channel}/{thread}', [ThreadsController::class,'destroy'])->name('threads.destroy');

Route::post('/threads/{thread}/replies', [ThreadsController::class, 'store']);




});