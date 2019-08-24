<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Storage;
use App\Models\Recall;
use App\Models\Mot;
use DB;

class RecallController extends Controller
{
    public function index(Request $request)
    {
        $number = $request->input('number');
        
        return response()->json([
            'object' => DB::select(DB::Raw("select * from (
                select 
                    reg, 
                    m->>'make' as make, 
                    m->>'model' as model, 
                    to_date(m->>'manufactureDate', 'YYYY.MM.DD') as manuf 
                from mot where reg = '$number'
                ) as sub 
                left join recall on  recall.model = sub.model 
                where manuf between build_start and build_end 
                order by launch_date desc")),
        ]);
    }

    public function fill()
    {
        $start = microtime(true);

        // Storage::disk('local')->put('RecallsFile.csv', file_get_contents('https://www.check-vehicle-recalls.service.gov.uk/documents/RecallsFile.csv'));

        $csv = array_map('str_getcsv', preg_replace( '/[^[:print:]]/', '', file(storage_path('app/RecallsFile.csv'))));
        array_walk($csv, function(&$a) use ($csv) {
            $a = array_combine($csv[0], $a);
        });
        array_shift($csv);      
        
        $data = [];

        foreach($csv as $line) {
            $nodes = array_map(function($value) {
                return $value === "" ? NULL : $value;
             }, array(
                    'launch_date' => trim($line["Launch Date"], ' .'),
                    'recalls_number' => trim($line["Recalls Number"]),
                    'make' => trim($line["Make"]),
                    'recalls_model_information' => trim($line["Recalls Model Information"]),
                    'concern' => trim($line["Concern"]),
                    'defect' => trim($line["Defect"]),
                    'remedy' => trim($line["Remedy"]),
                    'vehicle_numbers' => trim($line["Vehicle Numbers"]),
                    'manufacturer_ref' => trim($line["Manufacturer Ref"]),
                    'model' => trim($line["Model"]),
                    'vin_start' => trim($line["VIN Start"]),
                    'vin_end' => trim($line["VIN End"]),
                    'build_start' => trim($line["Build Start"], ' .'),
                    'build_end' => trim($line["Build End"], ' .'),
                ));

            array_push($data, $nodes);
        }
        self::PrepareTable();

        $data = collect($data);
        $chunks = $data->chunk(1000);

        foreach ($chunks as $chunk)
        {
            $query = Recall::insert($chunk->toArray());
        }
        
        Recall::where('model', 'Mazda6')
            ->update(['model' => '6']);

        if($query) {
            echo "Done";
        } else {
            echo "Query did not execute";
        }

        print_r(" " . round((microtime(true) - $start) * 1000) . " ms");

    }

    public function PrepareTable()
    {
        DB::statement("SET datestyle = 'ISO, DMY'");
        DB::statement("TRUNCATE TABLE recall");
        DB::statement("ALTER SEQUENCE recall_id_seq RESTART");
    }
}
