<?php

include('../connect/connect.php');

$idthanhvien = $_GET['idthanhvien'];
$luat = $mysqli->query("SELECT
baikiemtra.idkiemtra,
baikiemtra.idtrangthaikiemtra,
cauhoi.tencauhoi,
trangthaikiemtra.tentrangthai,
baikiemtra.tenbaikiemtra
FROM cauhoi,trangthaikiemtra, thanhvien, baikiemtra
WHERE baikiemtra.idcauhoi = cauhoi.idcauhoi
AND baikiemtra.idthanhvien = thanhvien.idthanhvien
AND baikiemtra.idtrangthaikiemtra = trangthaikiemtra.idtrangthaikiemtra
AND baikiemtra.idthanhvien  = $idthanhvien");
while ($row = $luat->fetch_object()){		
    $luat_chittiet[] = $row;
}
echo json_encode($luat_chittiet);

?>