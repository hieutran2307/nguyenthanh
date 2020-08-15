<?php

include('../connect/connect.php');

$luat = $mysqli->query("SELECT
thanhvien.idthanhvien,
thanhvien.hovaten
FROM thanhvien
WHERE thanhvien.idnhom =3");
while ($row = $luat->fetch_object()){		
    $luat_chittiet[] = $row;
}
echo json_encode($luat_chittiet);

?>