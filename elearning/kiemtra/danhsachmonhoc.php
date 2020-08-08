<?php

include('../connect/connect.php');

//$idkhoa = $_GET['idkhoa'];
$luat = $mysqli->query("SELECT
monhoc.idmonhoc,
monhoc.tenmonhoc,
monhoc.sotinchi,
monhoc.sotiet
FROM monhoc");
while ($row = $luat->fetch_object()){		
    $luat_chittiet[] = $row;
}
echo json_encode($luat_chittiet);

?>