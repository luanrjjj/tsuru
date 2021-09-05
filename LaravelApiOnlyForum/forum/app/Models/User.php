<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Support\Str;
use Tymon\JWTAuth\Contracts\JWTSubject;

class User extends Authenticatable implements JWTSubject
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var string[]
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'avatar'
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    

    public function getJWTIdentifier() {
        return $this->getKey();
    }

    /**
     * Return a key value array, containing any custom claims to be added to the JWT.
     *
     * @return array
     */
    public function getJWTCustomClaims() {
        return [];
    }  
/*
    public function getAvatarAttribute() 
    
    {
        $url_avatar = 'https://www.google.com/search?q=robot+avatar&client=ubuntu&hs=cyT&channel=fs&sxsrf=AOaemvJsPsIueu2HGJH-P_l4FeimWEpQrQ:1630820483971&tbm=isch&source=iu&ictx=1&fir=in6VgujGu0xNdM%252Ct8U3mRpzBsid5M%252C_&vet=1&usg=AI4_-kTSyzRDoKNItO3LjVaUGj6Q2nkDKQ&sa=X&ved=2ahUKEwj2sI7dj-fyAhXqqpUCHXbJAnMQ9QF6BAgIEAE#imgrc=in6VgujGu0xNdM';
        return $url_avatar;
    }
    */
}