<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Thread;
use Illuminate\Support\Facades\Auth;


class ThreadsController extends Controller
{


    public function index()
    {
        return Thread::all();
        
        
    }
    public function show(Thread $id) {
        return Thread::find($id,1);
    }

    public function myThreads() {
        $userId = Auth::id();
        
        $threads = Thread::where('user_id',$userId)->get();

        return ($threads);
    }



    public function store(Request $request) {
        $request -> validate ([
       'title'=>['required'],
       'body'=>['required'],
       'category'=> ['required']
        
       ]);

       $thread = Thread::create([
        'user_id' =>551,
        'category' => $request['category'],
        'title' => $request['title'],
        'body' => $request['body']
        ]);

        if ($request->expectsJson()) {
            return response($thread);
        }
        return response($thread);
    }


    
}
