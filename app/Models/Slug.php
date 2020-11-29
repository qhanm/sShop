<?php

namespace App\Models;

use App\Components\BackendModel;

/**
 * Class Slug
 * @package App\Models
 * @property string $name
 * @property string $type
 * @property string $url
 */
class Slug extends BackendModel
{
    protected $table = 'slug';

    protected $attributes = [
        'name', 'type', 'url',
    ];
}
