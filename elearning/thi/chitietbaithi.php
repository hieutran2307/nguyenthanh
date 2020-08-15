<?php

include('../connect/connect.php');

$makiemtra = $_GET['makiemtra'];
$luat = $mysqli->query("SELECT
cauhoi.idcauhoi,
cauhoi.tencauhoi,
cauhoi.a,
cauhoi.b,
cauhoi.c,
cauhoi.d,
cauhoi.dapan
FROM baikiemtra, cauhoi
WHERE
cauhoi.idkiemtra = baikiemtra.idkiemtra
and baikiemtra.makiemtra = $makiemtra
AND baikiemtra.idtrangthaikiemtra= 2");
while ($row = $luat->fetch_object()){		
    $luat_chittiet[] = $row;
}
echo json_encode($luat_chittiet);

?>