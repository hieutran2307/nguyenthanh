import React from "react";
import {
  Image,
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-navigation";
import CustomButton from "../custom/CustomButton";
import Block from "../custom/Block";
import { Sizes } from "@dungdang/react-native-basic";
import NextArrowButton from "../custom/NextArrowButton";
import Icon from "react-native-vector-icons/FontAwesome5";
import { userProfile } from "../../config/settings";
import Toast from "react-native-toast-message";

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      showPassword: false,
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
    const { postLoginAction } = this.props;
    const { username, password } = this.state;
    postLoginAction({
      username: username,
      password: password,
    });
  };
  componentDidUpdate(prevProps) {
    if (prevProps.loginData !== this.props.loginData) {
      //chuc nang admin
      if (
        this.props.statusCode === "200" &&
        this.props.loginData.user.idnhom === "1"
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
        this.props.navigation.replace("HomeAdmin");
      }
      // chuc nang giao vien
      else if (
        this.props.statusCode === "200" &&
        this.props.loginData.user.idnhom === "2"
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
        this.props.navigation.replace("HomeGiangVien");
      }
      // chuc nang sinh vien
      else if (
        this.props.statusCode === "200" &&
        this.props.loginData.user.idnhom === "3"
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
        this.props.navigation.replace("HomeSinhVien");
      }
    }
    if (prevProps.error !== this.props.error) {
      if (this.props.error !== "") {
        Toast.show({
          type: "error",
          position: "top",
          text1: "Thông báo",
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
        <View style={{ flex: 1 }}>
          <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
            <Block center middle>
              <Block middle>
                <Image
                  source={require("../../res/images/logo.png")}
                  style={{
                    width: 320,
                    height: 80,
                  }}
                />
              </Block>
              <Block flex={3.5} center>
                <Text style={{ fontSize: Sizes.h38, fontWeight: 'bold', color: '#F54B5B' }}>ỨNG DỤNG KIỂM TRA TRỰC TUYẾN</Text>
                <Text
                  style={{
                    color: "#335272",
                    fontSize: Sizes.h36,
                    marginTop: Sizes.s15,
                  }}
                >
                  Đăng nhập hệ thống
                </Text>
                <Block center style={{ marginTop: Sizes.s40 }}>
                  <View style={{ marginTop: Sizes.s20 }}>
                    <View style={styles.labelContainer}>
                      <Text caption medium style={styles.label}>
                        Tài khoản
                      </Text>
                    </View>
                    <TextInput
                      style={styles.input}
                      placeholder= "Tài khoản"
                      value={this.state.username}
                      onChangeText={(text) => this.onUsernameChange(text)}
                    />
                  </View>

                  <View style={{ marginTop: Sizes.s20 }}>
                    <View style={styles.labelContainer}>
                      <Text caption medium style={styles.label}>
                        Mật khẩu
                      </Text>
                    </View>
                    <TextInput
                      style={styles.input}
                      value={this.state.password}
                      placeholder= "Mật khẩu"
                      onChangeText={(text) => this.onPasswordChange(text)}
                      secureTextEntry={!this.state.showPassword}
                    />
                  </View>
                  <View style={styles.styleCheck}>
                    <TouchableOpacity
                      onPress={() => {
                        this.setState({
                          showPassword: !this.state.showPassword,
                        });
                      }}
                    >
                      <Icon
                        name={
                          this.state.showPassword ? "check-square" : "square"
                        }
                        size={Sizes.s60}
                        color={this.state.showPassword ? "#0000FF" : "#999"}
                      />
                    </TouchableOpacity>
                    <Text
                      style={{ fontSize: Sizes.h34, marginLeft: Sizes.s15 }}
                    >
                      Hiện mật khẩu
                    </Text>
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
const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  labelContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: Sizes.s15,
    width: width - Sizes.s100,
  },
  label: {
    textTransform: "uppercase",
  },
  input: {
    backgroundColor: "rgba(224, 231, 255, 0.20)", // '#E0E7FF' 20%
    borderWidth: 0.5,
    borderColor: "#4abf91",
    borderRadius: Sizes.s10,
    fontSize: Sizes.h38,
    color: "#2E384D",
    height: Sizes.s90,
    paddingVertical: Sizes.s20,
    paddingHorizontal: Sizes.s30,
  },
  styleCheck: {
    flexDirection: "row",
    paddingTop: Sizes.s30,
    alignItems: "center",
    justifyContent: "flex-start",
    width: width - Sizes.s100,
  },
});