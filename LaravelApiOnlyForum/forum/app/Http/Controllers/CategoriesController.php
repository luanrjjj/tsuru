<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Category;
use Illuminate\Support\Facades\Auth;

class CategoriesController extends Controller
{
    protected $primaryKey='id';
    public function index()
    {
        return Category::all();
        
        
    }
  
    public function store(Request $request) {
        

       $category = Category::create([
        'category' => $request['category']
        ]);

        return response($category);

       }
        
    }


    
