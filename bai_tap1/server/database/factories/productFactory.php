<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use Faker\Generator as Faker;

$factory->define(\App\Models\Product::class, function (Faker $faker) {
    return [
        'name'   => $faker->name,
        'price'  => rand(10000, 9999999),
        'status' => true,
    ];
});
