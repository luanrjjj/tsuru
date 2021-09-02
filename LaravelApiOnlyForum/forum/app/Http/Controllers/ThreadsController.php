<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Thread;

class ThreadsController extends Controller
{
    //
    public function index()
    {
        return Thread::all();
        
    }
    public function show(Thread $id) {
        return Thread::find($id);
    }
    public function store(Request $request) {
        $thread = Thread::create($request->all());
        return response()->json($thread,201);
    }
}
