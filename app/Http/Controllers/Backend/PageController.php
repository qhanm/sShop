<?php
namespace App\Http\Controllers\Backend;

use App\Components\BackendController;
use App\Models\Page;

class PageController extends BackendController
{
    public function index()
    {
        return view('backend.page.index');
    }

    public function create()
    {
        $model = new Page();

        return view('backend.page.create', [
            'model' => $model
        ]);
    }
}
