<?php


namespace App\Http\Controllers;


use App\Models\Est;
use App\Models\Mot;
use Illuminate\Http\Request;
use DB;


class EstController extends Controller
{
  public function index($number) {
      $mot =  MotController::getData($number);
      echo json_encode([
          'est' => Est::select('*')->whereNotNull('price')->where('make',$mot['m']['make'])->where('model', $mot['m']['model'])->first()
      ]);
  }
    public function estimate() {
        $apikey = getenv('VDI_API_TEST');
        $records = DB::select(DB::raw("select min(reg), make, model from (
       select reg, m.make, m.model from mot m
       left join (select distinct make, model from est) e
       on m.make = e.make and m.model = e.model
       where reg like '%A%'
       and m.m is not null
       and m.m::text <> '-1'
       and m.make is not null
       and m.model is not null
       and m.estimate is null
       and e.make is null
       ) t
          group by make, model
          LIMIT 10
        "));


        foreach ($records as $record) {
            $info = "https://uk1.ukvehicledata.co.uk/api/datapackage/ValuationData?v=2&api_nullitems=1&auth_apikey={$apikey}&key_VRM={$record->min}";
            $apiResult = file_get_contents($info);
            $res = $apiResult ? $apiResult : null;
            //sleep(3);
            $res = stripslashes(html_entity_decode($res));
            $estimate = json_decode($res, true);
            $otr = array_column($estimate['Response']['DataItems'], 'OTR');
            Mot::where('reg', $record->min)->update([
                'estimate' => $res
            ]);

            DB::table('est')->insert([
                ['make' => $record->make,
                    'model' => $record->model,
                    'price' => $otr[0]]
            ]);

        }
         echo json_encode([
             'status' => 'OK'
         ]);
    }
}
