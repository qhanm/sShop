<?php
namespace App\Repositories;

class abstract BaseRepositoryAbtract implements BaseRepositoryInterface
{
	public function getAll(array $joinWith = [], array $options = [], array $params = [])
	{

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