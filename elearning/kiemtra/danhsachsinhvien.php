<?php

include('../connect/connect.php');

//$idkhoa = $_GET['idkhoa'];
$luat = $mysqli->query("SELECT
thanhvien.idthanhvien as id,
thanhvien.hovaten as name
FROM nhom, thanhvien
WHERE thanhvien.idnhom = nhom.idnhom
AND thanhvien.idnhom =3");
while ($row = $luat->fetch_object()){		
    $luat_chittiet[] = $row;
}
echo json_encode($luat_chittiet);

?>