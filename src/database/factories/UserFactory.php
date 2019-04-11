<?php

use Faker\Generator as Faker;

$factory->define(\DaydreamLab\User\Models\User\User::class, function (Faker $faker) {
    return [
        'email'             => 'barbage776478@gmail.com',
        'password'          => '123123123',
        'first_name'        => 'garbage',
        'last_name'         => 'garbage',
        'activate_token'    => 'garbage',
        'created_by' => 1
    ];
});