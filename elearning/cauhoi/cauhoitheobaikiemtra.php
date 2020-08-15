<?php

include('../connect/connect.php');

//$idkhoa = $_GET['idkhoa'];
$sql = $mysqli->query("SELECT
baikiemtra.idkiemtra,
baikiemtra.idtrangthaikiemtra,
cauhoi.tencauhoi,
cauhoi.a,
cauhoi.b,
cauhoi.c,
cauhoi.d,
trangthaikiemtra.tentrangthai,
baikiemtra.tenbaikiemtra
FROM cauhoi,trangthaikiemtra, thanhvien, baikiemtra
WHERE baikiemtra.idcauhoi = cauhoi.idcauhoi
AND baikiemtra.idthanhvien = thanhvien.idthanhvien
AND baikiemtra.idtrangthaikiemtra = trangthaikiemtra.idtrangthaikiemtra
AND baikiemtra.idtrangthaikiemtra  = 2");
while ($row = $luat->fetch_object()){		
    $luat_chittiet[] = $row;
}
echo json_encode($luat_chittiet);

?>