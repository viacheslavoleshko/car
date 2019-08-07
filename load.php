<?php
    set_time_limit(0);


    define('DS',DIRECTORY_SEPARATOR);
    $my_url = 'https://www.autotrader.co.uk/car-search?postcode=wc2h8ag&sort=datedesc&radius=1500&onesearchad=Used&onesearchad=Nearly%20New&onesearchad=New';

    /*Function, that return a page from the url by curl*/
    function get_page($url){
        $proxy = 'proxy.nix.ltd:9123';
        $uagent = 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)';

        $curl = curl_init();
        curl_setopt($curl, CURLOPT_URL, $url);
        
        curl_setopt($curl, CURLOPT_PROXYTYPE, CURLPROXY_SOCKS5);
        curl_setopt($curl, CURLOPT_PROXY, $proxy);     // PROXY details with port
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($curl, CURLOPT_FOLLOWLOCATION, true);
        curl_setopt($curl, CURLOPT_USERAGENT, $uagent);
        curl_setopt($curl, CURLOPT_VERBOSE, 1);

        curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
        curl_setopt($curl, CURLOPT_TIMEOUT, 10);
        $page = curl_exec($curl);
        curl_close($curl);
        return $page;
    }

    /*Function that returns an array of cars ID on the page*/
    function get_cars_id($page){
        $dom = new DOMDocument();
        @$dom->loadHTML($page);

        /*Class which contains the cars ID*/
        $classname="js-click-handler listing-fpa-link tracking-standard-link";

        $finder = new DomXPath($dom);

        /*Get all elements by classname*/
        $links = $finder->query("//*[contains(@class, '$classname')]");

        $id_array = array();
        foreach($links as $link){
            /*Leave in each link only ID and push it into array*/
            $href = $link->getAttribute("href") . "";
            $href = str_replace("/classified/advert/", "", $href);
            $href = str_replace("new/", "", $href);
            $href = substr($href, 0, 15);
            array_push($id_array, $href);
        }
        $id_array = array_unique($id_array);
        return $id_array;
    }

    /*Function that get all photos links of car by ID*/
    function get_gallery_cars($id){
        /*It`s url to JSON, that return objects with car images URLs by ID*/
        $url = "https://www.autotrader.co.uk/json/fpa/initial/" . $id;
        //sleep(5);
        //$car_json = file_get_contents($url); // old
        $car_json = get_page($url);
        $car_json = json_decode($car_json, TRUE);
        $car_gallery = array();
        $car_gallery = array("title"=>$car_json['advert']['title']);
        $car_gallery['images'] = array();
        foreach($car_json['advert']['imageUrls'] as $image_url){
            $image_url = str_replace("{resize}", "w800h600", $image_url);
            array_push($car_gallery['images'], $image_url);
        }
        return $car_gallery;
    }

    /*Function that, based on photos links of car, determines car plate using openALPR library*/
    function get_car_plate($photo_links_array)
    {
        $connect_string = "host=ninja.nix.ltd port=5372 dbname=car user=car password=Gbfh466578BBFFk#$";      
        $dbconnect = pg_connect($connect_string) or die('connection failed');
        $errors = 0;

        $plate_number = "no number";
        $max = -1.0;
        foreach($photo_links_array as $photo_link){
            $imagedata = file_get_contents($photo_link);
            $base64 = base64_encode($imagedata);
            if(!file_put_contents('tmp'.DS.'check.jpg', base64_decode($base64))){
                $response['error']= 'Error: Failed saving image to disk, please check webserver permissions.';
                respond($response);
            }
            $result = run('alpr --country eu --json tmp'.DS.'check.jpg');
            unlink('tmp'.DS.'check.jpg');

            if(empty($result[0])){
                $response['error']= 'Error: ALPR returned no result';
                respond($response);
            }

            $response['data'] = json_decode( $result[0], TRUE);

            if(!empty($response['data']['results'])){
                if($response['data']['results'][0]['confidence'] > $max)
                {
                    $max = $response['data']['results'][0]['confidence'];
                    $plate_number = $response['data']['results'][0]['plate'];

                    if($plate_number != "no number" && strlen($plate_number) == 7)
                    {
                        $arr = str_split($plate_number);

                        if($arr[0] == '0')
                        {
                            $arr[0] = 'O';
                        }else if( $arr[0] == '1')
                        {
                            $arr[0] = 'I';
                        }

                        if($arr[1] == '0')
                        {
                            $arr[1] = 'O';
                        }else if( $arr[1] == '1')
                        {
                            $arr[1] = 'I';
                        }

                        if($arr[2] == 'O')
                        {
                            $arr[2] = '0';
                        }else if( $arr[2] == 'I')
                        {
                            $arr[2] = '1';
                        }

                        if($arr[3] == 'O')
                        {
                            $arr[3] = '0';
                        }else if( $arr[3] == 'I')
                        {
                            $arr[3] = '1';
                        }

                        if($arr[4] == '0')
                        {
                            $arr[4] = 'O';
                        }else if( $arr[4] == '1')
                        {
                            $arr[4] = 'I';
                        }

                        if($arr[5] == '0')
                        {
                            $arr[5] = 'O';
                        }else if( $arr[5] == '1')
                        {
                            $arr[5] = 'I';
                        }

                        if($arr[6] == '0')
                        {
                            $arr[6] = 'O';
                        }else if( $arr[6] == '1')
                        {
                            $arr[6] = 'I';
                        }

                        $plate_number = implode($arr);

                        $pattern = '/^[A-Z]{2}[0-9]{2}[A-Z]{3}$/'; 
                        if (preg_match($pattern, $plate_number))
                        {
                            $query = "insert into mot (reg) values ('$plate_number')";
                            $result = pg_query($dbconnect, $query);
                
                            if  (!$result) 
                            {
                                echo nl2br("Query did not execute\n");
                                $errors++;
                                if($errors >= 4)
                                {
                                    die("Too many queries errors");
                                }
                            }
                        }
                    }
                }
            }
        }
        pg_close($dbconnect);

        return $plate_number;
    }

    /*Function of openALPR library*/
    function respond($response){
        header('Access-Control-Allow-Origin: *');
        header('Cache-Control: no-cache, must-revalidate');
        header('Content-type: application/json');

        echo json_encode($response);
        exit;
    }

    /*Function of openALPR library*/
    function run($command){
        $output = array();
        exec($command,$output);
        return $output;
    }

    /*Start to calculate result*/
    $cars_info = array();
    for($j = 1; $j < 5; $j++){
        $my_url = $my_url . "&page=" . $j . "";
        $page = get_page($my_url);
        $cars_id = array();
        $cars_id = get_cars_id($page);
        foreach($cars_id as $car_id){
            $tmp_array = array();
            $tmp_array = get_gallery_cars($car_id);
            $plate_number = get_car_plate($tmp_array["images"]);

                      

            print("Car: " . $tmp_array["title"] . "\nPlate: " . $plate_number . "\n\n");
            array_push($cars_info, array("car_name"=>$tmp_array["title"], "car_plate"=>$plate_number));
            sleep(5);
        }
    }
    var_dump($cars_info);
?>
