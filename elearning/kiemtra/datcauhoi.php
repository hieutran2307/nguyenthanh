<?php
//đăng kí
include('../connect/connect.php');
$json = file_get_contents('php://input');
$obj = json_decode($json, true);
$tencauhoi= $obj['tencauhoi'];
$a= $obj['a'];
$b= $obj['b'];
$c= $obj['c'];
$d= $obj['d'];
$dapan= $obj['dapan'];
$idchude= $obj['idchude'];
if($tencauhoi !=''){
	
	  $sql = "INSERT INTO cauhoi(
tencauhoi,
a,
b,
c,
d,
dapan,
idchude) VALUES('$tencauhoi','$a','$b','$c','$d','$dapan','$idchude')";
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