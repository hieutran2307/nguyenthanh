<?php

include('../connect/connect.php');

$idthanhvien = $_GET['idthanhvien'];
$luat = $mysqli->query("SELECT
chude.idchude as id,
chude.tenchude as name
FROM chude, thanhvien
WHERE chude.idthanhvien = thanhvien.idthanhvien
AND chude.idthanhvien = ${idthanhvien}");
while ($row = $luat->fetch_object()){		
    $luat_chittiet[] = $row;
}
echo json_encode($luat_chittiet);

?>