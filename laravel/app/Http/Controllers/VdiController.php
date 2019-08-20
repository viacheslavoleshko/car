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
        $data = Vdi::select('vdi')->where('reg', $number)->first();

        if(is_null($data['vdi'])) {
            $res = self::curlNumberPlate($number);
            $json = ($res !== '-1') ? json_encode($res) : $res;
            
            Stolen::where('reg', $number)
            ->update([
                'updated_at' => now()->toDateTimeString('Y-m-d H:i:s'), 
                'vdi' => $json,
            ]);
        }
        return response()->json([
            'object' => Vdi::select('vdi')->where( 'reg', $number)->get()
        ]);
    }

    public function curlNumberPlate($vrm)
    {
        $apikey = getenv('VDI_API');
        $info = "https://uk1.ukvehicledata.co.uk/api/datapackage/VdiCheckFull?v=2&api_nullitems=1&auth_apikey={$apikey}&key_VRM={$vrm}";
        $json = file_get_contents($info);

        return $json;
    } 
}
