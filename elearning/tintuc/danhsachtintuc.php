<?php

include('../connect/connect.php');

$sql = $mysqli->query("SELECT
tintuc.idtintuc,
tintuc.tentintuc,
tintuc.hinhanh
FROM tintuc");
while ($row = $sql->fetch_object()){		
    $tintuc[] = $row;
}
echo json_encode($tintuc);

	
?>