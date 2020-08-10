import React from 'react';
import {Button, Image, View, Text} from 'react-native';
import {createAppContainer,createMaterialTopTabNavigator} from 'react-navigation'; // 1.0.0-beta.27
import {createStackNavigator} from 'react-navigation-stack';

import Icon from 'react-native-vector-icons/FontAwesome';

import {createBottomTabNavigator} from 'react-navigation-tabs';

import LoginContainer from '../containers/login/LoginContainer';
import WelcomeScreen from '../components/welcomeScreen/WelcomeScreen';

//chuc nang admin
import HomeAdmin from '../components/admin/HomeAdmin';

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
// =========== chuc nang admin end ===============

/// ================chuc nang giang vien ==============================///
import HomeGiangVien from '../components/giangvien/HomeGiangVien';
import QuanLyBaiKiemTra from '../components/giangvien/kiemtra/QuanLyBaiKiemTra';
import GVDanhSachMonHoc from '../components/giangvien/monhoc/GVDanhSachMonHoc';
import GVDanhSachLopHocPhan from '../components/giangvien/monhoc/GVDanhSachLopHocPhan';
import GVDanhSachChuDe from '../components/giangvien/monhoc/GVDanhSachChuDe';
import TaoChuDe from '../components/giangvien/monhoc/TaoChuDe';
import GVDanhSachCauHoi from '../components/giangvien/monhoc/GVDanhSachCauHoi';
import TaoCauHoi from '../components/giangvien/monhoc/TaoCauHoi';

// tạo bài kiểm tra
import DanhSachKiemTra from '../components/giangvien/taokiemtra/DanhSachKiemTra';
import ChiTietBaiKiemTra from '../components/giangvien/kiemtra/ChiTietBaiKiemTra';
///============== chuc nang giang vien dong =====================////////

//chuc nang sinh vien
import HomeSinhVien from '../components/sinhvien/HomeSinhVien';
import KiemTraCode from '../components/sinhvien/kiemtra/KiemTraCode';
import BaiKiemTra from '../components/sinhvien//kiemtra/BaiKiemTra';
import ThemSVLopHocPhan from '../components/admin/lophoc/ThemSVLopHocPhan';
//tab bottom
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



// stack
const RootStack = createStackNavigator(
  {
    Init: {
      screen: WelcomeScreen,
    },
    Login:{
      screen:LoginContainer
    },
  //chuc nang sinh vien
  HomeSinhVien:{
    screen:HomeSinhVien
  },
  // chuc nang admin
  HomeAdmin:{
    screen:HomeAdmin
  },
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
  ThemSVLopHocPhan:{
    screen:ThemSVLopHocPhan
  },

  //=========== chuc nang admin end
    
  //============= chuc nang giang  ven=================//
  HomeGiangVien:{
    screen:HomeGiangVien
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
  TaoCauHoi:{
    screen:TaoCauHoi
  },
  DanhSachKiemTra:{
    screen:DanhSachKiemTra
  },
  ChiTietBaiKiemTra:{
    screen:ChiTietBaiKiemTra
  },

  // chuc nang giang vien end =======================//
  KiemTraCode:{
    screen:KiemTraCode
  },
  BaiKiemTra:{
    screen:BaiKiemTra
  }
  },

  {
    mode: 'card',
    headerMode: 'none',
  },
);

export default createAppContainer(RootStack);
