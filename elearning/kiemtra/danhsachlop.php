<?php

include('../connect/connect.php');

//$idkhoa = $_GET['idkhoa'];
$luat = $mysqli->query("SELECT
lop.idlop,
lop.tenlop,
lop.soluong as soluongsinhvien
FROM lop");
while ($row = $luat->fetch_object()){		
    $luat_chittiet[] = $row;
}
echo json_encode($luat_chittiet);

?>