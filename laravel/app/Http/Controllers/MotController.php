<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Mot;
use Illuminate\Support\Facades\Storage;

class MotController extends Controller
{
    public function index(Request $request)
    {
        $number = $request->input('number');
        $data = Mot::select('m')->where('reg', $number)->first();

        if(!$data || is_null($data['m'])) {
            $res = self::get_car($number);
            $json = ($res->httpStatus == "404") ? '-1' : json_encode($res[0]);

            Mot::updateOrInsert(['reg' => $number],
            [
                'updated_at' => now()->toDateTimeString('Y-m-d H:i:s'), 
                'm' => $json,
            ]);
        }

        Mot::where('reg', $number)
            ->increment('cnt');
        $record = Mot::select('m')->where('reg', $number)->get();
         $path = file_exists(env('PWA_LOCATION').'/www/assets/logos/'.$record[0]['m']['make'].'.png') ?
               "assets/logos/{$record[0]['m']['make']}.png" :  null;
        return response()->json([
            'object' => $record,
            'carMake' => $path
            ]);
    }

    function get_car($car) 
    {
        $start = microtime(true);

        $url = "https://beta.check-mot.service.gov.uk/trade/vehicles/mot-tests?registration=$car";
        $apiKey = getenv('MOT_API');   
        $headers = array(
            'Accept: application/json+v6',
            "X-Api-Key: $apiKey"
        );
    
        $ch = curl_init();
    
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'GET');
        curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
    
        $result = curl_exec($ch);
        if (curl_errno($ch)) {
            echo 'Error:' . curl_error($ch);
        }
        $result = json_decode(curl_exec($ch));

        // JSON generation time
        $time_elapsed_secs = round((microtime(true) - $start)*1000);
        $result[0]->Runtime = "$time_elapsed_secs ms";
        
        curl_close($ch);
        return $result;
    }
}
