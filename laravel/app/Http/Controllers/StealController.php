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
        return response()->json([
            'object' => Stolen::select('stolen')->where('reg', $number)->get()
        ]);
    }

    function ifStolen(Request $request){
        $number = $request->input('number');
        $data = Stolen::select('*')->where('reg', $number)->first();
        if(isset($data['reg']) && is_null($data['stolen'])) {
            $start = microtime(true);
            $proxy = 'proxy.nix.ltd:9123';
            $uagent = 'Mozilla/5.0 (Windows NT 6.2; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.100 Safari/537.36';
            $fields = [
                'login_username' => getenv('STOLEN_LOGIN'),
                'login_password' => getenv('STOLEN_PASSWORD'),
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
        ];

        curl_setopt($ch1, CURLOPT_POSTFIELDS, http_build_query($fields));
        curl_setopt_array($ch1, $options);

        // COOKIE
        if (strncasecmp(PHP_OS, 'WIN', 3) == 0) {
            curl_setopt($ch1, CURLOPT_COOKIEJAR, 'cookies.txt');
            curl_setopt($ch1, CURLOPT_COOKIEFILE, 'cookies.txt');
        } else {
            curl_setopt($ch1, CURLOPT_COOKIEJAR, '/tmp/cookies.txt');
            curl_setopt($ch1, CURLOPT_COOKIEFILE, '/tmp/cookies.txt');
        }
        curl_exec($ch1);
    
        $nodes = [
            'vrm' => $number,
            'vin' => '', 
            'required_entered' => 'yes',
            'form_post' => 'true',
            'submitvrm' => 'search'
        ];

            curl_setopt($ch2, CURLOPT_POSTFIELDS, http_build_query($nodes));
            curl_setopt_array($ch2, $options);

        // COOKIE
        if (strncasecmp(PHP_OS, 'WIN', 3) == 0) {
            curl_setopt($ch2, CURLOPT_COOKIEFILE, 'cookies.txt');
        } else {
            curl_setopt($ch2, CURLOPT_COOKIEFILE, '/tmp/cookies.txt');
        }

        $result = curl_exec($ch2);

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

            if (!empty($info)) {
                // JSON generation time
                $time_elapsed_secs = round((microtime(true) - $start) * 1000);
                $info[] = "$time_elapsed_secs ms";
            } else {
                $info = '-1';
            }
            $is_stolen = ($info["line0"] == "STOLEN VEHICLE") ? '1' : '0';
            $json = ($info !== '-1') ? json_encode($info) : $info;
            Stolen::where('reg', $number)
                ->update([
                    'updated_at' => now()->toDateTimeString('Y-m-d H:i:s'),
                    'stolen' => $json,
                    'is_stolen' => $is_stolen,
                ]);
        }

    }
}
