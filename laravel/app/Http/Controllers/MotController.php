<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Mot;

class MotController extends Controller
{
    public function index()
    {
        $query_select = Mot::select('reg')
        ->whereNull('m')
        ->whereNull('updated_at')
        ->pluck('reg');

        foreach($query_select as $value) {
            sleep(1);
            $res = self::get_car($value);
            var_dump($res);
        
            if($res->httpStatus == "404")
            {
                Mot::where('reg', $value)
                    ->update(['m' => '-1'], ['updated_at' => now()->toDateTimeString('Y-m-d H:i:s')]);
            }else
            {
                $json = json_encode($res[0]);
                
                Mot::where('reg', $value)
                    ->update(['m' => $json], ['updated_at' => now()->toDateTimeString('Y-m-d H:i:s')]);
            }
        }
    }

    function get_car($car) {
        set_time_limit(0);

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
        curl_close($ch);
        return $result;
    }
}
