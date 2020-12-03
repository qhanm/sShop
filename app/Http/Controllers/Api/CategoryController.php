<?php
namespace App\Http\Controllers\Api;

use App\Components\ApiController;
use App\Models\Category;
use App\Repositories\Interfaces\CategoryRepositoryInterface;

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

    public function index()
    {
        return $this->categoryRepository->getAll();
    }
}
