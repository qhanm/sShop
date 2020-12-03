<?php
namespace App\Repositories;

use App\Components\Model;
use App\Repositories\Traits\RepositoryTrait;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Pagination\LengthAwarePaginator;

abstract class BaseRepositoryAbstract implements BaseRepositoryInterface
{
    use RepositoryTrait;

	/* @var $model Model **/
	protected $model;

	/* @var $resource JsonResource **/
	protected $resource;

	public function __construct()
	{
        $this->setModel();
        $this->setResource();
	}

	private function setModel()
    {
        $this->model = app()->make($this->getModel());
    }

    private function setResource()
    {
        $this->resource = $this->getResource();
    }

    abstract function getModel();

	abstract function getResource();

	public function getAll(array $joinWith = [], array $options = [], array $params = [])
	{
        $query = $this->model::query();

        if(count($joinWith)) $query = $query->with($joinWith);

        if(isset($options['select']))
        {
            $query->select($options['select']);
        }

        if(isset($options['search'])){
            $arrAttribute = $this->parseToArray($options, 'search');

            $searchValue = isset($params['search']) ? $params['search'] : '';

            if(!empty($searchValue))
            {
                $query->where(function ($_query) use ($arrAttribute, $searchValue) {
                    foreach($arrAttribute as $attribute)
                    {
                        $_query->orWhere($attribute, 'LIKE', '%' . $searchValue . '%');
                    }
                });

            }
        }

        if(isset($options['sort']))
        {
            $arrSort = $this->parseToArray($options, 'sort');

            $sortAttribute = isset($params['sort']) ? $params['sort'] : '';
            if(!empty($searchValue) && in_array($sortAttribute, $arrSort))
            {
                $sortOrder = $this->detectSortOrder($sortAttribute);
                $query->orderBy($sortOrder['attribute'], $sortOrder['sortOrder']);
            }
        }
        $query->forPage(1, 20);

        return $this->resource::collection($query->get());
	}

	public function getOne($id, array $joinWith = [])
	{

	}

	public function update($id, array $data, array $joinWith = [])
	{

	}

	public function create(array $data , array $joinWith = [])
	{

	}

	public function delete($id)
	{

	}

	public function destroy($id)
	{

	}
}
