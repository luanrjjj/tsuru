<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ThreadsController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\CategoriesController;
use App\Http\Controllers\SearchController;

Route::post('/register',[RegisterController::class,'register']);
Route::post('login',[LoginController::class,'login']);


Route::post('/threads/store', [ThreadsController::class, 'store']);


Route::get('/threads/show',[ThreadsController::class, 'show']);
//Categories 
Route::get('/categories',[CategoriesController::class,'index']);
Route::get('/categories/store',[CategoriesController::class,'store']);
Route::get('/search',[SearchController::class, 'userThreads']);

Route::group([
    'middleware'=> ['jwt.verify']],function(){
        

        Route::get('threads/mythreads',[ThreadsController::class, 'myThreads']);

    });

/*
Route::group([
    'middleware'=> ['jwt.verify']],function(){



//Threads
Route::get('/threads/create',[ThreadsController::class,'create'])->name('threads.create');
Route::get('/threads/search', [ThreadsController::class, 'show'])->name('search');
Route::get('/threads/{category}', [ThreadsController::class, 'index'])->name('threads.index.channel');
Route::delete('/threads/{category/{thread}', [ThreadsController::class,'destroy'])->name('threads.destroy');

Route::post('/threads/{thread}/replies', [ThreadsController::class, 'store']);




});

*/