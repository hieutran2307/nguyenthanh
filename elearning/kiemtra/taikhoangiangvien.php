<?php

include('../connect/connect.php');

//$idkhoa = $_GET['idkhoa'];
$luat = $mysqli->query("SELECT
thanhvien.idthanhvien,
thanhvien.hovaten,
thanhvien.maso,
lophocphan.tenhocphan
FROM thanhvien, nhom ,lophocphan
WHERE thanhvien.idnhom = nhom.idnhom
AND thanhvien.idnhom = 2
AND thanhvien.idthanhvien =  lophocphan.idthanhvien");
while ($row = $luat->fetch_object()){		
    $luat_chittiet[] = $row;
}
echo json_encode($luat_chittiet);

?>