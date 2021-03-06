<?php

namespace App\Models;

use App\Components\BackendModel;

/**
 * Class Category
 * @package App\Models
 * @property string $name
 * @property string $slug
 * @property integer $parent_id
 * @property string $description
 * @property string $type
 */
class Category extends BackendModel
{
    const TYPE_PAGE = 'page';
    const TYPE_POST = 'post';

    protected $table = 'category';

    protected $fillable = [
        'name', 'slug', 'parent_id', 'description', 'type',
    ];
}
