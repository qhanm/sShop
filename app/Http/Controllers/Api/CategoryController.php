<?php
namespace App\Http\Controllers\Api;

use App\Components\ApiController;
use App\Models\Category;
use App\Repositories\Interfaces\CategoryRepositoryInterface;
use Illuminate\Http\Request;

class CategoryController extends ApiController
{
    /**
     * @var CategoryRepositoryInterface
     */
    protected $categoryRepository;
    public function __construct(CategoryRepositoryInterface $categoryRepository)
    {
        $this->categoryRepository = $categoryRepository;
    }

    public function index(Request $request)
    {
        $options = [
            'sort' => ['name', 'slug', 'description']
        ];
        return $this->categoryRepository->getAll([], $options, $request->toArray());
    }

    public function show($id)
    {
        return $this->categoryRepository->getOne($id);
    }
}
