<?php

namespace Database\Factories;

use App\Models\Profile;
use Faker\Provider\Address;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Carbon;
use Str;

class ProfileFactory extends Factory
{
    protected $model = Profile::class;

    public function definition(): array
    {
        $firstName = $this->faker->firstName();
        $lastName = $this->faker->lastName();
        $name = $firstName.' '.$lastName;
        $uname = str_replace(" ", "_", $name);
        $uname = strtolower($uname);
        $tag_line = Str::of($this->faker->words(5,true))->headline()->value();
        return [
            'name' => $name,
            'uname' => $uname,
            'age' => $this->faker->numberBetween(16,60),
            'zip' => Address::postcode(),
            'gender' => $this->faker->numberBetween(1,5),
            'commitment' => $this->faker->randomElement(['Short Term','Long Term']),
            'bio' => $this->faker->words(20,true),
            'tag_line' => $tag_line,
            'created_at' => Carbon::now()->subDays(rand(0,365)),
            'user_id' => 0,
        ];
    }

}
