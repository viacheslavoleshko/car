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

Route::group([
    'middleware' => 'correct'
], function () {
    Route::get('/mot/{number}', 'MotController@index');
    Route::get('/tax/{number}', 'TaxController@index');
    Route::get('/co/{number}', 'CO2Controller@index');
    Route::get('/dvla/{number}', 'DvlaController@index');
    Route::get('/vdi/{number}', 'VdiController@index');
    Route::get('/stolen/{number}', 'StealController@index');
    Route::get('/recall/{number}', 'RecallController@index');
});

Route::get('/getrecall', 'RecallController@fill');
Route::get('/lowtax', 'LowTaxController@index');
Route::get('/getregs/{pages}', 'MotController@regsFromPage');

Route::get('/confirm', array('middleware' => 'cors', 'uses' => 'StripeController@confirmPayment'));
Route::post('/leavereview', 'ReviewController@addReview');
Route::get('/getreviews', 'ReviewController@getReview');
Route::get('/recallsformake/{make}', 'RecallController@recallsForMake');
Route::get('/estimate', 'MotController@estimate');
Route::get('/est/{number}', 'EstController@index');
