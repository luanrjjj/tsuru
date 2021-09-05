<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;

class UserFactory extends Factory
{
    
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = User::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name' => $this->faker->name(),
            'email' => $this->faker->unique()->safeEmail(),
            'email_verified_at' => now(),
            'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
            'remember_token' => Str::random(10),
             'avatar'=>'https://www.google.com/search?q=robot+avatar&client=ubuntu&hs=cyT&channel=fs&sxsrf=AOaemvJsPsIueu2HGJH-P_l4FeimWEpQrQ:1630820483971&tbm=isch&source=iu&ictx=1&fir=in6VgujGu0xNdM%252Ct8U3mRpzBsid5M%252C_&vet=1&usg=AI4_-kTSyzRDoKNItO3LjVaUGj6Q2nkDKQ&sa=X&ved=2ahUKEwj2sI7dj-fyAhXqqpUCHXbJAnMQ9QF6BAgIEAE#imgrc=in6VgujGu0xNdM',

        ];
    }

    /**
     * Indicate that the model's email address should be unverified.
     *
     * @return \Illuminate\Database\Eloquent\Factories\Factory
     */
    public function unverified()
    {
        return $this->state(function (array $attributes) {
            return [
                'email_verified_at' => null,
            ];
        });
    }

   
}
