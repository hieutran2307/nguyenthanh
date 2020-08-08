<?php
//đăng kí
include('../connect/connect.php');
$json = file_get_contents('php://input');
$obj = json_decode($json, true);
$tenlop= $obj['tenlop'];
$soluong= $obj['soluong'];
if($tenlop !=''){
	
	$sql = "INSERT INTO lop(
tenlop,
soluong) VALUES('$tenlop','$soluong')";
	$result = $mysqli->query($sql);
	if($result){
		$array=array(
            "status" => true,
            "statusCode"=>"200",
			"message" => "đăng ký lớp thành công",
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