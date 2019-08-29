<?php
/**
 * Created by IntelliJ IDEA.
 * User: IK
 * Date: 29.08.2019
 * Time: 17:38
 */

namespace App\Http\Controllers;


use App\Models\Stat;
use Illuminate\Http\Request;
use DB;

class StatController extends Controller
{
   public function index(Request $request)
   {
       $token = $request->header('token');
       return response()->json([
           'object' => DB::select(DB::Raw("
           select d, t.reg, make, model, t.created_at from (
           select distinct 'Viewed' d, reg, created_at 
           from stat 
           where token = '$token'
           union all
           select distinct 'Purchased', reg, created_at 
           from stripe
           where token = '$token' 
           ) t 
           left join mot m on t.reg = m.reg
           order by created_at desc
           "))
       ]);
   }
}
