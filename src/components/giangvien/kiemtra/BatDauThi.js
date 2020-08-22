import React from 'react';
import {
  Button,
  Image,
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableHighlight,
  Dimensions,
  TouchableOpacity,
  ImageBackground,
  FlatList,
} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import {Sizes} from '@dungdang/react-native-basic';
import Headers from '../../custom/Headers';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {userProfile, API_PUBLIC} from '../../../config/settings';
import {CustomControlTab3} from '../../custom/CustomControlTab3';
import UserAvatar from 'react-native-user-avatar';

export default class BatDauThi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tenbaikiemtra: this.props.navigation.getParam('tenbaikiemtra'),
      makiemtra: this.props.navigation.getParam('makiemtra'),
      thoigian: this.props.navigation.getParam('thoigian'),
      idkiemtra: this.props.navigation.getParam('idkiemtra'),
    };
  }
  async batdaukiemtra() {
    fetch(`${API_PUBLIC}/thi/capnhattrangthaikiemtra.php`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        idkiemtra:this.state.idkiemtra,
        idtrangthaikiemtra:2
      }),
    })
      .then((response) => response.json())
      .then((responseData) => {
        console.log('ket qua cap nhat bai thi', responseData);
        if (responseData.statusCode === '200') {
          this.props.navigation.navigate('QuanLyBaiKiemTra');
        }
      });
  }

  async ketthucbaikiemtra() {
  fetch(`${API_PUBLIC}/thi/capnhattrangthaikiemtra.php`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      idkiemtra:this.state.idkiemtra,
      idtrangthaikiemtra:3
    }),
  })
    .then((response) => response.json())
    .then((responseData) => {
      console.log('ket qua cap nhat bai thi', responseData);
      if (responseData.statusCode === '200') {
        this.props.navigation.navigate('QuanLyBaiKiemTra');
      }
    });
}
  render() {
    console.log('ten bai kiem tra bat dau thi', this.state.idkiemtra);
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Headers
            title="Thông tin chi tiết bài kiểm tra"
            onPressBackButton={() => {
              this.props.navigation.goBack('');
            }}
          />
        </View>
        <View style={styles.wrapper}>
          <View style={{marginRight: Sizes.s50, flexDirection: 'row'}}>
            <UserAvatar
              style={{width: Sizes.s200, height: Sizes.s200}}
              name={this.state.name}
              bgColors={['#3498db', '#34495e', '#e67e22']}
            />
            <View style={{flexDirection: 'column'}}>
              <Text style={styles.title}>
                Bài kiểm tra: {this.state.tenbaikiemtra}
              </Text>
              <Text style={styles.title}>
                Mã kiểm tra: {this.state.makiemtra}
              </Text>
              <Text style={styles.title}>
                Thời gian: {this.state.thoigian} phút
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            justifyContent: 'space-around',
            marginTop: Sizes.s100,
            marginHorizontal: Sizes.s30,
            flexDirection: 'row',
          }}>
          <TouchableOpacity onPress={() => this.batdaukiemtra()}>
            <View
              style={{
                width: Sizes.s260,
                height: Sizes.s100,
                backgroundColor: '#3498db',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={{fontSize: Sizes.s30, color: '#FFFF'}}>
                {' '}
                BẮT ĐẦU
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.ketthucbaikiemtra()}>
            <View
              style={{
                width: Sizes.s260,
                height: Sizes.s100,
                backgroundColor: '#3498db',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={{fontSize: Sizes.s30, color: '#FFFF'}}>
                KẾT THÚC
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const {width} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFF',
  },
  header: {
    height: Sizes.s200,
    backgroundColor: '#f06c5b',
  },
  wrapper: {
    width: width - 20,
    backgroundColor: '#edf7ff',
    margin: 10,
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.2,
    padding: 10,
    paddingTop: 0,
  },
  title: {
    fontSize: Sizes.s40,
    marginHorizontal: Sizes.s30,
    marginTop: Sizes.s10,
  },
});
