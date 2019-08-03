<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Mot extends Model
{
    protected $table = 'mot';
    protected $casts = ['m' => 'array'];
}
