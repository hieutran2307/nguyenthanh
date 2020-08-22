import React, {Component} from 'react';
import {View, Image, StyleSheet, Text, Dimensions} from 'react-native';
import Block from '../../custom/Block';
import {Sizes} from '@dungdang/react-native-basic';
import {SafeAreaView} from 'react-navigation';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default class TuyChonTaiKhoan extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={{flex: 1}}>
          <Block center middle>
            <Image
              source={require('../../../res/images/logo.png')}
              style={styles.image}
            />
          </Block>
          <Block flex={1.6} center>
            <Text style={{fontSize: Sizes.s40}}>Quản lý tài khoản</Text>
            <Block center style={{marginTop: Sizes.s60}}>
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate('DanhSachGiangVien')
                }>
                <View style={styles.wrapper}>
                  <View style={styles.bgicon}>
                    <Image
                      source={require('../../../res/images/giaovien.png')}
                      style={styles.icon}
                    />
                  </View>
                  <Text style={styles.text}>Giảng viên</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate('DanhSachSinhVien')
                }>
                <View style={styles.wrapper}>
                  <View style={styles.bgicon}>
                    <Image
                      source={require('../../../res/images/sinhvien.png')}
                      style={styles.icon}
                    />
                  </View>
                  <Text style={styles.text}>Sinh viên</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.goBack('');
                }}
                style={{
                  backgroundColor: '#616161',
                  padding: Sizes.s20,
                  borderRadius: Sizes.s100,
                }}>
                <Image
                  source={require('../../../res/images/arrow_left_white.png')}
                  style={{
                    width: Sizes.s100,
                    height: Sizes.s100,
                    resizeMode: 'contain',
                  }}
                />
              </TouchableOpacity>
            </Block>
          </Block>
        </View>
      </SafeAreaView>
    );
  }
}
const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#edf7ff',
  },
  image: {
    width: 320,
    height: 80,
  },
  wrapper: {
    width: width - Sizes.s35,
    backgroundColor: '#FFFF',
    margin: Sizes.s20,
    shadowOffset: {width: 0, height: Sizes.s10},
    shadowOpacity: 0.2,
    padding: Sizes.s20,
    paddingTop: 0,
    flexDirection: 'row',
  },
  bgicon: {
    backgroundColor: '#f06c5b',
    width: Sizes.s160,
    height: Sizes.s160,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: Sizes.s100,
    height: Sizes.s100,
  },
  text: {
    alignSelf: 'center',
    marginLeft: Sizes.s20,
    fontSize: Sizes.s40,
  },
});
