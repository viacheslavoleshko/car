<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Tax;
use DOMDocument;
use DOMXpath;

class TaxController extends Controller
{
    public function index($number)
    {
        $data = Tax::select('t')->where('reg', $number)->first();
        
        if(!$data || is_null($data['t'])) {
            $pattern = '/^[A-Z]{2}[0-9]{2}[A-Z]{3}$/';

            if (preg_match($pattern, $number)) {
                $res = self::curlNumberPlate($number);

                if($res !== '-1') {
                    $json = json_encode($res);
                    $co2 = preg_replace("/[^0-9]/", '', $res['CO₂Emissions']);
                } else { $json = $res; $co2 = '-1'; };
                
                if(!$data) {
                    Tax::insert([
                        'reg' => $number, 
                        'updated_at' => now()->toDateTimeString('Y-m-d H:i:s'), 
                        't' => $json,
                        'co2' => $co2, 
                        'priority' => '1'
                    ]);
                }

                if(is_null($data['t'])) {
                    Tax::where('reg', $number)
                    ->update([
                        'updated_at' => now()->toDateTimeString('Y-m-d H:i:s'), 
                        't' => $json, 
                        'co2' => $co2, 
                        'priority' => '1'
                    ]);
                }
                $data = $res;
            }
        }
        return response()->json(['object' => $data]);
    }

    function curlNumberPlate($vrm){
        $uagent = 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)';
    
        $fields = [
            'Vrm' => $vrm,
        ];
        
        $ch1 = curl_init("https://vehicleenquiry.service.gov.uk/ConfirmVehicle");
        $ch2 = curl_init("https://vehicleenquiry.service.gov.uk/ViewVehicle");

        $options = [
            CURLOPT_HEADER => false,
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_FOLLOWLOCATION => true,
            CURLOPT_USERAGENT => $uagent,
            CURLOPT_VERBOSE => true,
            CURLOPT_SSL_VERIFYHOST => false,
            CURLOPT_SSL_VERIFYPEER => false,
        ];
        
        curl_setopt_array($ch1, $options);
        curl_setopt($ch1, CURLOPT_POSTFIELDS, http_build_query($fields));
        
        $site = curl_exec($ch1);

        $dom = new DOMDocument();
        $dom->loadHTML($site);
        $xpath = new DOMXpath($dom);
        // curl_close($ch1);
    
        $nodes = [
            'viewstate' => $xpath->query('//input[@id="viewstate"]/attribute::value')->item(0)->nodeValue,
            'Vrm' => $xpath->query('//input[@id="Vrm"]/attribute::value')->item(0)->nodeValue,
            'Make' => $xpath->query('//input[@id="Make"]/attribute::value')->item(0)->nodeValue,
            'Colour' => $xpath->query('//input[@id="Colour"]/attribute::value')->item(0)->nodeValue,
            'Correct' => 'True',
        ];
    
        if(isset($nodes['viewstate'])) {

            curl_setopt_array($ch2, $options);
            curl_setopt($ch2, CURLOPT_POSTFIELDS, http_build_query($nodes));

            $result = curl_exec($ch2);
            $dom->loadHTML($result);
            $xpath = new DOMXpath($dom);
    
            $info = [
                'Status' => trim($xpath->query('.//div[@class="column-half"][1]/descendant::h2')->item(0)->nodeValue, " :✗✓"),
                'Tax due' => trim($xpath->query('.//div[@class="column-half"][1]/descendant::strong/text()[preceding-sibling::br]')->item(0)->nodeValue),
            ];
            
            for($i = 0; $i < $xpath->query('.//li[@class="list-summary-item"]')->count(); $i++) {  
                $info[trim($xpath->query('.//li[@class="list-summary-item"]/child::span[1]')->item($i)->nodeValue, " :")] = trim($xpath->query('.//li[@class="list-summary-item"]/child::span[2]')->item($i)->nodeValue, " :");
            }
            // delete null and empty elements
            $info = array_filter($info, function($value) { 
                return !is_null($value) && $value !== ''; 
            });

            return $info;
        } else {
            return '-1';
        }
    }
}
