<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Category;
use Illuminate\Support\Str;

class Thread extends Model
{
    use HasFactory;

    protected $with =['creator'];
    
    public function path()
    {
        return "/threads/{$this->channel->slug}/{$this->slug}";
    }

    public function replies() {
        return $this->hasMany(Reply::class);
    }

    public function creator() {
        return $this->belongsTo(User::class,'user_id');
    }

    public function category() 
    {
        return $this->belongsTo(Category::class);
    }



    public function addReply($reply)
    {
        $this->replies()->create($reply);
    }

    public function getRouteKeyName() {
        return 'slug';
    }
/*
    public function setTitleAttribute($value)
    {
        $this->attributes['title'] = $value;

        if (empty($this->attributes['slug'])) { //Ensure slug is only set once
            if (static::whereSlug($slug = $this->slugify($value))->exists()) {
                $slug = $this->slugify($value);
            }
    
            $this->attributes['slug'] = $slug;
        }
    }
    
    public function slugify($string)
    {
        return Str::slug($string) . '-' . Str::random(8);
    }
    */
}
