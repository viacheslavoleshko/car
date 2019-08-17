<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Vdi;

class VdiController extends Controller
{
    public function index(Request $request)
    {
        $number = $request->input('number');

        return response()->json([
            'object' => Vdi::select('vdi')
                ->where( 'reg', $number)
                ->get(),
        ]);
    }

    public function fill()
    {
        $numbers = Vdi::distinct()
            ->join('stripe', 'mot.reg', '=', 'stripe.reg')
            ->whereNull('mot.vdi')
            ->where('stripe.status', 'payed')
            ->whereRaw("(stripe.created_at + interval '10 minute') > now()")
            ->limit(3)
            ->pluck('mot.reg');

        foreach ($numbers as $number) {
            var_dump($number);
            $json = self::curlNumberPlate($number);
        
            Vdi::where('reg', $number)
                ->update(['vdi' => $json]);
        }
    }

    public function curlNumberPlate($vrm)
    {
        $apikey = getenv('VDI_API');
        $info = "https://uk1.ukvehicledata.co.uk/api/datapackage/VdiCheckFull?v=2&api_nullitems=1&auth_apikey={$apikey}&key_VRM={$vrm}";
        $json = file_get_contents($info);

        return $json;
    } 
}
