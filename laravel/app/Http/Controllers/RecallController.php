<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Storage;
use App\Models\Recall;

class RecallController extends Controller
{
    public function index()
    {
        set_time_limit(0);
        $start = microtime(true);

        Storage::disk('local')->put('Recalls.csv', file_get_contents('https://www.check-vehicle-recalls.service.gov.uk/documents/RecallsFile.csv'));

        $csv = array_map('str_getcsv', preg_replace( '/[^[:print:]]/', '', file(storage_path('app/Recalls.csv'))));
        array_walk($csv, function(&$a) use ($csv) {
            $a = array_combine($csv[0], $a);
        });
        array_shift($csv);      
        
        $data = [];

        foreach($csv as $line) {
            array_push($data, 
                array(
                    'launch_date' => $line["Launch Date"],
                    'recalls_number' => $line["Recalls Number"],
                    'make' => $line["Make"],
                    'recalls_model_information' => $line["Recalls Model Information"],
                    'concern' => $line["Concern"],
                    'defect' => $line["Defect"],
                    'remedy' => $line["Remedy"],
                    'vehicle_numbers' => $line["Vehicle Numbers"],
                    'manufacturer_ref' => $line["Manufacturer Ref"],
                    'model' => $line["Model"],
                    'vin_start' => $line["VIN Start"],
                    'vin_end' => $line["VIN End"],
                    'build_start' => $line["Build Start"],
                    'build_end' => $line["Build End"],
                ),
            );
        };
        
        $query = Recall::insert($data);

        if($query) {
            echo "Done";
        } else {
            echo "Query did not execute";
        }

        var_dump(round((microtime(true) - $start) * 1000));

    }
}