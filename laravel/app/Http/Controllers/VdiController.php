<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Vdi;

class VdiController extends Controller
{
    public function index()
    {
        $numbers = Vdi::select('mot.reg')
            ->distinct()
            ->join('stripe', 'mot.reg', '=', 'stripe.reg')
            ->whereNull('vdi')
            ->where('status', 'payed')
            ->whereRaw("(stripe.created_at + interval '10 minute') > now()")
            ->limit(3)
            ->pluck('reg');

        //dd($numbers);

        foreach ($numbers as $number) {

            var_dump($number);
            $json = self::curlNumberPlate($number);
        
            Vdi::where('reg', $number)
                ->update(['vdi' => $json]);
        }
            
    }

    public function curlNumberPlate($vrm)
    {
        $info = "https://uk1.ukvehicledata.co.uk/api/datapackage/VdiCheckFull?v=2&api_nullitems=1&auth_apikey=e5a4d4af-a5f0-4fe8-8d53-893116b7ebae&key_VRM={$vrm}";
        $json = file_get_contents($info);

        return $json;
    }
}
