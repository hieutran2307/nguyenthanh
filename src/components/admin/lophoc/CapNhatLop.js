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
  TextInput,
} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import {Sizes} from '@dungdang/react-native-basic';
import Headers from '../../custom/Headers';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {/* userProfile,*/ API_PUBLIC} from '../../../config/settings';

export default class CapNhatLop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      idlop: this.props.navigation.getParam('idlop'),
      tenlop: this.props.navigation.getParam('tenlop'),
      soluong: this.props.navigation.getParam('soluongsinhvien'),
    };
  }
  tenlopChange = (value) => {
    this.setState({
      tenlop: value,
    });
  };

  // gui du lieu len server
  async taomonhoc() {
    fetch(`${API_PUBLIC}/kiemtra/capnhatlophoc.php`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        tenlop: this.state.tenlop,
        soluong: this.state.soluong,
        idlop: this.state.idlop,
      }),
    })
      .then((response) => response.json())
      .then((responseData) => {
        if (responseData.statusCode === '200') {
          this.props.navigation.navigate('DanhSachLopHoc');
        }
      });
  }
  render() {
    console.log('souong', this.state.soluong);
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Headers
            title="Cập nhật thông tin môn học"
            onPressBackButton={() => {
              this.props.navigation.goBack('');
            }}
          />
        </View>
        <View
          style={{flex: 1, marginTop: Sizes.s100, marginHorizontal: Sizes.s30}}>
          <Image
            style={styles.img}
            source={require('../../../res/images/lop.png')}
          />
          <View style={{marginTop: Sizes.s20}}>
            <View style={styles.labelContainer}>
              <Text caption medium style={styles.label}>
                Tên lớp
              </Text>
            </View>
            <TextInput
              style={styles.input}
              value={this.state.tenlop}
              onChangeText={(text) => this.tenlopChange(text)}
            />
          </View>
        </View>
        <View style={{marginBottom: Sizes.s60}}>
          <TouchableOpacity style={styles.btn} onPress={() => this.taomonhoc()}>
            <Text style={styles.textbtn}>CẬP NHẠT</Text>
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
  img: {
    width: Sizes.s260,
    height: Sizes.s260,
    alignSelf: 'center',
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
