import React from 'react';
import {
  Image,
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import {Sizes} from '@dungdang/react-native-basic';
import Header from '../custom/Header';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {userProfile} from '../../config/settings';
import {/* userProfile,*/ serverpic} from '../../config/settings';

export default class HomeGiangVien extends React.Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <ImageBackground
          source={require('../../res/images/bg.jpg')}
          style={styles.image}>
          <View style={{flexDirection: 'row', padding: Sizes.s20}}>
            <View style={{width: '80%'}}>
              <Text
                style={{
                  fontSize: Sizes.h40,
                  fontWeight: 'bold',
                  textAlign: 'center',
                  color: '#FFF',
                }}>
                CAO ĐẲNG KỸ THUẬT CAO THẮNG
              </Text>
            </View>
            <TouchableOpacity
              style={{
                width: '20%',
                alignItems: 'flex-end',
              }}
              onPress={() => {
                Alert.alert('Thông báo ', 'Bạn có chắc muốn đăng xuất không?', [
                  {
                    text: 'Đóng',
                    onPress: () => {
                      return false;
                    },
                    style: 'cancel',
                  },
                  {
                    text: 'Xác nhận',
                    onPress: () => {
                      userProfile.token = '';
                      userProfile.user = '';
                      userProfile.avatar = '';
                      userProfile.noiDungFileMaHoa = '';
                      this.props.navigation.navigate('Login');
                    },
                    style: 'cancel',
                  },
                ]);
              }}>
              <Image
                source={require('../../res/images/ic_logout.png')}
                style={{
                  height: Sizes.s100,
                  width: Sizes.s100,
                  resizeMode: 'contain',
                }}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.viewavatar}>
            <Image
              source={{
                uri: `${serverpic}/${userProfile.data.hinhanh}`,
              }}
              style={styles.avatar}
            />
            <Text style={styles.textavatar}>{userProfile.data.hovaten}</Text>
          </View>

          <View style={styles.chucnangview}>
            <Text style={styles.txtchucnang}>
              Xin chào, Giảng viên vui lòng chọn tính năng ?
            </Text>
            <View style={styles.fullField}>
              <View style={styles.colMainLeft}>
                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate('QuanLyBaiKiemTra')
                  }>
                  <View
                    colors={['rgb(150,150,150)', 'rgb(105,105,105)']}
                    style={styles.boxMain}>
                    <View
                      style={[
                        styles.highLightBoxMain,
                        {backgroundColor: '#f06955'},
                      ]}>
                      <View style={styles.viewIonChucNang}>
                        <Image
                          source={require('../../res/images/quizs.png')}
                          style={styles.imageBoxChucNang}
                        />
                      </View>
                      <Text style={styles.textchucnang}>
                        Quản lý bài tập kiểm tra
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate('GVDanhSachMonHoc')
                  }>
                  <View
                    colors={['rgb(150,150,150)', 'rgb(105,105,105)']}
                    style={styles.boxMain}>
                    <View
                      style={[
                        styles.highLightBoxMain,
                        {backgroundColor: '#38a9ec'},
                      ]}>
                      <View style={styles.viewIonChucNang}>
                        <Image
                          source={require('../../res/images/account.png')}
                          style={styles.imageBoxChucNang}
                        />
                      </View>
                      <Text style={styles.textchucnang}>Môn học</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={styles.colMainRight}>
                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate('DanhSachKiemTra')
                  }>
                  <View
                    colors={['rgb(150,150,150)', 'rgb(105,105,105)']}
                    style={styles.boxMain}>
                    <View
                      backgroundColor="#58cba7"
                      style={styles.highLightBoxMain}>
                      <View style={styles.viewIonChucNang}>
                        <Image
                          source={require('../../res/images/classs.png')}
                          style={styles.imageBoxChucNang}
                        />
                      </View>
                      <Text style={styles.textchucnang}>Tạo câu hỏi</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ImageBackground>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
  },
  viewavatar: {
    position: 'absolute',
    height: Sizes.s40,
    marginTop: Sizes.s200,
    marginHorizontal: Sizes.s30,
    flexDirection: 'row',
  },
  avatar: {
    width: Sizes.s140,
    height: Sizes.s140,
    borderRadius: Sizes.s100,
  },
  textavatar: {
    position: 'absolute',
    fontSize: Sizes.s35,
    marginLeft: Sizes.s140,
    color: '#FFFF',
    fontWeight: 'bold',
  },
  lichsuview: {
    width: Sizes.s140,
    height: Sizes.s140,
    borderRadius: Sizes.s100,
    shadowColor: '#AFAEAF',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
    backgroundColor: '#FFFF',
    marginTop: Sizes.s260 + Sizes.s50,
    marginLeft: Sizes.s340 + Sizes.s100,
  },
  imagelichsu: {
    width: Sizes.s100,
    height: Sizes.s100,
    alignSelf: 'center',
  },
  chucnangview: {
    flex: 1,
    marginTop: Sizes.s340,
    marginHorizontal: Sizes.s30,
  },
  txtchucnang: {
    fontSize: Sizes.s30,
    fontWeight: 'bold',
  },
  fullField: {
    flex: 1,
    flexDirection: 'row',
  },
  colMainLeft: {
    flex: 1,
    marginRight: Sizes.s15,
  },
  boxMain: {
    height: Sizes.s160,
    borderWidth: 0,
    borderRadius: 8,
    marginTop: Sizes.s30,
    marginBottom: Sizes.s30,
    elevation: Sizes.s25,
  },
  highLightBoxMain: {
    flexDirection: 'row',
    height: Sizes.s160,
    borderWidth: 0,
    borderRadius: Sizes.s15,
    paddingTop: Sizes.s30,
    paddingLeft: Sizes.s25,
    paddingRight: Sizes.s25,
  },
  colMainRight: {
    flex: 1,
    marginLeft: Sizes.s15,
  },
  viewIonChucNang: {
    width: Sizes.s100,
    height: Sizes.s100,
    backgroundColor: '#FFFF',
    borderRadius: 100,
  },
  textchucnang: {
    flex: 1,
    marginTop: Sizes.s20,
    marginLeft: Sizes.s10,
    color: '#FFFF',
    fontSize: Sizes.s30,
    fontWeight: 'bold',
  },
  imageBoxChucNang: {
    width: Sizes.s60,
    height: Sizes.s60,
    alignSelf: 'center',
    marginTop: Sizes.s20,
  },
  videoNoiBat: {
    flex: 1,
  },
  listKhoaHoc: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  viewKhoaHocNoiBat: {
    width: Sizes.s340,
    height: Sizes.s240,
    borderWidth: 0,
    borderRadius: Sizes.s15,
    justifyContent: 'flex-end',
  },
  viewText: {
    width: '100%',
    height: Sizes.s40,
    backgroundColor: '#e0e6cb',
  },
  textKhoaHoc: {
    fontSize: Sizes.s30,
  },
});
