<?php

namespace Database\Factories;
use App\Models\User;
use App\Models\Thread;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Arr;

class ThreadFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Thread::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [

                'user_id'=> User::factory(),
                'title'=> $this->faker->sentence,
                'body'=>$this->faker->paragraph,
                'category'=>Arr::random(['afim','polinomios','logaritmos','exponencial','modulo','radiciação','potenciação']),        
                'solved'=>Arr::random([true,false])
        ];
    }
}
