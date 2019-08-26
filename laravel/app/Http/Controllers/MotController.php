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
        $data = self::getData($number);
         $list = ['bmw', 'seat', 'audi', 'mercedes-benz', 'yamaha', 'alfa romeo', 'bentley', 'citroen', 'dacia', 'darracq',
            'ducati', 'ferrari', 'fiat', 'ford', 'harley davidson', 'honda', 'hyundai', 'jaguar', 'kawasaki', 'jeep', 'kia',
             'land rover', 'lexus', 'mazda', 'mitsubishi', 'mini', 'peugeot', 'nissan', 'porsche', 'reva', 'rover', 'saab',
             'seat', 'skoda', 'smart', 'subaru', 'suzuki', 'toyota', 'triumph', 'vauxhall', 'volkswagen', 'volvo'];
        if(!$data || is_null($data['m'])) {
            $res = self::get_car($number);
            $make = $res[0]->make;
            $model = $res[0]->model;
            $year = $res[0]->manufactureDate;
            $json = ($res->httpStatus == "404") ? '-1' : json_encode($res[0]);

            Mot::updateOrInsert(['reg' => $number],
            [
                'updated_at' => now()->toDateTimeString('Y-m-d H:i:s'), 
                'm' => $json,
                'make' => $make,
                'model' => $model,
                'year' => substr($year, 0, 4),
            ]);
        }

        Mot::where('reg', $number)
            ->increment('cnt');
        $record = Mot::select('m')->where('reg', $number)->get();
        $path = in_array(strtolower($record[0]['m']['make']), $list) ?  "assets/logos/{$record[0]['m']['make']}.png" : null;

        return response()->json([
            'object' => $record,
            'carMake' => $path,
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
    public function getData($number) {
        return  Mot::select('m')->where('reg', $number)->first();
    }
    public function estimate() {
        $apikey = getenv('VDI_API');
        $records = Mot::select('*')->whereNotNull('m')->whereNull('estimate')->where('reg', 'like', '%A%')->get();
        foreach ($records as $record) {
            $info = "https://uk1.ukvehicledata.co.uk/api/datapackage/ValuationData?v=2&api_nullitems=1&auth_apikey={$apikey}&key_VRM={$record->reg}";
            $res = file_get_contents($info) ? file_get_contents($info): null;
            sleep(1);
            Mot::where('reg', $record->reg)->update([
                'estimate' => $res
            ]);
            echo json_encode([
                'response' => $res
            ]);
        }
    }
}
