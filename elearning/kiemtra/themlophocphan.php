<?php
//đăng kí
include('../connect/connect.php');
$json = file_get_contents('php://input');
$obj = json_decode($json, true);
$tenhocphan= $obj['tenhocphan'];
$idthanhvien= $obj['idthanhvien'];
$idmonhoc= $obj['idmonhoc'];
$idlop= $obj['idlop'];
if($tenhocphan !=''){
	
	$sql = "INSERT INTO lophocphan(
tenhocphan,
idthanhvien,
idmonhoc,
idlop) VALUES('$tenhocphan','$idthanhvien','$idmonhoc', '$idlop')";
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