<?php
namespace App\Http\Controllers\Api;

use App\Components\ApiController;
use App\Models\Category;

class CategoryController extends ApiController
{
    public function index()
    {
        return Category::all();
    }
}
