import React from 'react';
import {
  Button,
  Image,
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableHighlight,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import {Sizes} from '@dungdang/react-native-basic';
import Headers from '../../custom/Headers';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {userProfile} from '../../../config/settings';
import {/* userProfile,*/ serverpic} from '../../../config/settings';
export default class ThongTinTaiKhoan extends React.Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.container}>
          <View style={styles.viewInfo}>
            <View
              style={{
                width: '100%',
                paddingTop: Sizes.s50,
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: Sizes.h52,
                  fontWeight: 'bold',
                  color: '#FFF',
                }}>
                Thông tin tài khoản
              </Text>
            </View>
            <Image
              source={{
                uri: `${serverpic}/${userProfile.data.hinhanh}`,
              }}
              style={styles.avatar}
            />
            <Text style={styles.textHeader}>{userProfile.data.hovaten}</Text>
            <Text style={styles.textKhoaHeader}>{userProfile.data.khoa}</Text>
          </View>
          <View style={styles.viewThanhTich}>
            <View style={styles.fullField}>
              <View style={styles.colMainLeft}>
                <View style={styles.boxMain}>
                  <View style={[styles.highLightBoxMain]}>
                    <View style={styles.viewIonChucNang}>
                      <Image
                        source={require('../../../res/images/khoahocs.png')}
                        style={styles.imageBoxChucNang}
                      />
                    </View>
                    <View style={{paddingLeft: Sizes.s15}}>
                      <Text style={styles.textchucnang}>
                        {userProfile.data.khoahoc}
                      </Text>
                      <Text style={{marginRight: Sizes.s20}}>Khóa học</Text>
                    </View>
                  </View>
                </View>

                <View
                  colors={['rgb(150,150,150)', 'rgb(105,105,105)']}
                  style={styles.boxMain}>
                  <View style={[styles.highLightBoxMain]}>
                    <View style={styles.viewIonChucNang}>
                      <Image
                        source={require('../../../res/images/times.png')}
                        style={styles.imageBoxChucNang}
                      />
                    </View>
                    <View style={{paddingLeft: Sizes.s15}}>
                      <Text style={styles.textchucnang}>
                        {' '}
                        {userProfile.data.giohoctap}{' '}
                      </Text>
                      <Text style={{marginRight: Sizes.s20}}>Giờ học tập</Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.colMainRight}>
                <View
                  colors={['rgb(150,150,150)', 'rgb(105,105,105)']}
                  style={styles.boxMain}>
                  <View style={styles.highLightBoxMain}>
                    <View style={styles.viewIonChucNang}>
                      <Image
                        source={require('../../../res/images/ranks.png')}
                        style={styles.imageBoxChucNang}
                      />
                    </View>
                    <View style={{paddingLeft: Sizes.s15}}>
                      <Text style={styles.textchucnang}>
                        {' '}
                        {userProfile.data.thuhang}{' '}
                      </Text>
                      <Text style={{marginRight: Sizes.s20}}>Thứ hạng</Text>
                    </View>
                  </View>
                </View>

                <View
                  colors={['rgb(150,150,150)', 'rgb(105,105,105)']}
                  style={styles.boxMain}>
                  <View style={styles.highLightBoxMain}>
                    <View style={styles.viewIonChucNang}>
                      <Image
                        source={require('../../../res/images/timess.png')}
                        style={styles.imageBoxChucNang}
                      />
                    </View>
                    <View style={{paddingLeft: Sizes.s15}}>
                      <Text style={styles.textchucnang}>
                        {' '}
                        {userProfile.data.tracnghiem}{' '}
                      </Text>
                      <Text style={{marginRight: Sizes.s20}}>Trắc nghhiệm</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>

          <View style={{flex: 1, paddingBottom: Sizes.s20}}>
            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={styles.viewThongTin}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingHorizontal: Sizes.s30,
                  }}>
                  <Image
                    source={require('../../../res/images/school.png')}
                    style={{
                      width: Sizes.s100,
                      height: Sizes.s100,
                      resizeMode: 'contain',
                    }}
                  />
                  <Text
                    style={{
                      fontSize: Sizes.h48,
                      fontWeight: 'bold',
                      marginLeft: Sizes.s20,
                    }}>
                    Thông tin cá nhân
                  </Text>
                </View>

                <View style={styles.fullField}>
                  <View style={styles.colMainLeft}>
                    <View
                      colors={['rgb(150,150,150)', 'rgb(105,105,105)']}
                      style={styles.boxMain}>
                      <View style={[styles.highLightBoxMain]}>
                        <View>
                          <Text>Họ và tên</Text>
                          <Text style={styles.textinfouser}>
                            {userProfile.data.hovaten}
                          </Text>
                        </View>
                      </View>
                    </View>

                    <View
                      colors={['rgb(150,150,150)', 'rgb(105,105,105)']}
                      style={styles.boxMain}>
                      <View style={[styles.highLightBoxMain]}>
                        <View>
                          <Text> Số điện thoại</Text>
                          <Text style={styles.textinfouser}>
                            {userProfile.data.sodienthoai}
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                  <View style={styles.colMainRight}>
                    <View
                      colors={['rgb(150,150,150)', 'rgb(105,105,105)']}
                      style={styles.boxMain}>
                      <View style={styles.highLightBoxMain}>
                        <View>
                          <Text>Ngày sinh</Text>
                          <Text style={styles.textinfouser}>
                            {userProfile.data.ngaysinh}
                          </Text>
                        </View>
                      </View>
                    </View>

                    <View
                      colors={['rgb(150,150,150)', 'rgb(105,105,105)']}
                      style={styles.boxMain}>
                      <View style={styles.highLightBoxMain}>
                        <View>
                          <Text>Email</Text>
                          <Text style={styles.textinfouser}>
                            {userProfile.data.email}
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </View>

              <View style={styles.viewThongTin}>
                <View
                  style={{
                    flexDirection: 'row',
                    paddingHorizontal: Sizes.s30,
                    marginTop: Sizes.s10,
                  }}>
                  <Image
                    source={require('../../../res/images/school.png')}
                    style={{
                      width: Sizes.s100,
                      height: Sizes.s100,
                      resizeMode: 'contain',
                    }}
                  />
                  <Text
                    style={{
                      fontSize: Sizes.h48,
                      fontWeight: 'bold',
                      marginLeft: Sizes.s20,
                      marginTop: Sizes.s20,
                    }}>
                    Thông tin khác
                  </Text>
                </View>

                <View style={styles.fullField}>
                  <View style={styles.colMainLeft}>
                    <View
                      colors={['rgb(150,150,150)', 'rgb(105,105,105)']}
                      style={styles.boxMain}>
                      <View style={[styles.highLightBoxMain]}>
                        <View>
                          <Text>Mã số sinh viên</Text>
                          <Text style={styles.textinfouser}>
                            {userProfile.data.masosinhvien}
                          </Text>
                        </View>
                      </View>
                    </View>

                    <View
                      colors={['rgb(150,150,150)', 'rgb(105,105,105)']}
                      style={styles.boxMain}>
                      <View style={[styles.highLightBoxMain]}>
                        <View>
                          <Text>Chuyên nghành</Text>
                          <Text style={styles.textinfouser}>
                            {userProfile.data.chuyenkhoa}
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                  <View style={styles.colMainRight}>
                    <View
                      colors={['rgb(150,150,150)', 'rgb(105,105,105)']}
                      style={styles.boxMain}>
                      <View style={styles.highLightBoxMain}>
                        <View>
                          <Text>Khoa</Text>
                          <Text style={styles.textinfouser}>
                            {userProfile.data.khoa}
                          </Text>
                        </View>
                      </View>
                    </View>

                    <View
                      colors={['rgb(150,150,150)', 'rgb(105,105,105)']}
                      style={styles.boxMain}>
                      <View style={styles.highLightBoxMain}>
                        <View>
                          <Text>Niên khoá</Text>
                          <Text style={styles.textinfouser}>
                            {userProfile.data.nienkhoa}
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </ScrollView>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewInfo: {
    flex: 1,
    backgroundColor: '#f06c5b',
  },
  viewAvatar: {},
  avatar: {
    marginTop: Sizes.s100,
    width: Sizes.s160,
    height: Sizes.s160,
    borderRadius: Sizes.s100,
    alignSelf: 'center',
  },
  textHeader: {
    marginTop: Sizes.s15,
    alignSelf: 'center',
    fontSize: Sizes.s30,
    color: '#FFFF',
    fontWeight: 'bold',
  },
  textKhoaHeader: {
    marginTop: Sizes.s15,
    alignSelf: 'center',
    fontSize: Sizes.s25,
    color: '#FFFF',
  },
  viewThanhTich: {
    height: Sizes.s340 + Sizes.s70,
    marginHorizontal: Sizes.s10,
    backgroundColor: '#ffffff',
    shadowColor: '#AFAEAF',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
  },
  fullField: {
    flex: 1,
    flexDirection: 'row',
  },
  colMainLeft: {
    flex: 1,
    marginLeft: Sizes.s10,
  },
  boxMain: {
    height: Sizes.s160,
    borderWidth: 0,
    borderRadius: Sizes.s15,
    marginTop: Sizes.s30,
    elevation: Sizes.s5,
    marginHorizontal: Sizes.s10,
    backgroundColor: '#FFF',
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
    marginRight: Sizes.s10,
  },
  viewIonChucNang: {
    width: Sizes.s100,
    height: Sizes.s100,
    backgroundColor: '#f06955',
    borderRadius: Sizes.s100,
  },
  textchucnang: {
    marginTop: Sizes.s20,
    marginLeft: Sizes.s10,
    color: 'black',
    fontSize: Sizes.s40,
    fontWeight: 'bold',
  },
  imageBoxChucNang: {
    width: Sizes.s60,
    height: Sizes.s60,
    alignSelf: 'center',
    marginTop: Sizes.s20,
  },
  thongtin: {
    marginTop: Sizes.s20,
    marginHorizontal: Sizes.s30,
  },
  textinfouser: {
    marginTop: Sizes.s10,
    color: 'black',
    fontSize: Sizes.s30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
