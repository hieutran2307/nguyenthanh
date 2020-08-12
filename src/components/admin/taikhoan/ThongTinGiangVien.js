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
import {/* userProfile,*/ API_PUBLIC} from '../../../config/settings';
import RBSheet from 'react-native-raw-bottom-sheet';
import {CheckBox, SearchBar} from 'react-native-elements';
import UserAvatar from 'react-native-user-avatar';

export default class ThongTinGiangVien extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      idgv: this.props.navigation.getParam('idgv'),
      ngaysinh: this.props.navigation.getParam('ngaysinh'),
      diachi: this.props.navigation.getParam('diachi'),
      sodienthoai: this.props.navigation.getParam('sodienthoai'),
      email: this.props.navigation.getParam('email'),
      tengv: this.props.navigation.getParam('tengv'),
      maso: this.props.navigation.getParam('maso'),
    };
  }
  render() {
    console.log('id giang vien', this.state.idgv);
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Headers
            title="Thông tin giảng viên"
            onPressBackButton={() => {
              this.props.navigation.goBack('');
            }}
          />
        </View>
        <View>
          <View style={{alignItems: 'center'}}>
            <UserAvatar
              style={styles.img}
              name={this.state.tengv}
              bgColors={['#3498db', '#34495e', '#e67e22']}
            />
            <Text
              style={{
                fontSize: Sizes.s30,
                marginTop: Sizes.s20,
              }}>
              {' '}
              {this.state.tengv}
            </Text>
          </View>
          <View style={styles.wrapperthongtin}>
            <View style={{flexDirection: 'row', flex: 1}}>
              <Image
                style={styles.icon}
                source={require('../../../res/images/macode.jpg')}
              />
              <Text style={styles.txttitle}>{this.state.maso}</Text>
            </View>
          </View>
        </View>

        <View style={styles.wrapperthongtin}>
          <View style={{flexDirection: 'row', flex: 1}}>
            <Image
              style={styles.icon}
              source={require('../../../res/images/student.png')}
            />
            <Text style={styles.txttitle}>Họ và tên</Text>
          </View>

          <View style={{alignItems: 'flex-end', marginRight: Sizes.s40}}>
            <Text style={styles.txttitles}>{this.state.tengv}</Text>
          </View>
        </View>

        <View style={styles.wrapperthongtin}>
          <View style={{flexDirection: 'row', flex: 1}}>
            <Image
              style={styles.icon}
              source={require('../../../res/images/date.png')}
            />
            <Text style={styles.txttitle}>Ngày sinh</Text>
          </View>

          <View style={{alignItems: 'flex-end', marginRight: Sizes.s40}}>
            <Text style={styles.txttitles}>{this.state.ngaysinh}</Text>
          </View>
        </View>

        <View style={styles.wrapperthongtin}>
          <View style={{flexDirection: 'row', flex: 1}}>
            <Image
              style={styles.icon}
              source={require('../../../res/images/geo.png')}
            />
            <Text style={styles.txttitle}>Địa chỉ</Text>
          </View>

          <View style={{alignItems: 'flex-end', marginRight: Sizes.s40}}>
            <Text style={styles.txttitles}>{this.state.diachi}</Text>
          </View>
        </View>
        <View style={styles.wrapperthongtin}>
          <View style={{flexDirection: 'row', flex: 1}}>
            <Image
              style={styles.icon}
              source={require('../../../res/images/phone.png')}
            />
            <Text style={styles.txttitle}>Điện thoại</Text>
          </View>

          <View style={{alignItems: 'flex-end', marginRight: Sizes.s40}}>
            <Text style={styles.txttitles}>{this.state.sodienthoai}</Text>
          </View>
        </View>

        <View style={styles.wrapperthongtin}>
          <View style={{flexDirection: 'row', flex: 1}}>
            <Image
              style={styles.icon}
              source={require('../../../res/images/email.png')}
            />
            <Text style={styles.txttitle}>E-Mail</Text>
          </View>

          <View style={{alignItems: 'flex-end', marginRight: Sizes.s40}}>
            <Text style={styles.txttitles}>{this.state.diachi}</Text>
          </View>
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
    //backgroundColor: '#edf7ff',
    margin: 10,
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.2,
    padding: 10,
    paddingTop: 0,
    flexDirection: 'row',
  },
  title: {
    fontSize: Sizes.s40,
    marginHorizontal: Sizes.s30,
    marginTop: Sizes.s10,
  },
  search: {
    marginTop: Sizes.s10,
    backgroundColor: '#FFFF',
    borderBottomColor: '#FFFF',
    borderTopColor: '#FFFF',
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
  wrapperthongtin: {
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
    width: Sizes.s60,
    height: Sizes.s60,
  },
  txttitle: {
    fontSize: Sizes.s40,
    marginTop: Sizes.s40,
  },
  img: {
    width: Sizes.s260,
    height: Sizes.s260,
    alignSelf: 'center',
  },
  txttitles: {
    fontSize: Sizes.s35,
    marginTop: Sizes.s40,
  },
});
