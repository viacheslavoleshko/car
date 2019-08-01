<?php
error_reporting(0);



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

    //var_dump($site);

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
    //var_dump(isset($nodes['viewstate']));
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


        //var_dump($nodes);

        $dom->loadHTML($result);
        $xpath = new DOMXpath($dom);

        $info = [
            'Status bar' => [
            'Status' => $xpath->query('.//div[@class="isValid"][1]/h2')->item(0)->nodeValue,
            'Tax due' => $xpath->query('.//div[@class="isValid"][1]/p/strong/text()[preceding-sibling::br]')->item(0)->nodeValue,
            ],
            'Vehicle make' => $xpath->query('.//ul[@class="list-summary"]/li[1]/span[2]/strong')->item(0)->nodeValue,
            'Date of first registration' => $xpath->query('.//li[@id="UKRegistrationDateDummyDateV5CMatch"]/span[2]/strong')->item(0)->nodeValue,
            'Year of manufacture' => $xpath->query('.//ul[@class="list-summary"]/li[3]/span[2]/strong')->item(0)->nodeValue,
            'Cylinder capacity (cc)' => $xpath->query('.//li[@id="CylinderCapacity"]/span[2]/strong')->item(0)->nodeValue,
            'CO₂Emissions' => $xpath->query('.//ul[@class="list-summary"]/li[5]/span[2]/strong')->item(0)->nodeValue,
            'Fuel type' => $xpath->query('.//li[@id="FuelType"]/span[2]/strong')->item(0)->nodeValue,
            'Euro Status' => $xpath->query('.//ul[@class="list-summary"]/li[7]/span[2]/strong')->item(0)->nodeValue,
            'Export marker' => $xpath->query('.//ul[@class="list-summary"]/li[8]/span[2]/strong')->item(0)->nodeValue,
            'Vehicle status' => $xpath->query('.//ul[@class="list-summary"]/li[9]/span[2]/strong')->item(0)->nodeValue,
            'Vehicle colour' => $xpath->query('.//ul[@class="list-summary"]/li[10]/span[2]/strong')->item(0)->nodeValue,
            'Vehicle type approval' => $xpath->query('.//ul[@class="list-summary"]/li[11]/span[2]/strong')->item(0)->nodeValue,
            'Wheelplan' => $xpath->query('.//ul[@class="list-summary"]/li[12]/span[2]/strong')->item(0)->nodeValue,
            'Revenue weight' => $xpath->query('.//ul[@class="list-summary"]/li[13]/span[2]/strong')->item(0)->nodeValue,
        ];

        //var_dump($info);
        return json_encode($info);
    }else{
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
    //var_dump($numberplates);

    foreach ($numberplates as $value) {
        foreach ($value as $item) {
            
            $json = curlNumberPlate($item);

            $query2 = "update mot set t = '$json' where reg = '$item'";
            //var_dump($query2);
            $result2 = pg_query($dbconnect, $query2);
            if  (!$result2) {
                echo "Query did not execute";
            }
            
        //var_dump($item);
        //curlNumberPlate($item);
        }
        sleep(1);
    }
    if  ($result2) {
        echo "Done";
    }
    pg_free_result($result2);
    pg_close($dbconnect);
}

pushToDB();
//curlNumberPlate();


?>