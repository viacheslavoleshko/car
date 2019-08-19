<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Stolen;
use DOMDocument;
use DOMXpath;

class StealController extends Controller
{
    public function index(Request $request)
    {
        $number = $request->input('number');
        $data = Stolen::select('stolen')->where('reg', $number)->first();
        
        if(!$data || is_null($data['stolen'])) {
            $res = self::ifStolen($number);
            $is_stolen = ($res["line0"] == "STOLEN VEHICLE") ? '1' : '0';
            $json = ($res !== '-1') ? json_encode($res) : $res;
            
            Stolen::updateOrInsert(['reg' => $number], 
            [
                'updated_at' => now()->toDateTimeString('Y-m-d H:i:s'), 
                'stolen' => $json,
                'priority' => '1',
                'is_stolen' => $is_stolen,
            ]);
        }
        return response()->json([
            'object' => Stolen::select('stolen')->where('reg', $number)->get()
        ]);
    }

    function ifStolen($vrm){
        $start = microtime(true);
        $proxy = 'proxy.nix.ltd:9123';
        $uagent = 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)';
    
        $fields = [
            'login_username' => 'car-check@efi5.com',
            'login_password' => '1Kerfhgyt!',
            'vrm' => '',
            'vin' => '',
            'login' => 'login',
        ];
        
        $ch1 = curl_init("https://isitnicked.com/login.php");
        $ch2 = curl_init("https://isitnicked.com/customer/vehicle_search.php");

        $options = [
            CURLOPT_HEADER => false,
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_FOLLOWLOCATION => true,
            CURLOPT_USERAGENT => $uagent,
            CURLOPT_VERBOSE => true,
            CURLOPT_SSL_VERIFYHOST => false,
            CURLOPT_SSL_VERIFYPEER => false,

             // PROXY
            CURLOPT_PROXYTYPE => CURLPROXY_SOCKS5,
            CURLOPT_PROXY => $proxy,
        ];
        
        curl_setopt($ch1, CURLOPT_POSTFIELDS, http_build_query($fields));
        curl_setopt_array($ch1, $options);
        
        // COOKIE
        curl_setopt($ch1, CURLOPT_COOKIEJAR, '/tmp/cookies.txt');
        curl_setopt($ch1, CURLOPT_COOKIEFILE, '/tmp/cookies.txt');
        curl_exec($ch1);
    
        $nodes = [
            'vrm' => $vrm,
            'vin' => '', 
            'required_entered' => 'yes',
            'form_post' => 'true',
            'submitvrm' => 'search'
        ];

        curl_setopt($ch2, CURLOPT_POSTFIELDS, http_build_query($nodes));
        curl_setopt_array($ch2, $options);

        // COOKIE
        curl_setopt($ch2, CURLOPT_COOKIEFILE, '/tmp/cookies.txt');

        $result = curl_exec($ch2);
        //var_dump($result);

        $dom = new DOMDocument();
        $dom->loadHTML($result);
        $xpath = new DOMXpath($dom);
            
        $info = array();
        for($i = 0; $i < $xpath->query('.//div[@class="header_notstolen" or @class="header_stolen"]/div[@class="centre_text"]')->count(); $i++) {  
            $info["line$i"] = trim($xpath->query('.//div[@class="header_notstolen" or @class="header_stolen"]/descendant::div[@class="centre_text"]')->item($i)->nodeValue, " ✓");
        }

        // delete null and empty elements
        $info = array_filter($info, function($value) { 
            return !is_null($value) && $value !== ''; 
        });

        if(!empty($info)){
            // JSON generation time
            $time_elapsed_secs = round((microtime(true) - $start)*1000);
            $info[] = "$time_elapsed_secs ms";
        } else { 
            $info = '-1';
        }
        return $info;
    }
}
