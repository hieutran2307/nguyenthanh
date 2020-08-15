<?php
//dang nhap
use \Firebase\JWT\JWT;
require __DIR__ . '/../vendor/autoload.php';
include('../function.php');
include('../connect/connect.php');

$key = "example_key";
$json = file_get_contents('php://input');
$obj = json_decode($json, true);
$makiemtra = $obj['makiemtra'];
 $sql = "SELECT
 baikiemtra.makiemtra,
 baikiemtra.tenbaikiemtra,
 baikiemtra.thoigian
 FROM baikiemtra
 WHERE baikiemtra.makiemtra ='$makiemtra'";
$result = $mysqli->query($sql);
$user = mysqli_fetch_assoc($result);


if($user){
	$jwt = getToken($makiemtra);
	$array=array(
            "status" => true,
            "statusCode"=>"200",
			"message" => "Mã kiểm tra",
			'user'=>$user
	);
}
else{
	$array=array(
            "status" => false,
            "statusCode"=>"400",
			"message" => "Mã kiểm tra không đúng, vui lòng thử lại",
	);
}
print_r(json_encode($array));

?>