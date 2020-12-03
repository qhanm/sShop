<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Seeder;

class CategoryTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = \Faker\Factory::create();

        for ($i = 0; $i <= 100; $i++)
        {
            \DB::table('category')->insert([
                'name' => $faker->name,
                'slug' => $faker->slug,
                'parent_id' => 0,
                'description' => '',
                'type' => 'post',
            ]);
        }
    }
}
