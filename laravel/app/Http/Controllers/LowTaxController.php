<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Mot;

class LowTaxController extends Controller
{
    public function index($order = 'model')
    {
        return response()->json([
            'object' => Mot::select('make', 'model', 'year', 'tax12_single')
                ->join('year_tax', 'co2', '=', 'mot.co2')
                ->whereRaw('mot.co2 between year_tax.co_min and year_tax.co_max')
                ->whereBetween('mot.co2', [0, 150])
                ->orderBy($order)
                ->get(),
        ]);
    }
}
