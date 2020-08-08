<?php
//đăng kí
include('../connect/connect.php');
$json = file_get_contents('php://input');
$obj = json_decode($json, true);
$tenmonhoc= $obj['tenmonhoc'];
$sotinchi= $obj['sotinchi'];
$sotiet= $obj['sotiet'];
if($tenmonhoc !=''){
	
	$sql = "INSERT INTO monhoc(
tenmonhoc,
sotinchi,
sotiet) VALUES('$tenmonhoc','$sotinchi','$sotiet')";
	$result = $mysqli->query($sql);
	if($result){
		$array=array(
            "status" => true,
            "statusCode"=>"200",
			"message" => "đăng ký môn học thành công",
	);
	}
	else{
		$array=array(
            "status" => false,
            "statusCode"=>"400",
			"message" => "đăng ký môn học thất bại",
	);
	}
}
print_r(json_encode($array));
?>