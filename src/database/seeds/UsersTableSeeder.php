<?php

namespace DaydreamLab\Cms\Database\Seeds;

use DaydreamLab\JJAJ\Helpers\Helper;
use DaydreamLab\User\Models\User\User;
use DaydreamLab\User\Models\User\UserGroup;
use DaydreamLab\User\Models\User\UserGroupMap;
use DaydreamLab\User\Models\User\UserRoleMap;
use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $data = json_decode(file_get_contents(__DIR__.'/jsons/user.json'), true);

        $this->migrate($data, null);
    }

    public function migrate($data, $parent)
    {
        foreach ($data as $group)
        {
            $users = $group['users'];
            unset($group['users']);

            $group  = UserGroup::create($group);
            $parent = UserGroup::where('title', 'Registered' )->first();
            $parent->appendNode($group);

            foreach ($users as $user)
            {
                $roles = $user['roles'];
                unset($user['roles']);

                $user['password'] = bcrypt($user['password']);
                $user = User::create($user);
                $temp_group['user_id']  = $user->id;
                $temp_group['group_id'] = $group->id;
                $temp_group['created_by'] = 1;
                UserGroupMap::create($temp_group);

                foreach ($roles as $role)
                {
                    $temp_role['user_id']  = $user->id;
                    $temp_role['role_id'] = $role;
                    $temp_role['created_by'] = 1;
                    UserRoleMap::create($temp_role);
                }
            }
        }
    }
}
