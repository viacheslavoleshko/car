<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use DB;

class Tax extends Model
{
    public static function getData(){
        $values = DB::table('mot')->pluck('m');
        
        foreach ($values as $value) {
            echo $value;
        }
      }
}
