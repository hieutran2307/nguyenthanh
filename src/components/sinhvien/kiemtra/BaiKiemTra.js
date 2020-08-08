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
import Headers from '../../custom/Headers';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {/* userProfile,*/ API_PUBLIC} from '../../../config/settings';

export default class BaiKiemTra extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      idkiemtra: this.props.navigation.getParam('idkiemtra'),
      tenbaikiemtra: this.props.navigation.getParam('tenbaikiemtra'),
      baikiemtra:[]
    };
  }
  componentDidUpdate(){
   console.log('aa')
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Headers
            title="Bài Kiểm tra"
            onPressBackButton={() => {
              this.props.navigation.goBack('');
            }}
          />
        </View>
        <View style={{flex: 1}}>
          <View style={styles.wrapper}>
            <Text style={styles.title}>
              Môn kiểm tra :{this.state.tenbaikiemtra}{' '}
            </Text>
            <Text style={styles.title}>Thời gian: 90 Phút </Text>
          </View>
          <View style={{flex:1}}>
          {this.state.baikiemtra === '' ? (
            <View
              style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
              <Image
                source={require('../../../res/images/error.png')}
                style={styles.img}
              />
              <Text style={styles.textthongbao}>
                Vui lòng chờ giảng viên xác nhận làm bài
              </Text>
              
            </View>
          ) : (
            <FlatList
              keyExtractor={(item) => item.idchude}
              style={styles.container}
              data={this.state.danhsachcauhoi}
              refreshing={this.state.danhsachcauhoi}
              renderItem={({item}) => (
                <View style={styles.wrapper}>
                  <Text style={styles.title}>Câu hỏi: {item.tencauhoi}</Text>
                  <Text style={styles.title}>Đáp án a: {item.a}</Text>
                  <Text style={styles.title}>Đáp án b: {item.b}</Text>
                  <Text style={styles.title}>Đáp án c: {item.c}</Text>
                  <Text style={styles.title}>Đáp án d: {item.d}</Text>
                  <Text style={styles.title}>Kết quả: {item.dapan}</Text>
                </View>
              )}
            />
          )}
              </View>
              <View style={{flex: 1/7,}}>
                  <TouchableOpacity>
                      <View style={{ height: Sizes.s70, marginHorizontal: Sizes.s40, backgroundColor: '#f06c5b', justifyContent:'center',alignItems:'center'}}>
                         <Text style={{fontSize:Sizes.s40, color:'#FFFF'}}>NỘP BÀI</Text>
                         </View>
                  </TouchableOpacity>
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
  img: {
    width: Sizes.s340 + Sizes.s200,
    height: Sizes.s340 + Sizes.s200,
  },
});
