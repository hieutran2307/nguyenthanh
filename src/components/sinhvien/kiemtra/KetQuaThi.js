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
  Alert,
} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import {Sizes} from '@dungdang/react-native-basic';
import Header from '../../custom/Header';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {/* userProfile,*/ API_PUBLIC} from '../../../config/settings';
import UserAvatar from 'react-native-user-avatar';
import {Card} from 'react-native-elements';
export default class KetQuaThi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        makiemtra: this.props.navigation.getParam('makiemtra'),
        diemso: this.props.navigation.getParam('diemso'),
        thongtibaikiemtra:[]
    };
  }
  componentDidMount() {
    fetch(`${API_PUBLIC}/thi/thongtinde.php?makiemtra=${this.state.makiemtra}`)
      .then((response) => response.json())
      .then((responseJson) => {
        console.log('thong tin kiem tra', responseJson);
        this.setState({
          thongtibaikiemtra: responseJson,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }


  render() {
      console.log("ten bai kiemtra", this.state.tenbaikiemtra)
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Header title="Kết quả thi" />
        </View>
        <ScrollView style={{flex: 1, marginTop: Sizes.s20}}>
        {this.state.thongtibaikiemtra.map((item) => (
        <Card>
        <Text
          style={[
            styles.txttieude,
            {fontWeight: 'bold', color: '#54722c'},
          ]}>
          Thông tin môn thi
        </Text>
        <View style={{flexDirection: 'row', marginTop: Sizes.s20}}>
          <UserAvatar
            style={{width: Sizes.s140, height: Sizes.s140}}
            name={item.tenbaikiemtra}
            bgColors={['#3498db', '#34495e', '#e67e22']}
          />
          <View>
        <Text style={styles.title}>Môn kiểm tra :{item.tenbaikiemtra}</Text>
        <Text style={styles.title}>Thời gian: {item.thoigian} phút</Text>
          </View>
        </View>
      </Card>
          ))}

          <Card>
            <Text
              style={[
                styles.txttieude,
                {fontWeight: 'bold', color: '#54722c'},
              ]}>
              Kết quả thi
            </Text>
            <View style={{flexDirection: 'row', marginTop: Sizes.s20}}>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  flex: 1,
                }}>
                <Text style={styles.title}>{this.state.diemso} Điểm</Text>
              </View>
            </View>
          </Card>
        </ScrollView>
        <View style={{flex: 1 / 7}}>
          <TouchableOpacity style={styles.btn} onPress={() => this.props.navigation.navigate('HomeSinhVien')}>
            <Text style={styles.textbtn}>THOÁT</Text>
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
  txttieude: {
    fontSize: Sizes.s30,
  },
});
