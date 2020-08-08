<?php

include('../connect/connect.php');

$idthanhvien = $_GET['idthanhvien'];
$luat = $mysqli->query("SELECT
monhoc.idmonhoc,
monhoc.tenmonhoc,
monhoc.sotinchi,
monhoc.sotiet
FROM monhoc,thanhvien
WHERE monhoc.idthanhvien =thanhvien.idthanhvien
AND. monhoc.idthanhvien =$idthanhvien");
while ($row = $luat->fetch_object()){		
    $luat_chittiet[] = $row;
}
echo json_encode($luat_chittiet);

?>