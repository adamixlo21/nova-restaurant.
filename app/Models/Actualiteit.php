<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Actualiteit extends Model
{
    protected $table = 'actualiteiten';

    protected $fillable = [
        'title',
        'slug',
        'excerpt',
        'content',
        'image',
        'is_published',
        'published_at',
    ];

    protected $casts = [
        'is_published' => 'boolean',
        'published_at' => 'datetime',
    ];
}
