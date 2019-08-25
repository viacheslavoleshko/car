<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Mot;

class LowTaxController extends Controller
{
    public function index()
    {
        return response()->json([
            'object' => Mot::select('make', 'model', 'year', 'tax12_single')
                ->join('year_tax', function ($join) {
                    $join->whereRaw('mot.co2 between year_tax.co_min and year_tax.co_max');
                })
                ->whereBetween('mot.co2', [0, 120])
                ->whereNotNull('make')
                ->distinct()
                ->orderByRaw('make, model, year')
                ->take(100)
                ->get(),
        ]);
    }
}
