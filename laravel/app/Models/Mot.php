<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use DB;

class Mot extends Model
{
    public static function getData(){
        $values = DB::table('mot')->pluck('t');
        
        foreach ($values as $value) {
            echo $value;
        }
      }
}
