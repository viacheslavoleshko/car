<?php
//error_reporting(0);



function curlNumberPlate($vrm){

    $info = "https://uk1.ukvehicledata.co.uk/api/datapackage/VdiCheckFull?v=2&api_nullitems=1&auth_apikey=e5a4d4af-a5f0-4fe8-8d53-893116b7ebae&key_VRM={$vrm}";
    $json = file_get_contents($info);   
    
    var_dump($json);

    return $json;
}

function pushToDB(){

    $connect_string = "host=ninja.nix.ltd port=5372 dbname=car user=car password=Gbfh466578BBFFk#$";
    
    $dbconnect = pg_connect($connect_string) or die('connection failed');

    $query = "select reg from mot where reg = 'BV18WAA'";
    $result = pg_query($dbconnect, $query);
    if  (!$result) {
        echo "Query did not execute";
    }
    $numberplates = pg_fetch_all($result);

    foreach ($numberplates as $value) {
        foreach ($value as $item) {
            
            $json = curlNumberPlate($item);
            
            $query2 = "update mot set vdi = '$json' where reg = '$item'";
            $result2 = pg_query($dbconnect, $query2);
            if  (!$result2) {
                echo "Query did not execute";
            }
        }
        sleep(1);
    }
    if  ($result2) {
        echo "Done";
    }
    pg_close($dbconnect);
}

pushToDB();

?>