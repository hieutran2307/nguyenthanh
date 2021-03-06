import React from 'react';
import {Button, Image, View, Text} from 'react-native';
import {createAppContainer,createMaterialTopTabNavigator} from 'react-navigation'; // 1.0.0-beta.27
import {createStackNavigator} from 'react-navigation-stack';

import Icon from 'react-native-vector-icons/FontAwesome';

import {createBottomTabNavigator} from 'react-navigation-tabs';

import LoginContainer from '../containers/login/LoginContainer';
import WelcomeScreen from '../components/welcomeScreen/WelcomeScreen';



//quan ly khoa hoc
import DanhSachMonHoc from '../components/admin/monhoc/DanhSachMonHoc';
import ThemMonHoc from '../components/admin/monhoc/ThemMonHoc';
import CapNhatMonHoc from '../components/admin/monhoc/CapNhatMonHoc';
import ThongTinMonHoc from '../components/admin/monhoc/ThongTinMonHoc';
//qua ly lop hoc
import TuyChonLop from '../components/admin/lophoc/TuyChonLop';
import DanhSachLopHoc from '../components/admin/lophoc/DanhSachLopHoc';
import ThemLopHoc from '../components/admin/lophoc/ThemLopHoc';
import CapNhatLop from '../components/admin/lophoc/CapNhatLop';
import ThongTinLop from '../components/admin/lophoc/ThongTinLop';
import DanhSachSinhVienLopHoc from '../components/admin/lophoc/DanhSachSinhVienLopHoc';
import ThemSVLop from '../components/admin/lophoc/ThemSVLop';

//quan ly lop hoc phan
import DanhSachLopHocPhan from '../components/admin/lophoc/DanhSachLopHocPhan';
import ThemLopHocPhan from '../components/admin/lophoc/ThemLopHocPhan';
import DanhSachSinhVIenLopHocPhan from '../components/admin/lophoc/DanhSachSinhVIenLopHocPhan';

//quan ly tai khoan
import TuyChonTaiKhoan from '../components/admin/taikhoan/TuyChonTaiKhoan';
import DanhSachGiangVien from '../components/admin/taikhoan/DanhSachGiangVien';
import DanhSachSinhVien from '../components/admin/taikhoan/DanhSachSinhVien';
import ThemGiangVien from '../components/admin/taikhoan/ThemGiangVien';
import ThemSinhVien from '../components/admin/taikhoan/ThemSinhVien';
import ThongTinGiangVien from '../components/admin/taikhoan/ThongTinGiangVien';
import DanhSachMonHocTheoGV from '../components/admin/taikhoan/DanhSachMonHocTheoGV';
import ThemMonHocGV from '../components/admin/taikhoan/ThemMonHocGV';
// =========== chuc nang admin end ===============

/// ================chuc nang giang vien ==============================///
import HomeGiangVien from '../components/giangvien/HomeGiangVien';
import QuanLyBaiKiemTra from '../components/giangvien/kiemtra/QuanLyBaiKiemTra';
import GVDanhSachMonHoc from '../components/giangvien/monhoc/GVDanhSachMonHoc';
import GVDanhSachLopHocPhan from '../components/giangvien/monhoc/GVDanhSachLopHocPhan';
import GVDanhSachChuDe from '../components/giangvien/monhoc/GVDanhSachChuDe';
import TaoChuDe from '../components/giangvien/monhoc/TaoChuDe';
import GVDanhSachCauHoi from '../components/giangvien/monhoc/GVDanhSachCauHoi';
import GVThongTinMonHoc from '../components/giangvien/monhoc/GVThongTinMonHoc';

// tạo bài kiểm tra
import DanhSachKiemTra from '../components/giangvien/taokiemtra/DanhSachKiemTra';
import ChiTietBaiKiemTra from '../components/giangvien/kiemtra/ChiTietBaiKiemTra';
///============== chuc nang giang vien dong =====================////////

