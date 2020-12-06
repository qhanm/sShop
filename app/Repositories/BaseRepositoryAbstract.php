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

	protected $columns;

	protected $table;

	public function __construct()
	{
        $this->setModel();
        $this->setResource();
        $this->table = $this->model->getTable();
        $this->columns = $this->getColumns($this->table);
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

	public function getAll(array $options = [], array $params = [])
	{
	    foreach ($options as $key => $option)
        {
            if(count(array_diff($option, $this->columns)) !== 0){
                throw new \Exception("The $key not in columns in table $this->table ");
            }
        }

        $query = $this->model::query();

        if(isset($options['joinWith'])) $query = $query->with($options['joinWith']);

        //if(count($joinWith)) $query = $query->with($joinWith);

        if(isset($options['select'])) $query->select($options['select']);

        if(isset($options['search'])){
            $arrAttribute = $this->parseToArray($options, 'search');
            $searchValue = isset($params['search']) ? $params['search'] : '';

            if(!empty($searchValue))
            {
                $query = $query->where(function ($_query) use ($arrAttribute, $searchValue) {
                    foreach($arrAttribute as $attribute) {
                        $_query->orWhere($attribute, 'LIKE', '%' . $searchValue . '%');
                    }
                });
            }
        }

        if(isset($options['sort']))
        {
            $arrSort = $this->parseToArray($options, 'sort');

            $sortAttribute = isset($params['sort']) ? $params['sort'] : '';
            $sortOrder = $this->detectSortOrder($sortAttribute);

            if(!empty($sortAttribute) && in_array($sortOrder['attribute'], $arrSort)) {
                $query->orderBy($sortOrder['attribute'], $sortOrder['sortOrder']);
            }
        }

        if(isset($options['filter']) && isset($params['filter']) )
        {
            $filters = $params['filter'];
            foreach($filters as $key => $filter) {
                if(in_array($key, $options['filter']) )
                {
                    $arrValue = explode(',', $filter);
                    if(count($arrValue) > 0){
                        $query->whereIn($key, $arrValue);
                    }else{
                        $query->where($key, implode('', $arrValue));
                    }
                }
            }


        }

        $perPage = 10;
        if(isset($params['per_page']) && $params['per_page'] > 0) $perPage = $params['per_page'];

        $currentPage = 1;
        if(isset($params['page']) && $params['page'] > 0) $currentPage = $params['page'];

        $items = $query->paginate($perPage);
        $totalCount = $query->pluck($this->model->getTable() . '.' . $this->model->getKeyName())->count();

        new LengthAwarePaginator($items, $totalCount, $perPage, $currentPage);

        return $this->resource::collection($items);
	}

	public function getOne($id, array $joinWith = [])
	{
        return $this->findOrFail($id);
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

	private function findOrFail($id)
    {
        return $this->model::query()->findOrFail($id);
    }
}
