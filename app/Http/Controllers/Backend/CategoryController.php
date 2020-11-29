<?php
namespace App\Http\Controllers\Backend;

use App\Components\BackendController;
use App\Models\Category;

class CategoryController extends BackendController
{
    public function index()
    {
        $model = new Category();
        return view('backend.category.index', [
            'model' => $model,
        ]);
    }
}
