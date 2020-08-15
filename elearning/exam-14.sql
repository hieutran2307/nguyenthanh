-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Aug 15, 2020 at 05:11 PM
-- Server version: 10.4.13-MariaDB
-- PHP Version: 7.2.32

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `exam`
--

-- --------------------------------------------------------

--
-- Table structure for table `baikiemtra`
--

CREATE TABLE `baikiemtra` (
  `idkiemtra` int(11) NOT NULL,
  `tenbaikiemtra` varchar(255) NOT NULL,
  `makiemtra` varchar(255) NOT NULL,
  `thoigian` varchar(255) NOT NULL,
  `idtrangthaikiemtra` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `baikiemtra`
--

INSERT INTO `baikiemtra` (`idkiemtra`, `tenbaikiemtra`, `makiemtra`, `thoigian`, `idtrangthaikiemtra`) VALUES
(1, 'lập trình c', '2020', '90', '2');

-- --------------------------------------------------------

--
-- Table structure for table `cauhoi`
--

CREATE TABLE `cauhoi` (
  `idcauhoi` int(11) NOT NULL,
  `tencauhoi` varchar(255) NOT NULL,
  `a` varchar(255) NOT NULL,
  `b` varchar(255) NOT NULL,
  `c` varchar(255) NOT NULL,
  `d` varchar(255) NOT NULL,
  `dapan` varchar(255) NOT NULL,
  `idchude` varchar(255) NOT NULL,
  `idthanhvien` varchar(255) NOT NULL,
  `idkiemtra` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `cauhoi`
--

INSERT INTO `cauhoi` (`idcauhoi`, `tencauhoi`, `a`, `b`, `c`, `d`, `dapan`, `idchude`, `idthanhvien`, `idkiemtra`) VALUES
(18, 'Hàm dùng để cấp phát bộ nhớ động cho kiểu nhớ động do lập trình viên tự định nghĩa như (union, struct)', 'calloc()', 'malloc()\r\n', 'realloc()\r\n', 'Cả 3 phương án trên', 'Cả 3 phương án trên', '8', '2', '1'),
(19, 'Đâu là phát biểu sai khi nói về danh sách liên kết:', ' Sử dụng danh sách liên kết thường tiết kiệm bộ nhớ hơn dùng mảng.', 'Mỗi phần tử trong danh sách liên kết phải có ít nhất một trường dùng để lưu địa chỉ.\r\n', 'Sử dụng danh sách liên kết thường tốn bộ nhớ hơn dùng mảng.\r\n', 'Không ý nào đúng', 'Sử dụng danh sách liên kết thường tốn bộ nhớ hơn dùng mảng.\r\n', '17', '2', '1'),
(20, 'Dữ liệu kí tự bao gồm ', 'Dữ liệu kí tự bao gồm ', 'Các kí tự chữ cái“%ld” ', 'Các kí tự đặc biệt', 'Tất cả đáp án trên ', 'Tất cả đáp án trên ', '16', '2', '1'),
(21, 'Câu nào không nói đến ưu điểm của việc sử dụng cấu trúc:', 'Bạn có thể xử lí một cách hỗn hợp các kiểu dữ liệu trong một đơn vị\r\n', 'Bạn có thể lưu dữ xâu kí tự có độ dài khác nhau vào trong một biến cấu trúc\r\n', 'Dữ liệu có thể lưu trữ trong một module và dưới dạng phân cấp\r\n', 'Cần ít nhất một bộ nhớ cho cùng dữ liệu', 'Cần ít nhất một bộ nhớ cho cùng dữ liệu', '8', '1', '1'),
(23, 'Dữ liệu kí tự bao gồm ', 'Dữ liệu kí tự bao gồm ', 'Các kí tự chữ cái“%ld” ', 'Các kí tự đặc biệt', 'Tất cả đáp án trên ', 'Tất cả đáp án trên ', '16', '2', '1');

-- --------------------------------------------------------

--
-- Table structure for table `chude`
--

CREATE TABLE `chude` (
  `idchude` int(11) NOT NULL,
  `tenchude` varchar(255) NOT NULL,
  `idmonhoc` varchar(255) NOT NULL,
  `idthanhvien` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `chude`
--

INSERT INTO `chude` (`idchude`, `tenchude`, `idmonhoc`, `idthanhvien`) VALUES
(16, 'Chương 1 lập trình c', '1', '2'),
(17, 'Chương 2 lập trình c', '1', '2');

-- --------------------------------------------------------

--
-- Table structure for table `ketquakiemtra`
--

CREATE TABLE `ketquakiemtra` (
  `idketquakiemtra` int(11) NOT NULL,
  `idkiemtra` varchar(255) NOT NULL,
  `idthanhvien` varchar(255) NOT NULL,
  `diemso` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `lop`
--

CREATE TABLE `lop` (
  `idlop` int(11) NOT NULL,
  `tenlop` varchar(255) NOT NULL,
  `soluong` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `lop`
--

INSERT INTO `lop` (`idlop`, `tenlop`, `soluong`) VALUES
(1, 'qaz', '10'),
(2, '16DTH017', '11'),
(3, '13KTH01', '11'),
(4, 'aaa', '111'),
(5, 'Aaaaaa', '1111');

-- --------------------------------------------------------

--
-- Table structure for table `lophocphan`
--

CREATE TABLE `lophocphan` (
  `idlophocphan` int(11) NOT NULL,
  `tenhocphan` varchar(255) NOT NULL,
  `idthanhvien` varchar(255) NOT NULL,
  `idmonhoc` varchar(255) NOT NULL,
  `idlop` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `lophocphan`
--

INSERT INTO `lophocphan` (`idlophocphan`, `tenhocphan`, `idthanhvien`, `idmonhoc`, `idlop`) VALUES
(2, 'lập trình c lớp học phần', '5', '2', '2'),
(3, 'lop hoc phan toan cao cap', '2', '3', '3'),
(6, 'Nhập môn Cntt ', '2', '1', '1'),
(7, '111', '2', '2', '1'),
(8, '16DTH017lâp trình c1', '2', '2', ''),
(9, '16DTH017lâp trình c1', '2', '2', ''),
(10, '16DTH017toán rời rạc', '2', '3', ''),
(11, 'demo', '1', '1', '1'),
(12, '1', '1', '1', '1'),
(13, '16DTH017toán rời rạc', '1', '1', '1'),
(14, '16DTH017toán rời rạc', '2', '1', '1'),
(15, '16DTH017toán rời rạc', '2', '3', '1'),
(16, '16DTH017lâp trình c1', '2', '2', '2'),
(17, '16DTH017lap trinh demo', '2', '4', '2'),
(18, '16DTH017lâp trình c1', '2', '2', '2'),
(19, '16DTH017lâp trình c1', '', '2', '2');

-- --------------------------------------------------------

--
-- Table structure for table `monhoc`
--

CREATE TABLE `monhoc` (
  `idmonhoc` int(11) NOT NULL,
  `tenmonhoc` varchar(255) NOT NULL,
  `sotinchi` varchar(255) NOT NULL,
  `sotiet` varchar(255) NOT NULL,
  `idthanhvien` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `monhoc`
--

INSERT INTO `monhoc` (`idmonhoc`, `tenmonhoc`, `sotinchi`, `sotiet`, `idthanhvien`) VALUES
(1, 'lập trình c', '12', '11', '2'),
(2, 'lâp trình c1', '3', '10', '2'),
(3, 'toán rời rạc', '3', '40', '2'),
(4, 'lap trinh demo', '12', '11', '2'),
(5, '1', '1', '1', NULL),
(6, '1', '1', '1', NULL),
(8, '1111s', '111', '1111111', NULL),
(10, 'yyy', '43', '333', NULL),
(11, 'R', '5', '5', '2'),
(12, 'Qaz', '11', '1', NULL),
(13, 'Qưe', '1', '1', NULL),
(14, '123', '1', '1', NULL),
(15, '11', '1', '1', NULL),
(16, '1234', '2', '2', NULL),
(18, 'fsdfs', '4234', '234', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `nhom`
--

CREATE TABLE `nhom` (
  `idnhom` int(11) NOT NULL,
  `tennhom` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `nhom`
--

INSERT INTO `nhom` (`idnhom`, `tennhom`) VALUES
(1, 'Quản trị viên'),
(2, 'Giảng viên'),
(3, 'Sinh viên');

-- --------------------------------------------------------

--
-- Table structure for table `thanhvien`
--

CREATE TABLE `thanhvien` (
  `idthanhvien` int(11) NOT NULL,
  `hovaten` varchar(255) DEFAULT NULL,
  `ngaysinh` varchar(255) DEFAULT NULL,
  `diachi` varchar(255) DEFAULT NULL,
  `sodienthoai` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `maso` varchar(255) DEFAULT NULL,
  `matkhau` varchar(255) DEFAULT NULL,
  `idnhom` varchar(255) DEFAULT NULL,
  `hinhanh` varchar(255) DEFAULT NULL,
  `idlop` varchar(255) DEFAULT NULL,
  `idlophocphan` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `thanhvien`
--

INSERT INTO `thanhvien` (`idthanhvien`, `hovaten`, `ngaysinh`, `diachi`, `sodienthoai`, `email`, `maso`, `matkhau`, `idnhom`, `hinhanh`, `idlop`, `idlophocphan`) VALUES
(1, 'Admin Nguyễn Thành Phúc', '23/07/1995', 'fis tân thuận', '0392307840', NULL, '123', '4297f44b13955235245b2497399d7a93', '1', 'thanhphuc.jpg', '', ''),
(2, 'giang viênNguyễn Thành Phúc', '23/07/1999', 'fis tân thuận', '0392307840', NULL, '1234', '4297f44b13955235245b2497399d7a93', '2', NULL, '', ''),
(5, 'Sinh Viên Nguyễn Thành Phúc', '23/07/1999', 'fis tân thuận', '0392307840', NULL, '12345', '4297f44b13955235245b2497399d7a93', '3', 'thanhphuc.jpg', '3', ''),
(6, 'Lý Văn Hiếu', '23/07/1999', 'fis tân thuận', '0392307840', NULL, '15110603', '4297f44b13955235245b2497399d7a93', '3', '', '2', '2'),
(7, 'Đinh Nhật Lin', '23/07/1999', 'fis tân thuận', '0392307840', NULL, '15110602', '4297f44b13955235245b2497399d7a93', '3', '', '3', ''),
(8, 'Tạ Nhật Hào', '23/07/1999', 'fis tân thuận', '0392307840', NULL, '151106522', '4297f44b13955235245b2497399d7a93', '3', '', '1', '6'),
(9, 'Hoàng Thế Tôn', '23/07/1999', 'fis tân thuận', '0392307840', NULL, '154106522', '4297f44b13955235245b2497399d7a93', '3', '', '11', '6'),
(10, 'Tạ Đinh Nhật', '23/07/1999', 'fis tân thuận', '0392307840', NULL, '154126522', '4297f44b13955235245b2497399d7a93', '3', '', '4', '6'),
(11, 'Nguyễn Đỗ Tuyết Lan', '23/07/1999', 'fis tân thuận', '0392307840', NULL, '154326522', '4297f44b13955235245b2497399d7a93', '3', '', '1', '6'),
(12, 'Lâm Chấn Long', '23/07/1999', 'fis tân thuận', '0392307840', NULL, '154326512', '4297f44b13955235245b2497399d7a93', '3', '', '1', '6'),
(15, 'Cao Đình Phong', '23/07/1999', 'fis tân thuận', '0392307840', 'tnhieu123@gmail.com', '15432653', '4297f44b13955235245b2497399d7a93', '2', '', '', ''),
(16, 'Demo', '1995', 'Demo', '11111', 'Tnhieu11@gmail.com', '1140929', '83c19db4e2f56d43c650752ae04625c2', '2', '', '', ''),
(17, '123', '123', '13', '111', '111@gmail.com', '4991405', 'e034fb6b66aacc1d48f445ddfb08da98', '3', '', '2', '');

-- --------------------------------------------------------

--
-- Table structure for table `trangthaikiemtra`
--

CREATE TABLE `trangthaikiemtra` (
  `idtrangthaikiemtra` int(11) NOT NULL,
  `tentrangthai` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `trangthaikiemtra`
--

INSERT INTO `trangthaikiemtra` (`idtrangthaikiemtra`, `tentrangthai`) VALUES
(1, 'Chưa kiểm tra'),
(2, 'Đang kiểm tra'),
(3, 'Đã kiểm tra');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `baikiemtra`
--
ALTER TABLE `baikiemtra`
  ADD PRIMARY KEY (`idkiemtra`);

--
-- Indexes for table `cauhoi`
--
ALTER TABLE `cauhoi`
  ADD PRIMARY KEY (`idcauhoi`);

--
-- Indexes for table `chude`
--
ALTER TABLE `chude`
  ADD PRIMARY KEY (`idchude`);

--
-- Indexes for table `ketquakiemtra`
--
ALTER TABLE `ketquakiemtra`
  ADD PRIMARY KEY (`idketquakiemtra`);

--
-- Indexes for table `lop`
--
ALTER TABLE `lop`
  ADD PRIMARY KEY (`idlop`);

--
-- Indexes for table `lophocphan`
--
ALTER TABLE `lophocphan`
  ADD PRIMARY KEY (`idlophocphan`);

--
-- Indexes for table `monhoc`
--
ALTER TABLE `monhoc`
  ADD PRIMARY KEY (`idmonhoc`);

--
-- Indexes for table `nhom`
--
ALTER TABLE `nhom`
  ADD PRIMARY KEY (`idnhom`);

--
-- Indexes for table `thanhvien`
--
ALTER TABLE `thanhvien`
  ADD PRIMARY KEY (`idthanhvien`),
  ADD UNIQUE KEY `maso` (`maso`);

--
-- Indexes for table `trangthaikiemtra`
--
ALTER TABLE `trangthaikiemtra`
  ADD PRIMARY KEY (`idtrangthaikiemtra`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `baikiemtra`
--
ALTER TABLE `baikiemtra`
  MODIFY `idkiemtra` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `cauhoi`
--
ALTER TABLE `cauhoi`
  MODIFY `idcauhoi` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT for table `chude`
--
ALTER TABLE `chude`
  MODIFY `idchude` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `ketquakiemtra`
--
ALTER TABLE `ketquakiemtra`
  MODIFY `idketquakiemtra` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `lop`
--
ALTER TABLE `lop`
  MODIFY `idlop` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `lophocphan`
--
ALTER TABLE `lophocphan`
  MODIFY `idlophocphan` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `monhoc`
--
ALTER TABLE `monhoc`
  MODIFY `idmonhoc` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `nhom`
--
ALTER TABLE `nhom`
  MODIFY `idnhom` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `thanhvien`
--
ALTER TABLE `thanhvien`
  MODIFY `idthanhvien` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `trangthaikiemtra`
--
ALTER TABLE `trangthaikiemtra`
  MODIFY `idtrangthaikiemtra` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
