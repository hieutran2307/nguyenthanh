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
import {userProfile, API_PUBLIC} from '../../../config/settings';

export default class TaoChuDe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tenchude: '',
      idmonhoc: this.props.navigation.getParam('idmonhoc'),
    };
  }
  tenchudeChange = (value) => {
    this.setState({
      tenchude: value,
    });
  };

  // gui du lieu len server
  async taomonhoc() {
    fetch(`${API_PUBLIC}/kiemtra/taochude.php`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        tenchude: this.state.tenchude,
        idmonhoc: this.state.idmonhoc,
        idthanhvien:userProfile.data.idthanhvien
      }),
    })
      .then((response) => response.json())
      .then((responseData) => {
        console.log('data tao lop hoc', responseData);
        if (responseData.statusCode === '200') {
          this.props.navigation.navigate('HomeAppThongtinMonHocGV');
        }
      });
  }
  render() {
      console.log("id thanh vien", userProfile.data.idthanhvien)
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Headers
            title="Tạo chủ đề"
            onPressBackButton={() => {
              this.props.navigation.goBack('');
            }}
          />
        </View>
        <View style={{flex: 1, marginTop: Sizes.s100}}>
          <Image
            style={styles.img}
            source={require('../../../res/images/lophoc.png')}
          />
          <View style={{marginTop: Sizes.s20}}>
            <View style={styles.labelContainer}>
              <Text caption medium style={styles.label}>
                Tên chủ đề
              </Text>
            </View>
            <TextInput
              style={styles.input}
              value={this.state.tenchude}
              onChangeText={(text) => this.tenchudeChange(text)}
            />
          </View>
          <TouchableOpacity style={styles.btn} onPress={() => this.taomonhoc()}>
            <Text style={styles.textbtn}>Tạo mới</Text>
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
