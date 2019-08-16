<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Mot;

class MotController extends Controller
{
    public function index($number)
    {
        $data = Mot::select('m')->where('reg', $number)->get();

        if(!$data) {
            $pattern = '/^[A-Z]{2}[0-9]{2}[A-Z]{3}$/'; 
            if (preg_match($pattern, $number)) {   
                $res = self::get_car($number);
                $json = ($res->httpStatus == "404") ? '-1' : json_encode($res[0]);

                Mot::insert([
                    'reg' => $number, 
                    'updated_at' => now()->toDateTimeString('Y-m-d H:i:s'), 
                    'm' => $json, 
                    'priority' => '1'
                ]);
                $data = $res[0];
            }
        }
        return response()->json(['object' => $data]);
    }

    function get_car($car) 
    {
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