//chuc nang sinh vien
import HomeSinhVien from '../components/sinhvien/HomeSinhVien';
import KiemTraCode from '../components/sinhvien/kiemtra/KiemTraCode';
import BaiKiemTra from '../components/sinhvien//kiemtra/BaiKiemTra';
import ThemSVLopHocPhan from '../components/admin/lophoc/ThemSVLopHocPhan';
import KetQuaThi from '../components/sinhvien/kiemtra/KetQuaThi';
import DanhSachBaiThi from '../components/sinhvien/kiemtra/DanhSachBaiThi';
import DanhSachChuaKiemTra from '../components/giangvien/kiemtra/DanhSachChuaKiemTra';
import DanhSachDangKiemTra from '../components/giangvien/kiemtra/DanhSachDangKiemTra';
import  DanhSachKiemTraGV from '../components/giangvien/kiemtra/DanhSachKiemTraGV';
import QuanLyBaiKiemTraTrangChu from '../components/giangvien/kiemtra/QuanLyBaiKiemTraTrangChu';
import QuanLyThongTinThongKe from '../components/giangvien/kiemtra/QuanLyBaiKiemTraTrangChu';
//tab bottom

// sap xep lai 
//chuc nang admin
import HomeAdmin from '../components/admin/HomeAdmin';
import ThongBao from '../components/admin/thongbao/ThongBao';
import ThongTinTaiKhoan from '../components/admin/thongtintaikhoan/ThongTinTaiKhoan';
import ThemBaiKiemTra from '../components/giangvien/kiemtra/ThemBaiKiemTra';
import BatDauThi from '../components/giangvien/kiemtra/BatDauThi';

