<?php

include('../connect/connect.php');

$idchude = $_GET['idchude'];
$luat = $mysqli->query("SELECT
cauhoi.idcauhoi,
cauhoi.tencauhoi,
cauhoi.a,
cauhoi.b,
cauhoi.c,
cauhoi.d,
cauhoi.dapan
FROM cauhoi,chude
WHERE cauhoi.idchude = chude.idchude
AND cauhoi.idchude = $idchude");
while ($row = $luat->fetch_object()){		
    $luat_chittiet[] = $row;
}
echo json_encode($luat_chittiet);

?>