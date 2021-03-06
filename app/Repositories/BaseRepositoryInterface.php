<?php
namespace App\Repositories;

interface BaseRepositoryInterface
{
	public function getAll(array $options = [], array $params = []);

	public function getOne($id, array $joinWith = []);

	public function update($id, array $data, array $joinWith = []);

    public function create(array $data, array $joinWith = []);

    public function delete($id); // soft delete

    public function destroy($id);
}
