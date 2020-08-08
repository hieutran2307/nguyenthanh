<?php

include('../connect/connect.php');


$idlophocphan = $_GET['idlophocphan'];

$luat = $mysqli->query("SELECT
chude.idchude,
chude.tenchude
FROM chude,lophocphan
WHERE chude.idlophocphan = lophocphan.idlophocphan
AND chude.idlophocphan =$idlophocphan ");
while ($row = $luat->fetch_object()){		
    $luat_chittiet[] = $row;
}
echo json_encode($luat_chittiet);

?>