<?php
/**
 * Created by IntelliJ IDEA.
 * User: IK
 * Date: 26.08.2019
 * Time: 13:07
 */

namespace App\Http\Controllers;


use App\Models\Est;
use App\Models\Mot;
use Illuminate\Http\Request;


class EstController extends Controller
{
  public function index($number) {
      $mot =  MotController::getData($number);
      echo json_encode([
          'est' => Est::select('*')->whereNotNull('price')->where('make',$mot['m']['make'])->where('model', $mot['m']['model'])->first()
      ]);
  }
}
