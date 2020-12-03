<?php
namespace App\Repositories\Eloquent;

use App\Models\Category;
use App\Repositories\BaseRepositoryAbstract;
use App\Repositories\Interfaces\CategoryRepositoryInterface;
use App\Repositories\Resources\CategoryResource;

class CategoryRepository extends BaseRepositoryAbstract implements CategoryRepositoryInterface
{

    public function getModel()
    {
        return Category::class;
    }

    public function getResource()
    {
        return CategoryResource::class;
    }
}
