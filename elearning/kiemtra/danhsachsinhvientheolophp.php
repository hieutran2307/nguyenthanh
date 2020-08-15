<?php

include('../connect/connect.php');

$idlop = $_GET['idlop'];
$idlophocphan = $_GET['idlophocphan'];
$luat = $mysqli->query("SELECT
thanhvien.idthanhvien,
thanhvien.hovaten,
thanhvien.ngaysinh,
thanhvien.diachi,
thanhvien.sodienthoai,
thanhvien.maso
FROM lop, thanhvien , lophocphan
WHERE thanhvien.idnhom =3
AND thanhvien.idlop = lop.idlop
AND thanhvien.idlophocphan  = lophocphan.idlophocphan
AND thanhvien.idlop = '$idlop'
AND thanhvien.idlophocphan = '$idlophocphan'");
while ($row = $luat->fetch_object()){		
    $luat_chittiet[] = $row;
}
echo json_encode($luat_chittiet);

?>