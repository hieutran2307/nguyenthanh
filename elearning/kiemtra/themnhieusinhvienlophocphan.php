<?php
//đăng kí
use \Firebase\JWT\JWT;
include('../connect/connect.php');
$json = file_get_contents('php://input');
$obj = json_decode($json, true);
$arrayDetail = $obj['arrayDetail'];
foreach ($arrayDetail as $value) {
    $sql = "UPDATE thanhvien
    SET idlop  = $value[idlop],
    idlophocphan= $value[idlophocphan]

    WHERE thanhvien.idthanhvien = $value[idthanhvien]
   
   ";
    $result = $mysqli->query($sql);
    if($result){
		$array=array(
            "status" => true,
            "statusCode"=>"200",
			"message" => "thêm thành công",
	);
	}
	else{
		$array=array(
            "status" => false,
            "statusCode"=>"400",
			"message" => "đăng ký lớp thất bại",
	);
	}
}
print_r(json_encode($array));

?>