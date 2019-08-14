<?php
//error_reporting(0);



function curlNumberPlate($vrm){
    $uagent = 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)';

    $fields = [
        'Vrm' => $vrm,
    ];
    
    $ch1 = curl_init();
    $ch2 = curl_init();

    curl_setopt($ch1, CURLOPT_URL, "https://vehicleenquiry.service.gov.uk/ConfirmVehicle");
    curl_setopt($ch1, CURLOPT_HEADER, false);
    curl_setopt($ch1, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch1, CURLOPT_FOLLOWLOCATION, true);
    curl_setopt($ch1, CURLOPT_USERAGENT, $uagent);
    curl_setopt($ch1, CURLOPT_VERBOSE, 1);
    
    curl_setopt($ch1, CURLOPT_SSL_VERIFYHOST, false);
    curl_setopt($ch1, CURLOPT_SSL_VERIFYPEER, false);
    curl_setopt($ch1, CURLOPT_POSTFIELDS, http_build_query($fields));
    
    $site = curl_exec($ch1);

    $dom = new DOMDocument();
    $dom->loadHTML($site);
    $xpath = new DOMXpath($dom);

    $nodes = [
        'viewstate' => $xpath->query('//input[@id="viewstate"]/attribute::value')->item(0)->nodeValue,
        'Vrm' => $xpath->query('//input[@id="Vrm"]/attribute::value')->item(0)->nodeValue,
        'Make' => $xpath->query('//input[@id="Make"]/attribute::value')->item(0)->nodeValue,
        'Colour' => $xpath->query('//input[@id="Colour"]/attribute::value')->item(0)->nodeValue,
        'Correct' => 'True',
    ];

    if(isset($nodes['viewstate'])){
        curl_setopt($ch2, CURLOPT_URL, "https://vehicleenquiry.service.gov.uk/ViewVehicle");
        curl_setopt($ch2, CURLOPT_HEADER, false);
        curl_setopt($ch2, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch2, CURLOPT_FOLLOWLOCATION, true);
        curl_setopt($ch2, CURLOPT_USERAGENT, $uagent);
        curl_setopt($ch2, CURLOPT_VERBOSE, 1);
        
        curl_setopt($ch2, CURLOPT_SSL_VERIFYHOST, false);
        curl_setopt($ch2, CURLOPT_SSL_VERIFYPEER, false);
        curl_setopt($ch2, CURLOPT_POSTFIELDS, http_build_query($nodes));

        
        $mh = curl_multi_init();

        curl_multi_add_handle($mh,$ch1);
        curl_multi_add_handle($mh,$ch2);

        $running = null;
        do {
            curl_multi_exec($mh, $running);
        } while ($running > 0);
        
        curl_multi_remove_handle($mh, $ch1);
        curl_multi_remove_handle($mh, $ch2);
        curl_multi_close($mh);


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
        
        var_dump($info);

        return $info;
    } else {
        return '-1';
    }
}

function pushToDB(){
    $connect_string = "host=ninja.nix.ltd port=5372 dbname=car user=car password=Gbfh466578BBFFk#$";
    
    $dbconnect = pg_connect($connect_string) or die('connection failed');

    $query = "select reg from mot where t is null";
    $result = pg_query($dbconnect, $query);
    if  (!$result) {
        echo "Query did not execute";
    }
    $numberplates = pg_fetch_all($result);
    var_dump($numberplates);


    foreach ($numberplates as $value) {
        foreach ($value as $item) {
            
            $info = curlNumberPlate($item);
            $co2 = preg_replace("/[^0-9]/", '', $info['CO₂Emissions']);
            
            if ($info !== '-1') {
                $json = json_encode($info, JSON_UNESCAPED_UNICODE);
            } else {
                $json = $info;
            }

            $query2 = "update mot set t = '$json', co2 = '$co2' where reg = '$item'";
            $result2 = pg_query($dbconnect, $query2);
            
            if (!$result2) {
                echo "Query did not execute";
            }
        }
        sleep(1);
    }
    if ($result2) {
        echo "Done";
    }
    pg_close($dbconnect);
}

pushToDB();

?>