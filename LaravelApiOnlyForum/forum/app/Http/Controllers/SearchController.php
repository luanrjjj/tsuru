<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class SearchController extends Controller
{
    public function index() {
        $userId = Auth::id();
        
        $threads = $threads->where('user_id',$userId);

        return ($userId);
    }

}
