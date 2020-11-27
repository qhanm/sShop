<?php

namespace App\Models;

use App\Components\BackendModel;

class Page extends BackendModel
{
    protected $table = 'page';

    protected $attributes = [
        'name', 'slug_id', 'content', 'thumbnail', 'status', 'publish_at'
    ];

    protected $fillable = [
        'name', 'slug_id', 'content', 'thumbnail', 'status', 'publish_at'
    ];
}
