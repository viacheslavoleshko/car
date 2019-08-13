<?php

namespace App\Models;


use Illuminate\Database\Eloquent\Model;

class Vdi extends Model
{
 protected $table = 'mot';
 protected $casts = [
     'vdi' => 'array',
    ];
}
