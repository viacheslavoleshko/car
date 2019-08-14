<?php

use App\Http\Controllers\DvlaController;
use Illuminate\Http\Request;
use App\Models;

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

Route::get('/', function () {
    return view('welcome');
});

Route::get('/tax/{number}', function ($number) {
    return response()->json([
        'object' => $data = Models\Tax::select('t')->where('reg', $number)->get(),
    ]);
});

Route::get('/mot/{number}', function ($number) {
    return response()->json([
        'object' => $data = Models\Mot::select('m')->where('reg', $number)->get(),
    ]);
});

Route::get('/vdi/{number}', function ($number) {
    return response()->json([
        'object' => $data = Models\Vdi::select('vdi')->where('reg', $number)->get(),
    ]);
});

Route::get('/dvla/{number}', function ($number) {
    return response()->json([
        'object' => $data = Models\Dvla::select('location', 'area')->where( 'first_reg', substr($number, 0, 2) )->get(),
    ]);
});

Route::group([
    'as' => 'gmaps::',
    'prefix' => 'gmaps',
], function () {
    Route::get('/car/', [
        'uses'       => 'SitemapController@index',
        'as'         => 'index',
    ]);
    Route::get('/car/{page}', [
        'uses' => 'SitemapController@numbers',
        'as' => 'sitemap',
    ])->where('page', '[0-9]+');
});

Route::get('stripe', array(
    'middleware' => 'cors', 
    'uses' => 'StripeController@stripeGet'
));

Route::get('getvdi', 'VdiController@index');

Route::get('getmot', 'MotController@index');

//Route::get('dvla', 'DvlaController@fill');