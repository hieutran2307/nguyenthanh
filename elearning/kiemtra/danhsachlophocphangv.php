<?php

include('../connect/connect.php');


$idmonhoc = $_GET['idmonhoc'];
$idthanhvien = $_GET['idthanhvien'];
$luat = $mysqli->query("SELECT
lophocphan.idlophocphan,
lop.tenlop,
lophocphan.tenhocphan,
thanhvien.hovaten as giaovien,
monhoc.tenmonhoc
FROM lophocphan,lop, thanhvien,monhoc
WHERE  lophocphan.idthanhvien = thanhvien.idthanhvien
AND lop.idlop = lophocphan.idlop
AND lophocphan.idmonhoc = monhoc.idmonhoc
AND lophocphan.idmonhoc =$idmonhoc
AND lophocphan.idthanhvien =$idthanhvien ");
while ($row = $luat->fetch_object()){		
    $luat_chittiet[] = $row;
}
echo json_encode($luat_chittiet);

?>