<?php

include('../connect/connect.php');

$makiemtra = $_GET['makiemtra'];
$luat = $mysqli->query("SELECT
baikiemtra.makiemtra,
baikiemtra.tenbaikiemtra,
baikiemtra.thoigian
FROM baikiemtra
WHERE baikiemtra.makiemtra = $makiemtra
AND baikiemtra.idtrangthaikiemtra= 2");
while ($row = $luat->fetch_object()){		
    $luat_chittiet[] = $row;
}
echo json_encode($luat_chittiet);

?>