<?php
//dang nhap
use \Firebase\JWT\JWT;
require __DIR__ . '/../vendor/autoload.php';
include('../function.php');
include('../connect/connect.php');

$key = "example_key";
$json = file_get_contents('php://input');
$obj = json_decode($json, true);
$maso = $obj['maso'];
$matkhau = md5($obj['matkhau']);
 $sql = "SELECT 
u.hovaten,
u.ngaysinh,
u.diachi,
u.sodienthoai,
u.maso,
u.matkhau,
u.idnhom,
u.hinhanh
 FROM thanhvien u where maso = '$maso' and matkhau = '$matkhau'";
$result = $mysqli->query($sql);
$user = mysqli_fetch_assoc($result);


if($user){
	$jwt = getToken($maso);
	$array=array(
            "status" => true,
            "statusCode"=>"200",
			"message" => "Đăng nhập thành công",
			'token'=>$jwt,
			'user'=>$user
	);
}
else{
	$array=array(
            "status" => false,
            "statusCode"=>"400",
			"message" => "Tên đăng nhập hoặc mật khẩu không đúng",
	);
}
print_r(json_encode($array));

?>