<?php

namespace App\Http\Controllers;

use App\Models\Stat;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Mot;
use Illuminate\Support\Facades\Storage;

class MotController extends Controller
{
    public function index(Request $request)
    {
        $token = $request->header('token');
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
        Stat::insert([
            'reg' => $number,
            'token' => $token
        ]);
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

    function regsFromPage($offset, $pages)
    {
        $start = microtime(true);
        $allregs = 0;
        set_time_limit(0);
        $pattern = '/(?=[A-Z]{2}[0-9]{2}[A-Z]{3})[^IQZ]{2}[0-9]{2}[^IQ]{3}/';

        for($i = $offset; $i <= $pages; $i++) {
            $valid = [];
            $url = "https://beta.check-mot.service.gov.uk/trade/vehicles/mot-tests?page=$i";
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
            $json = curl_exec($ch);

            if (curl_errno($ch)) {
                echo 'Error:' . curl_error($ch);
            }

            $records = json_decode($json);
            foreach($records as $record) {
                if (preg_match($pattern, $record->registration)) {

                    $find = stripos($record->registration, "A");
                    if ($find !== false) {
                        
                        $record = [
                            'reg' => $record->registration,
                            'updated_at' => now()->toDateTimeString('Y-m-d H:i:s'),
                            'm' => json_encode($record),
                            'make' => $record->make,
                            'model' => $record->model,
                            'year' => substr($record->manufactureDate, 0, 4),
                        ];
                        array_push($valid, $record);
                    }
                }
            }
            try { 
                $query = Mot::insert($valid);
                $regs = count($valid);
                echo nl2br($regs . " regs inserted to database from $i page\n");
                $allregs += $regs;
            } catch(\Illuminate\Database\QueryException $ex) { 
                echo nl2br("0 regs inserted to database from $i page\n");
                dump($ex->getMessage()); 
            }
            ob_flush();
            flush();
            sleep(2);
        }
        curl_close($ch);
        
        if($query) {
            echo "Done";
        } else {
            echo "Query did not execute";
        }
        print_r(" " . $allregs . " regs inserted in " . round((microtime(true) - $start) * 1000) . " ms");
        ob_end_flush();
    }

    public function getData($number) {
        return  Mot::select('m')->where('reg', $number)->first();
    }

}

