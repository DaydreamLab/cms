<?php

namespace DaydreamLab\Cms\Database\Seeds;

use DaydreamLab\User\Models\User\User;
use DaydreamLab\User\Models\User\UserGroup;
use DaydreamLab\User\Models\Viewlevel\Viewlevel;
use Illuminate\Database\Seeder;

class ViewlevelsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Viewlevel::create([
            'title'     => '橘色涮涮屋',
            'ordering'  => 5,
            'rules'     => [6],
            'created_by'=> 1
        ]);

        Viewlevel::create([
            'title'     => 'Extension 1 by 橘色',
            'ordering'  => 6,
            'rules'     => [7],
            'created_by'=> 1
        ]);
    }

}
