<?php
//đăng kí

include('../connect/connect.php');
$json = file_get_contents('php://input');
$obj = json_decode($json, true);
$hovaten= $obj['hovaten'];
$diachi= $obj['diachi'];
$sodienthoai= $obj['sodienthoai'];
$email= $obj['email'];
$maso= $obj['maso'];
$matkhau= $obj['matkhau'];
$idnhom= $obj['idnhom'];
$hinhanh= $obj['hinhanh'];
$idlop= $obj['idlop'];
$idlophocphan= $obj['idlophocphan'];
if($hovaten !=''){
	
	$sql = "INSERT INTO thanhvien(
hovaten,
diachi,
sodienthoai,
email,
maso,
matkhau,
idnhom,
hinhanh,
idlop,
idlophocphan
) VALUES('$hovaten','$diachi','$sodienthoai','$email','$maso','$matkhau','$idnhom','$hinhanh','$idlop','$idlophocphan')";
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