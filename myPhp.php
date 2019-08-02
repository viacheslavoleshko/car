<?php
$car_numb = "MD67VCM"; //car name
// ------------------function to get information -------------------
// ------------------about the machine behind the name--------------
function get_car($car) {
    $url = "https://beta.check-mot.service.gov.uk/trade/vehicles/mot-tests?registration=$car";
    $apiKey = 'KUrpvRU9dv7CEJhQQ61VA1mDfiPjVckA3FolOaOy';   
    $headers = array(
        'Accept: application/json+v6',
        "X-Api-Key: $apiKey"
    );

    $ch = curl_init();

    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'GET');

    curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);

    $result = curl_exec($ch);
    if (curl_errno($ch)) {
        echo 'Error:' . curl_error($ch);
    }
    $result = json_decode(curl_exec($ch));
    curl_close($ch);
    return $result;
}
// ------------------------end function----------------------------


$car_result = get_car($car_numb);



// -------------DataBase--------------------------
// connection to DataBase
global $db;
$db = pg_connect('host=ninja.nix.ltd port=5372 dbname=car user=car password=Gbfh466578BBFFk#$');
$table = "mot";
// $date = new DateTime();
// $today = date("Y-m-d H:i:s"); 


// ------------------insert------------------------
// if($car_result->httpStatus =="404") {
//     $assoc_array = [
//         "reg"=>$car_numb,
//         "m"=>$car_result->errorMessage,
//         "updated_at"=> null
//     ];
// } else {
//     $assoc_array = [
//         "reg"=>$car_numb,
//         "m"=>json_encode($car_result[0]),
//         "updated_at"=> null
//     ];
// }

// $query =pg_insert($db, $table, $assoc_array);

// --------------------end insert ---------------------


// -----------------------select-----------------------
$query_select = "SELECT reg FROM public.mot WHERE m is null";
$updated_query = "SELECT reg from public.mot WHERE updated_at is null";
// // ------------------end select  ---------------------

// -----------------------update----------------------
$query_result = pg_query($db, $query_select);
$query_updated_at = pg_query($db, $updated_query);

$a = pg_fetch_all($query_result);
$updated = pg_fetch_all($query_updated_at);

foreach($a as $b=>$v) {
    sleep(1);
    $res = get_car($v['reg']);

    if($res->httpStatus == "404") {
        $update_result = pg_query($db, "UPDATE mot SET m = '-1' where reg = '$v[reg]'");
    } else {
        $local_res = json_encode($res[0]);
        $update_result = pg_query($db, "UPDATE mot SET m =' $local_res' where reg = '$v[reg]'");
    }
}

foreach($updated as $upd=>$u) {
    sleep(1);
    $res = get_car($u['reg']);
    $update_res= pg_query($db, "UPDATE mot SET updated_at=now() where reg = '$u[reg]'");
}
// ------------------------end update------------------------
?>