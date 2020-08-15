<?php

include('../connect/connect.php');

$idlop = $_GET['idlop'];
$luat = $mysqli->query("SELECT
thanhvien.idthanhvien,
thanhvien.hovaten,
thanhvien.ngaysinh,
thanhvien.diachi,
thanhvien.sodienthoai,
thanhvien.maso
FROM lop, thanhvien
WHERE thanhvien.idnhom =3
AND thanhvien.idlop = lop.idlop
AND thanhvien.idlop = '$idlop'");
while ($row = $luat->fetch_object()){		
    $luat_chittiet[] = $row;
}
echo json_encode($luat_chittiet);

?>