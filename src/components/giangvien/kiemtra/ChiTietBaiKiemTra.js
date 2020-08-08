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

export default class ChiTietBaiKiemTra extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      idkiemtra: this.props.navigation.getParam('idkiemtra'),
      idtrangthaikiemtra: this.props.navigation.getParam('idtrangthaikiemtra'),
      tentrangthai: this.props.navigation.getParam('tentrangthai'),
      tenbaikiemtra: this.props.navigation.getParam('tenbaikiemtra'),
    };
  }
  componentDidMount() {
    fetch(
      `${API_PUBLIC}/kiemtra/danhsachkiemtragv.php?idthanhvien=${userProfile.data.idthanhvien}`,
    )
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          databaikiemtra: responseJson,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }
  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Headers
            title="Thông tin chi tiết bài kiểm tra"
            onPressBackButton={() => {
              this.props.navigation.goBack('');
            }}
            onPressShowMenu={() => {
              this.props.navigation.navigate('ThemLopHoc');
            }}
          />
        </View>
        <View style={{flex: 1}}>
          <View style={styles.wrapper}>
            <Text style={styles.title}>
              Tên bài kiểm tra: {this.state.tenbaikiemtra}
            </Text>
            <Text style={styles.title}>
              Trạng thái: {this.state.tentrangthai}
            </Text>
          </View>

          <TouchableOpacity style={styles.btn} onPress={() => this.taomonhoc()}>
            <Text style={styles.textbtn}>BẮT ĐẦU</Text>
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
  btn: {
    height: Sizes.s80,
    backgroundColor: '#f06c5b',
    marginHorizontal: Sizes.s30,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: Sizes.s20,
  },
  textbtn: {
    fontSize: Sizes.s50,
    color: '#FFFF',
  },
});
