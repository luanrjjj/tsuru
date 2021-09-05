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
        return Thread::find($id);
    }
    public function store(Request $request) {
        $request -> validate ([
       'title'=>['required'],
       'body'=>['required'],
       'category_id'=> ['required']
       ]);
    }

    

    
}
