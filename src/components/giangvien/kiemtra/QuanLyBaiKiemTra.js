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
import {CustomControlTab3 } from "../../custom/CustomControlTab3";
import DanhSachChuaKiemTra from './DanhSachChuaKiemTra';
import DanhSachDangKiemTra from './DanhSachDangKiemTra';
import DanhSachKiemTraGV from './DanhSachKiemTraGV';
export default class QuanLyBaiKiemTra extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0,
    };
  }
  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Headers
            title="Danh sách bài tập kiểm tra"
            onPressBackButton={() => {
              this.props.navigation.goBack('');
            }}
            onPressShowMenu={() => {
              this.props.navigation.navigate('ThemBaiKiemTra');
            }}
          />
        </View>
        <View style={{ flex: 1, width: "100%", backgroundColor: "#FFF" }}>
          <CustomControlTab3
            choose = {this.state.selectedIndex}
            onPressLeft={(value) => {
              this.setState({ selectedIndex: value });
            }}
            onPressCenter={(value) => {
              this.setState({ selectedIndex: value });
            }}
            onPressRight={(value) => {
              this.setState({ selectedIndex: value });
            }}
          />
           {this.state.selectedIndex === 0 ? <DanhSachChuaKiemTra {...this.props} />  : this.state.selectedIndex === 1 ? <DanhSachDangKiemTra {...this.props}  /> : <DanhSachKiemTraGV {...this.props}  />}
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
