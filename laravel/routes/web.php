<?php

use Illuminate\Http\Request;
use App\Models\Mot;
use App\Models\Tax;
use function GuzzleHttp\json_encode;

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

Route::get('/mot/{number}', function ($number){
    return response()->json([
        'object' => Mot::select('t')
            ->where('reg', $number)
            ->get()
    ], JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
});

Route::get('/tax/{number}', function ($number){
    return response()->json([
        'object' => Tax::select('m')
            ->where('reg', $number)
            ->get()
    ]);
});

Route::get('/', function () {
    return view('welcome');
});

