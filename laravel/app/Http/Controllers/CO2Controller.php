<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\CO2;

class CO2Controller extends Controller
{
    public function index(Request $request)
    {
        $number = $request->input('number');
        
        return response()->json([
            'object' => CO2::select('band', 'co2', 'tax12_single', 'tax6_single')
                ->join('mot', 'mot.co2', '=', 'co2')
                ->whereRaw('mot.co2 between tax.co_min and tax.co_max')
                ->where('mot.reg', $number)
                ->get(),
        ]);
    }
}
