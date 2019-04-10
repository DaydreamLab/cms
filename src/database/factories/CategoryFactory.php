<?php

use Faker\Generator as Faker;

$factory->define(\DaydreamLab\Cms\Models\Category\Front\CategoryFront::class, function (Faker $faker) {
    return [
        'title' => 'test1',
        'alias' => 'test1',
        'path'  => '/xxx/xxx/xxx',
        'extension' => 'item',
        'access'    => 1,
        'created_by' => 1
    ];
});