<?php
//đăng kí
include('../connect/connect.php');
$json = file_get_contents('php://input');
$obj = json_decode($json, true);
$tenlop = $obj['tenlop'];
$soluong = $obj['soluong'];
$idlop = $obj['idlop'];
if($tenlop !=''){
	
	echo $sql = "UPDATE lop
    SET tenlop = '$tenlop',
    soluong = '$soluong'
    WHERE lop.idlop = '$idlop'
    ";
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