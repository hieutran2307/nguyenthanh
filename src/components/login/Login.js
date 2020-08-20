import React from 'react';
import {
  Image,
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Dimensions,
  TextInput,
} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import CustomButton from '../custom/CustomButton';
import Block from '../custom/Block';
import {Sizes} from '@dungdang/react-native-basic';
import NextArrowButton from '../custom/NextArrowButton';

import {userProfile} from '../../config/settings';
import Toast from 'react-native-toast-message';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }
  onUsernameChange = (value) => {
    this.setState({
      username: value,
    });
  };

  onPasswordChange = (value) => {
    this.setState({
      password: value,
    });
  };
  onPressLogin = async () => {
    const {postLoginAction} = this.props;
    const {username, password} = this.state;
    postLoginAction({
      username: username,
      password: password,
    });
  };
  componentDidUpdate(prevProps) {
    if (prevProps.loginData !== this.props.loginData) {
      //chuc nang admin
      if (
        this.props.statusCode === '200' &&
        this.props.loginData.user.idnhom === '1'
      ) {
        userProfile.data.hovaten = this.props.loginData.user.hovaten;
        userProfile.data.ngaysinh = this.props.loginData.user.ngaysinh;
        userProfile.data.sodienthoai = this.props.loginData.user.sodienthoai;
        userProfile.data.email = this.props.loginData.user.email;
        userProfile.data.masosinhvien = this.props.loginData.user.masosinhvien;
        userProfile.data.khoa = this.props.loginData.user.khoa;
        userProfile.data.chuyenkhoa = this.props.loginData.user.chuyenkhoa;
        userProfile.data.nienkhoa = this.props.loginData.user.nienkhoa;
        userProfile.data.khoahoc = this.props.loginData.user.khoahoc;
        userProfile.data.thuhang = this.props.loginData.user.thuhang;
        userProfile.data.giohoctap = this.props.loginData.user.giohoctap;
        userProfile.data.tracnghiem = this.props.loginData.user.tracnghiem;
        userProfile.data.hinhanh = this.props.loginData.user.hinhanh;
        userProfile.data.idthanhvien = this.props.loginData.user.idthanhvien;
        this.props.navigation.replace('HomeAdmin');
      }
      // chuc nang giao vien
      else if (
        this.props.statusCode === '200' &&
        this.props.loginData.user.idnhom === '2'
      ) {
        userProfile.data.hovaten = this.props.loginData.user.hovaten;
        userProfile.data.ngaysinh = this.props.loginData.user.ngaysinh;
        userProfile.data.sodienthoai = this.props.loginData.user.sodienthoai;
        userProfile.data.email = this.props.loginData.user.email;
        userProfile.data.masosinhvien = this.props.loginData.user.masosinhvien;
        userProfile.data.khoa = this.props.loginData.user.khoa;
        userProfile.data.chuyenkhoa = this.props.loginData.user.chuyenkhoa;
        userProfile.data.nienkhoa = this.props.loginData.user.nienkhoa;
        userProfile.data.khoahoc = this.props.loginData.user.khoahoc;
        userProfile.data.thuhang = this.props.loginData.user.thuhang;
        userProfile.data.giohoctap = this.props.loginData.user.giohoctap;
        userProfile.data.tracnghiem = this.props.loginData.user.tracnghiem;
        userProfile.data.hinhanh = this.props.loginData.user.hinhanh;
        userProfile.data.idthanhvien = this.props.loginData.user.idthanhvien;
        this.props.navigation.replace('HomeGiangVien');
      }
      // chuc nang sinh vien
      else if (
        this.props.statusCode === '200' &&
        this.props.loginData.user.idnhom === '3'
      ) {
        userProfile.data.hovaten = this.props.loginData.user.hovaten;
        userProfile.data.ngaysinh = this.props.loginData.user.ngaysinh;
        userProfile.data.sodienthoai = this.props.loginData.user.sodienthoai;
        userProfile.data.email = this.props.loginData.user.email;
        userProfile.data.masosinhvien = this.props.loginData.user.masosinhvien;
        userProfile.data.khoa = this.props.loginData.user.tenkhoa;
        userProfile.data.lophoc = this.props.loginData.user.tenlop;
        userProfile.data.chuyenkhoa = this.props.loginData.user.chuyenkhoa;
        userProfile.data.nienkhoa = this.props.loginData.user.nienkhoa;
        userProfile.data.khoahoc = this.props.loginData.user.khoahoc;
        userProfile.data.thuhang = this.props.loginData.user.thuhang;
        userProfile.data.giohoctap = this.props.loginData.user.giohoctap;
        userProfile.data.tracnghiem = this.props.loginData.user.tracnghiem;
        userProfile.data.hinhanh = this.props.loginData.user.hinhanh;
        userProfile.data.idthanhvien = this.props.loginData.user.idthanhvien;
        this.props.navigation.replace('HomeSinhVien');
      }
    }
    if (prevProps.error !== this.props.error) {
      if (this.props.error !== '') {
        Toast.show({
          type: 'error',
          position: 'top',
          text1: 'Thông báo',
          text2: this.props.error,
          visibilityTime: 4000,
          autoHide: true,
          topOffset: 30,
          bottomOffset: 40,
          onShow: () => {},
          onHide: () => {},
        });
      }
    }
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Toast ref={(ref) => Toast.setRef(ref)} />
        <View style={{flex: 1}}>
          <KeyboardAvoidingView behavior="padding" style={{flex: 1}}>
            <Block center middle>
              <Block middle>
                <Image
                  source={require('../../res/images/logo.png')}
                  style={{height: 80, width: 320}}
                />
              </Block>
              <Block flex={3.5} center>
                <Text style={{fontSize: Sizes.s40}}>ĐĂNG NHẬP TÀI KHOẢN</Text>
                <Text
                  style={{
                    color: '#69707F',
                    fontSize: Sizes.s25s,
                    marginTop: Sizes.s15,
                  }}>
                  Vui lòng nhập thông tin bên dưới
                </Text>
                <Block center style={{marginTop: 44}}>
                  <View style={{marginTop: Sizes.s20}}>
                    <View style={styles.labelContainer}>
                      <Text caption medium style={styles.label}>
                        Tài khoản
                      </Text>
                    </View>
                    <TextInput
                      style={styles.input}
                      value={this.state.username}
                      onChangeText={(text) => this.onUsernameChange(text)}
                    />
                  </View>

                  <View style={{marginTop: Sizes.s20}}>
                    <View style={styles.labelContainer}>
                      <Text caption medium style={styles.label}>
                        Tài khoản
                      </Text>
                    </View>
                    <TextInput
                      style={styles.input}
                      value={this.state.password}
                      onChangeText={(text) => this.onPasswordChange(text)}
                      secureTextEntry={!this.state.showPassword}
                    />
                  </View>

                  <NextArrowButton
                    label="ĐĂNG NHẬP"
                    handleNextButton={() => this.onPressLogin()}
                  />
                </Block>
              </Block>
            </Block>
          </KeyboardAvoidingView>
        </View>
      </SafeAreaView>
    );
  }
}
const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  labelContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
    width: width - 50,
  },
  label: {
    textTransform: 'uppercase',
  },
  input: {
    backgroundColor: 'rgba(224, 231, 255, 0.20)', // '#E0E7FF' 20%
    borderWidth: 0.5,
    borderColor: '#4abf91',
    borderRadius: 5,
    fontSize: 20,
    color: '#2E384D',
    height: 45,
    paddingVertical: 11,
    paddingHorizontal: 16,
  },
});
