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
        $categoryModelPage = new Category();
        $categoryModelPage->name = 'Uncategorized';
        $categoryModelPage->parent_id = 0;
        $categoryModelPage->slug = 'uncategorized';
        $categoryModelPage->description = '';
        $categoryModelPage->type = Category::TYPE_PAGE;

        $categoryModelPage->save();

        $categoryModelPost = new Category();
        $categoryModelPost->name = 'Uncategorized';
        $categoryModelPost->parent_id = 0;
        $categoryModelPost->slug = 'uncategorized';
        $categoryModelPost->description = '';
        $categoryModelPost->type = Category::TYPE_POST;

        $categoryModelPost->save();
    }
}
