<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Stolen extends Model
{
    protected $table = 'mot';
    protected $casts = [
        'stolen' => 'array',
    ];
}
