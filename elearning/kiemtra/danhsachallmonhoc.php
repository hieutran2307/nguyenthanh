<?php

include('../connect/connect.php');

//$idkhoa = $_GET['idkhoa'];
$luat = $mysqli->query("SELECT
monhoc.idmonhoc as id,
monhoc.tenmonhoc as name
FROM monhoc");
while ($row = $luat->fetch_object()){		
    $luat_chittiet[] = $row;
}
echo json_encode($luat_chittiet);

?>