<?php

include('../connect/connect.php');


$idlop = $_GET['idlop'];
$luat = $mysqli->query("SELECT
lop.tenlop,
lophocphan.tenhocphan,
lophocphan.idlophocphan,
thanhvien.hovaten as giaovien,
monhoc.tenmonhoc
FROM lophocphan,lop, thanhvien,monhoc
WHERE  lophocphan.idthanhvien = thanhvien.idthanhvien
AND lop.idlop = lophocphan.idlop
AND lophocphan.idmonhoc = monhoc.idmonhoc
AND lophocphan.idlop = ${idlop}");
while ($row = $luat->fetch_object()){		
    $luat_chittiet[] = $row;
}
echo json_encode($luat_chittiet);

?>