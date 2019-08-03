<?php

use Illuminate\Http\Request;
use App\Models\Mot;
use App\Models\Tax;
use function GuzzleHttp\json_encode;

error_reporting(E_ALL & ~E_WARNING  & ~E_NOTICE & ~E_STRICT & ~E_DEPRECATED);
 
header('Access-Control-Allow-Origins: Content-Type, X-Auth-Token, Origin, Authorization, Token, token, Image, image, content, content-type');
header('Access-Control-Allow-Headers: Content-Type, X-Auth-Token, Origin, Authorization, Token, token, Image, image, content, content-type');
header('Access-Control-Allow-Methods: *');

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/tax/{number}', function ($number){
    return response()->json([
        'object' => Mot::select('t')
            ->where('reg', $number)
            ->get()
    ]);
});

Route::get('/mot/{number}', function ($number){
    return response()->json([
        'object' => Tax::select('m')
            ->where('reg', $number)
            ->get()
    ]);
});

Route::get('/', function () {
    return view('welcome');
});

