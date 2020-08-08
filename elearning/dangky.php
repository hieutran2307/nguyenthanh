<?php
//đăng kí
include('./connect/connect.php');
$json = file_get_contents('php://input');
$obj = json_decode($json, true);
$hovaten= $obj['hovaten'];
$ngaysinh= $obj['ngaysinh'];
$sodienthoai= $obj['sodienthoai'];
$email= $obj['email'];
$masosinhvien= $obj['masosinhvien'];
$matkhau = md5($obj['matkhau']);
$khoa= $obj['khoa'];
$chuyenkhoa= $obj['chuyenkhoa'];
$nienkhoa= $obj['nienkhoa'];
$khoahoc= $obj['khoahoc'];
$thuhang	= $obj['thuhang'];
$giohoctap	= $obj['giohoctap'];
$tracnghiem	= $obj['tracnghiem'];
if($masosinhvien !=''  && $matkhau!=''){
	
	$sql = "INSERT INTO thanhvien(
hovaten,
ngaysinh,
sodienthoai,
email,
masosinhvien,
matkhau,
khoa,
chuyenkhoa,
nienkhoa,
khoahoc,
thuhang,
giohoctap,
tracnghiem
	) VALUES('$hovaten','$ngaysinh','$sodienthoai','$email','$masosinhvien','$matkhau','$khoa','$chuyenkhoa','$nienkhoa','$khoahoc','$thuhang','$giohoctap','$tracnghiem')";
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