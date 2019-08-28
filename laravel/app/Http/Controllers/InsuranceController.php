<?php

namespace App\Http\Controllers;
use DOMDocument;
use DOMXpath;
use App\Models\Insurance;
use DB;
use Illuminate\Http\Request;

class InsuranceController extends Controller
{

    public function index()
    {
        return response()->json([
            'object' => DB::select(DB::Raw("SELECT make, model FROM (
                SELECT 
                    COUNT(1), 
                    make, 
                    model, 
                    min(ins_group) AS min_group, 
                    max(ins_group) AS max_group 
                FROM ins 
                GROUP BY make, model
                ) AS sub 
                where min_group < 8 AND max_group  < 8
                ORDER BY min_group, max_group
                LIMIT 9")),
        ]);
    }

    public function insurance()
    {
        $start = microtime(true);
        set_time_limit(0);
        $allmodels = 0;
        for($p = 1; $p <= 50; $p++) {
            $data = [];
            $info = [];

            $uagent = 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)';
            $ch = curl_init("https://www.parkers.co.uk/car-insurance/group-$p/");

            $options = [
                CURLOPT_HEADER => false,
                CURLOPT_RETURNTRANSFER => true,
                CURLOPT_FOLLOWLOCATION => true,
                CURLOPT_USERAGENT => $uagent,
                CURLOPT_VERBOSE => true,
                CURLOPT_SSL_VERIFYHOST => false,
                CURLOPT_SSL_VERIFYPEER => false,
            ];
    
            curl_setopt_array($ch, $options);
            $site = curl_exec($ch);

            $dom = new DOMDocument();
            $dom->loadHTML($site);
            $xpath = new DOMXpath($dom);

            for($i = 1; $i <= $xpath->query('.//div[@id="insuranceModelsByGroup"]/ul[@class="info-box"]')->count(); $i++) {
                for($j = 0; $j < $xpath->query(".//div[@id='insuranceModelsByGroup']/ul[@class='info-box'][$i]/li[@class='info-box__item']")->count(); $j++) {
                    
                    $info = [
                        'make' => trim($xpath->query('.//div[@id="insuranceModelsByGroup"]/ul[@class="info-box"]/li[@class="info-box__heading"]')->item($i-1)->nodeValue),
                        'model' => trim(stristr($xpath->query(".//div[@id='insuranceModelsByGroup']/ul[@class='info-box'][$i]/li[@class='info-box__item']/descendant::span[@class='info-box__item__value']")->item($j)->nodeValue, '(', true)),
                        'ins_group' => "$p",
                    ];
                    array_push($data, $info);
                }
            }
            try { 
                $query = Insurance::insert($data);
                $models = count($data);
                echo nl2br($models . " car models inserted to database from $p group\n");
                $allmodels += $models;
            } catch(\Illuminate\Database\QueryException $ex) { 
                echo nl2br("0 car models inserted to database from $p group\n");
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

        print_r(" " . $allmodels . " car models inserted in " . round((microtime(true) - $start) * 1000) . " ms");
        ob_end_flush();
    }
}
