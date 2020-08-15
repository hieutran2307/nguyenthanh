<?php
//đăng kí
include('../connect/connect.php');
$json = file_get_contents('php://input');
$obj = json_decode($json, true);
$idkiemtra= $obj['idkiemtra'];
$idthanhvien= $obj['idthanhvien'];
$diemso= $obj['diemso'];
if($tenhocphan !=''){
	
	$sql = "INSERT INTO lophocphan(
idkiemtra,
idthanhvien,
diemso) VALUES('$idkiemtra','$idthanhvien','$diemso')";
	$result = $mysqli->query($sql);
	if($result){
		$array=array(
            "status" => true,
            "statusCode"=>"200",
			"message" => "Chấm điểm thành công",
	);
	}
	else{
		$array=array(
            "status" => false,
            "statusCode"=>"400",
			"message" => "Chấm điêm thất bại",
	);
	}
}
print_r(json_encode($array));
?>