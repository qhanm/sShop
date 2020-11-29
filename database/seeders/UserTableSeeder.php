<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $userModel = new User();
        $userModel->name = 'Quach Hoai Nam';
        $userModel->email = 'qhnam.67@gmail.com';
        $userModel->password = Hash::make('123456');
        $userModel->save();


    }
}
