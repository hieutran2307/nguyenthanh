<?php

include('../connect/connect.php');

$idmonhoc = $_GET['idmonhoc'];
$luat = $mysqli->query("SELECT 
chude.idchude,
chude.tenchude
FROM chude,monhoc
WHERE chude.idmonhoc = monhoc.idmonhoc
AND chude.idmonhoc =${idmonhoc}");
while ($row = $luat->fetch_object()){		
    $luat_chittiet[] = $row;
}
echo json_encode($luat_chittiet);

?>