// tab admin
const TabNavigatorAdmin = createBottomTabNavigator(
  {
    
    HomeApp: {
      screen: HomeAdmin,
      navigationOptions: {
        tabBarLabel: "Tổng quan",
        tabBarIcon: ({ focused }) => (
          <>
            {focused ? (
              <Image
                source={require("../res/images/tongquan_2.png")}
                style={{ width: 20, height: 20 }}
              />
            ) : (
              <Image
              source={require("../res/images/tongquan_1.png")}
                style={{ width: 20, height: 20 }}
              />
            )}
          </>
        ),
      },
    },
    AdminThongBao: {
      screen: ThongBao,
      navigationOptions: {
        tabBarLabel: "Thông Báo",
        tabBarIcon: ({ focused }) => (
          <>
            {focused ? (
              <Image
              source={require("../res/images/notification2.png")}
                style={{ width: 20, height: 20 }}
              />
            ) : (
              <Image
              source={require("../res/images/notification.png")}
                style={{ width: 20, height: 20 }}
              />
            )}
          </>
        ),
      },
    },
    AdminThongTinTaiKhoan: {
      screen: ThongTinTaiKhoan,
      navigationOptions: {
        tabBarLabel: "Tài khoản",
        tabBarIcon: ({ focused }) => (
          <>
            {focused ? (
              <Image
              source={require("../res/images/user_2.png")}
                style={{ width: 20, height: 20 }}
              />
            ) : (
              <Image
              source={require("../res/images/user_1.png")}
                style={{ width: 20, height: 20 }}
              />
            )}
          </>
        ),
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: "#4390DF",
      inactiveTintColor: "#707070",
      style: {
        paddingTop: 11,
        paddingBottom: 10,
        height: 63,
      },
    },
  }
);
const TabAdmin = createAppContainer(TabNavigatorAdmin);

// tab giang vien

const TabNavigatorGiangVien = createBottomTabNavigator(
  {
    
    HomeApp: {
      screen: HomeGiangVien,
      navigationOptions: {
        tabBarLabel: "Tổng quan",
        tabBarIcon: ({ focused }) => (
          <>
            {focused ? (
              <Image
                source={require("../res/images/tongquan_2.png")}
                style={{ width: 20, height: 20 }}
              />
            ) : (
              <Image
              source={require("../res/images/tongquan_1.png")}
                style={{ width: 20, height: 20 }}
              />
            )}
          </>
        ),
      },
    },
    AdminThongBao: {
      screen: ThongBao,
      navigationOptions: {
        tabBarLabel: "Thông Báo",
        tabBarIcon: ({ focused }) => (
          <>
            {focused ? (
              <Image
              source={require("../res/images/notification2.png")}
                style={{ width: 20, height: 20 }}
              />
            ) : (
              <Image
              source={require("../res/images/notification.png")}
                style={{ width: 20, height: 20 }}
              />
            )}
          </>
        ),
      },
    },
    AdminThongTinTaiKhoan: {
      screen: ThongTinTaiKhoan,
      navigationOptions: {
        tabBarLabel: "Tài khoản",
        tabBarIcon: ({ focused }) => (
          <>
            {focused ? (
              <Image
              source={require("../res/images/user_2.png")}
                style={{ width: 20, height: 20 }}
              />
            ) : (
              <Image
              source={require("../res/images/user_1.png")}
                style={{ width: 20, height: 20 }}
              />
            )}
          </>
        ),
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: "#4390DF",
      inactiveTintColor: "#707070",
      style: {
        paddingTop: 11,
        paddingBottom: 10,
        height: 63,
      },
    },
  }
);
const TabGiangVien = createAppContainer(TabNavigatorGiangVien);


const TabNavigatorLopHoc = createBottomTabNavigator(
  {
    
    HomeApp: {
      screen: ThongTinLop,
      navigationOptions: {
        tabBarLabel: "Tổng quan",
        tabBarIcon: ({ focused }) => (
          <>
            {focused ? (
              <Image
                source={require("../res/images/tongquan_2.png")}
                style={{ width: 20, height: 20 }}
              />
            ) : (
              <Image
              source={require("../res/images/tongquan_1.png")}
                style={{ width: 20, height: 20 }}
              />
            )}
          </>
        ),
      },
    },
    CongDong: {
      screen: DanhSachSinhVienLopHoc,
      navigationOptions: {
        tabBarLabel: "Danh sách sinh viên",
        tabBarIcon: ({ focused }) => (
          <>
            {focused ? (
              <Image
              source={require("../res/images/user_2.png")}
                style={{ width: 20, height: 20 }}
              />
            ) : (
              <Image
              source={require("../res/images/user_1.png")}
                style={{ width: 20, height: 20 }}
              />
            )}
          </>
        ),
      },
    },
    HocPhan: {
      screen: DanhSachLopHocPhan,
      navigationOptions: {
        tabBarLabel: "Lớp học phần",
        tabBarIcon: ({ focused }) => (
          <>
            {focused ? (
              <Image
              source={require("../res/images/hocphan_2.png")}
                style={{ width: 20, height: 20 }}
              />
            ) : (
              <Image
              source={require("../res/images/hocphan_1.png")}
                style={{ width: 20, height: 20 }}
              />
            )}
          </>
        ),
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: "#4390DF",
      inactiveTintColor: "#707070",
      style: {
        paddingTop: 11,
        paddingBottom: 10,
        height: 63,
      },
    },
  }
);
const TABLopHoc = createAppContainer(TabNavigatorLopHoc);

//tab navigation giang vien
const TabNavigatorGvMonHoc = createBottomTabNavigator(
  {
    
    HomeAppThongtinMonHocGV: {
      screen: GVThongTinMonHoc,
      navigationOptions: {
        tabBarLabel: "Tổng quan",
        tabBarIcon: ({ focused }) => (
          <>
            {focused ? (
              <Image
                source={require("../res/images/tongquan_2.png")}
                style={{ width: 20, height: 20 }}
              />
            ) : (
              <Image
              source={require("../res/images/tongquan_1.png")}
                style={{ width: 20, height: 20 }}
              />
            )}
          </>
        ),
      },
    },
 
    ChuDe: {
      screen: GVDanhSachChuDe,
      navigationOptions: {
        tabBarLabel: "Chủ đề",
        tabBarIcon: ({ focused }) => (
          <>
            {focused ? (
              <Image
              source={require("../res/images/hocphan_2.png")}
                style={{ width: 20, height: 20 }}
              />
            ) : (
              <Image
              source={require("../res/images/hocphan_1.png")}
                style={{ width: 20, height: 20 }}
              />
            )}
          </>
        ),
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: "#4390DF",
      inactiveTintColor: "#707070",
      style: {
        paddingTop: 11,
        paddingBottom: 10,
        height: 63,
      },
    },
  }
);
const TABGvMonHoc = createAppContainer(TabNavigatorGvMonHoc);

// tab thông tin giảng viên
const TabThongTinGiangVien = createBottomTabNavigator(
  {
    
    HomeApp: {
      screen: ThongTinGiangVien,
      navigationOptions: {
        tabBarLabel: "Tổng quan",
        tabBarIcon: ({ focused }) => (
          <>
            {focused ? (
              <Image
                source={require("../res/images/tongquan_2.png")}
                style={{ width: 20, height: 20 }}
              />
            ) : (
              <Image
              source={require("../res/images/tongquan_1.png")}
                style={{ width: 20, height: 20 }}
              />
            )}
          </>
        ),
      },
    },
 
    tabDanhSachMonHocTheoGV: {
      screen: DanhSachMonHocTheoGV,
      navigationOptions: {
        tabBarLabel: "Môn học",
        tabBarIcon: ({ focused }) => (
          <>
            {focused ? (
              <Image
              source={require("../res/images/hocphan_2.png")}
                style={{ width: 20, height: 20 }}
              />
            ) : (
              <Image
              source={require("../res/images/hocphan_1.png")}
                style={{ width: 20, height: 20 }}
              />
            )}
          </>
        ),
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: "#4390DF",
      inactiveTintColor: "#707070",
      style: {
        paddingTop: 11,
        paddingBottom: 10,
        height: 63,
      },
    },
  }
);
const TABThongTinGV = createAppContainer(TabThongTinGiangVien)


/// tab thong ke bai kiem tra
const TabNavigatorThongkebaikiemtra = createBottomTabNavigator(
  {
    
    HomeAppThongtinMonHocGV: {
      screen: QuanLyBaiKiemTraTrangChu,
      navigationOptions: {
        tabBarLabel: "Tổng quan",
        tabBarIcon: ({ focused }) => (
          <>
            {focused ? (
              <Image
                source={require("../res/images/tongquan_2.png")}
                style={{ width: 20, height: 20 }}
              />
            ) : (
              <Image
              source={require("../res/images/tongquan_1.png")}
                style={{ width: 20, height: 20 }}
              />
            )}
          </>
        ),
      },
    },
 
    ChuDe: {
      screen: BatDauThi,
      navigationOptions: {
        tabBarLabel: "Bắt đầu làm bài",
        tabBarIcon: ({ focused }) => (
          <>
            {focused ? (
              <Image
              source={require("../res/images/hocphan_2.png")}
                style={{ width: 20, height: 20 }}
              />
            ) : (
              <Image
              source={require("../res/images/hocphan_1.png")}
                style={{ width: 20, height: 20 }}
              />
            )}
          </>
        ),
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: "#4390DF",
      inactiveTintColor: "#707070",
      style: {
        paddingTop: 11,
        paddingBottom: 10,
        height: 63,
      },
    },
  }
);
const TABthongkekiemtra = createAppContainer(TabNavigatorThongkebaikiemtra);

// stack
const RootStack = createStackNavigator(
  {
    Init: {
      screen: WelcomeScreen,
    },
    Login:{
      screen:LoginContainer
    },
// chuc nang admin
HomeAdmin:{
  screen:TabAdmin
},







  //chuc nang sinh vien
  HomeSinhVien:{
    screen:HomeSinhVien
  },
  // chuc nang admin
 
  // quan ly khoa hoc
  DanhSachMonHoc:{
    screen:DanhSachMonHoc
  },
  ThemMonHoc:{
    screen:ThemMonHoc
  },
  CapNhatMonHoc:{
    screen:CapNhatMonHoc
  },
  ThongTinMonHoc:{
    screen:ThongTinMonHoc
  },

  //quan ly lop hoc
  TuyChonLop:{
    screen:TuyChonLop
  },
  DanhSachLopHoc:{
    screen:DanhSachLopHoc
  },
  ThemLopHoc:{
    screen:ThemLopHoc
  },
  CapNhatLop:{
    screen:CapNhatLop
  },
  ThongTinLop:{
    screen:ThongTinLop
  },
  TABLopHoc:{
    screen:TABLopHoc
  },
  ThemSVLop:{
    screen:ThemSVLop
  },
  //quan ly lop hoc phan 
  DanhSachLopHocPhan:{
    screen:DanhSachLopHocPhan
  },
  ThemLopHocPhan:{
    screen:ThemLopHocPhan
  },
  DanhSachSinhVIenLopHocPhan:{
    screen:DanhSachSinhVIenLopHocPhan
  },
  
  //quan ly tai khoan
  TuyChonTaiKhoan:{
    screen:TuyChonTaiKhoan
  },
  DanhSachGiangVien:{
    screen:DanhSachGiangVien
  },
  DanhSachSinhVien:{
    screen:DanhSachSinhVien
  },
  ThemGiangVien:{
    screen:ThemGiangVien
  },
  ThemSinhVien:{
    screen:ThemSinhVien
  },
  ThemSVLopHocPhan:{
    screen:ThemSVLopHocPhan
  },
  GVThongTinMonHoc:{
    screen:TABGvMonHoc
  },
  ThemMonHocGV:{
    screen:ThemMonHocGV
  },
  ThemBaiKiemTra:{
    screen:ThemBaiKiemTra
  },

  //=========== chuc nang admin end
    
  //============= chuc nang giang  ven=================//
  HomeGiangVien:{
    screen:TabGiangVien
  },
  QuanLyBaiKiemTra:{
    screen:QuanLyBaiKiemTra
  },
  // tao bai kiemtra
  GVDanhSachMonHoc:{
    screen:GVDanhSachMonHoc
  },
  GVDanhSachLopHocPhan:{
    screen:GVDanhSachLopHocPhan
  },
  GVDanhSachChuDe:{
    screen:GVDanhSachChuDe
  },
  TaoChuDe:{
    screen:TaoChuDe
  },
  GVDanhSachCauHoi:{
    screen:GVDanhSachCauHoi
  },

  DanhSachKiemTra:{
    screen:DanhSachKiemTra
  },
  ChiTietBaiKiemTra:{
    screen:ChiTietBaiKiemTra
  },
  TABThongTinGV:{
    screen:TABThongTinGV
  },

  // chuc nang giang vien end =======================//
  KiemTraCode:{
    screen:KiemTraCode
  },
  BaiKiemTra:{
    screen:BaiKiemTra
  },
  KetQuaThi:{
    screen:KetQuaThi
  },
  DanhSachBaiThi:{
    screen:DanhSachBaiThi
  },
  DanhSachChuaKiemTra:{
    screen:DanhSachChuaKiemTra
  },
  DanhSachDangKiemTra:{
    screen:DanhSachDangKiemTra
  },
  DanhSachKiemTraGV:{
    screen:DanhSachKiemTraGV
  },

  QuanLyBaiKiemTraTrangChu:{
    screen:TABthongkekiemtra
  },
  QuanLyThongTinThongKe:{
    screen:QuanLyThongTinThongKe
  }

  },
 
  {
    mode: 'card',
    headerMode: 'none',
  },
);

export default createAppContainer(RootStack);
