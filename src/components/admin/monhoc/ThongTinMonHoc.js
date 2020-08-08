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
import UserAvatar from 'react-native-user-avatar';

export default class ThongTinMonHoc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tenmonhoc: this.props.navigation.getParam('tenmonhoc'),
      sotinchi: this.props.navigation.getParam('sotinchi'),
      sotiet: this.props.navigation.getParam('sotiet'),
      idmonhoc: this.props.navigation.getParam('idmonhoc'),
    };
  }
  tenmonhocChange = (value) => {
    this.setState({
      tenmonhoc: value,
    });
  };
  sotinchiChange = (value) => {
    this.setState({
      sotinchi: value,
    });
  };
  sotietChange = (value) => {
    this.setState({
      sotiet: value,
    });
  };

  // gui du lieu len server
  async taomonhoc() {
    fetch(`${API_PUBLIC}/kiemtra/capnhatmonhoc.php`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        tenmonhoc: this.state.tenmonhoc,
        sotinchi: this.state.sotinchi,
        sotiet: this.state.sotiet,
        idmonhoc: this.state.idmonhoc,
      }),
    })
      .then((response) => response.json())
      .then((responseData) => {
        if (responseData.statusCode === '200') {
          this.props.navigation.navigate('DanhSachMonHoc');
        }
      });
  }
  render() {
    console.log('get id cap nhat mon hoc', this.state.tenmonhocs);
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Headers
            title="Thông tin môn học"
            onPressBackButton={() => {
              this.props.navigation.goBack('');
            }}
          />
        </View>
        <View
          style={{flex: 1, marginTop: Sizes.s100, marginHorizontal: Sizes.s30}}>
          <ScrollView>
            <View style={{alignItems: 'center'}}>
              <UserAvatar
                style={styles.img}
                name={this.state.tenmonhoc}
                bgColors={['#3498db', '#34495e', '#e67e22']}
              />
              <Text
                style={{
                  fontSize: Sizes.s30,
                  marginTop: Sizes.s20,
                }}>
                {' '}
                {this.state.tenmonhoc}
              </Text>
            </View>
            <View style={{marginTop: Sizes.s40}}>
              <View style={styles.wrapper}>
                <View style={{flexDirection: 'row', flex: 1}}>
                  <Image
                    style={styles.icon}
                    source={require('../../../res/images/tinchi.png')}
                  />
                  <Text style={styles.txttitle}>TÍn chỉ</Text>
                </View>

                <View style={{alignItems: 'flex-end', marginRight: Sizes.s40}}>
                  <Text style={styles.txttitles}>{this.state.sotinchi}</Text>
                </View>
              </View>

              <View style={styles.wrapper}>
                <View style={{flexDirection: 'row', flex: 1}}>
                  <Image
                    style={styles.icon}
                    source={require('../../../res/images/tiethoc.png')}
                  />
                  <Text style={styles.txttitle}>Số tiết</Text>
                </View>

                <View style={{alignItems: 'flex-end', marginRight: Sizes.s40}}>
                  <Text style={styles.txttitles}>{this.state.sotiet}</Text>
                </View>
              </View>
            </View>
          </ScrollView>
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
  wrapper: {
    width: width - 20,
    backgroundColor: '#f5f9fc',
    margin: 10,
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.2,
    padding: 10,
    paddingTop: 0,
    flexDirection: 'row',
  },
  icon: {
    marginHorizontal: Sizes.s20,
    marginTop: Sizes.s30,
    width: Sizes.s100,
    height: Sizes.s100,
  },
  txttitle: {
    fontSize: Sizes.s40,
    marginTop: Sizes.s45,
  },
  txttitles: {
    fontSize: Sizes.s50,
    marginTop: Sizes.s30,
  },
});
