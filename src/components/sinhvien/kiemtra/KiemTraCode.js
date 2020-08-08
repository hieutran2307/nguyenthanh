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
  Alert
} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import {Sizes} from '@dungdang/react-native-basic';
import Headers from '../../custom/Headers';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {/* userProfile,*/ API_PUBLIC} from '../../../config/settings';

export default class KiemTraCode extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    makiemtra: '',
      idlophocphans: this.props.navigation.getParam('idlophocphans'),
    };
  }
  makiemtraChange = (value) => {
    this.setState({
        makiemtra: value,
    });
  };

  // gui du lieu len server
  async taomonhoc() {
    fetch(`${API_PUBLIC}/kiemtra/kiemtra.php`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        makiemtra: this.state.makiemtra,
      }),
    })
      .then((response) => response.json())
      .then((responseData) => {
        console.log('data tao lop hoc', responseData);
        if (responseData.statusCode === '200') {
          this.props.navigation.navigate('BaiKiemTra',{
            idkiemtra:responseData.user.idkiemtra,
            tenbaikiemtra:responseData.user.tenbaikiemtra
          });
        } else{
            Alert.alert(
                'Thông báo',
                responseData.message,
                [{text: 'OK', onPress: () => console.log('OK Pressed')}],
                {cancelable: false},
              );
        }
      });
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Headers
            title="Vào kiểm tra"
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
                Thông tin kiểm tra
              </Text>
            </View>
            <TextInput
              style={styles.input}
              value={this.state.makiemtra}
              onChangeText={(text) => this.makiemtraChange(text)}
            />
          </View>
          <TouchableOpacity style={styles.btn} onPress={() => this.taomonhoc()}>
            <Text style={styles.textbtn}>KIỂM TRA</Text>
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
