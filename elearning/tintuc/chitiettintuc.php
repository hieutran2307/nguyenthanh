<?php
include('../connect/connect.php');
$json = file_get_contents('php://input');
$obj = json_decode($json, true);
$idtintuc= $obj['idtintuc'];
if($idtintuc !=''){
    $sql = "SELECT *
    FROM tintuc
    WHERE idtintuc = $idtintuc";

$result = $mysqli->query($sql);
$data = mysqli_fetch_assoc($result);
$array=array(
    "statusCode"=>"200",
    "chitiettintuc"=>$data
    
);
print_r(json_encode($array));
}
?>