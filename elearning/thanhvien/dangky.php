<?php
//đăng kí
include('../connect/connect.php');
$json = file_get_contents('php://input');
$obj = json_decode($json, true);
$hovaten= $obj['hovaten'];
$ngaysinh= $obj['ngaysinh'];
$diachi= $obj['diachi'];
$sodienthoai= $obj['sodienthoai'];
$maso= $obj['maso'];
$matkhau = md5($obj['matkhau']);
$idnhom= $obj['idnhom'];
if($maso !=''  && $matkhau!=''){
	
	$sql = "INSERT INTO thanhvien(
hovaten,
ngaysinh,
diachi,
sodienthoai,
maso,
matkhau,
idnhom) VALUES('$hovaten','$ngaysinh','$diachi','$sodienthoai','$maso','$matkhau','$idnhom')";
	$result = $mysqli->query($sql);
	if($result){
		$array=array(
            "status" => true,
            "statusCode"=>"200",
			"message" => "Đăng ký thành công",
	);
	}
	else{
		$array=array(
            "status" => false,
            "statusCode"=>"400",
			"message" => "Email hoặc mã số sinh viên tồn tại",
	);
	}
}
print_r(json_encode($array));
?>