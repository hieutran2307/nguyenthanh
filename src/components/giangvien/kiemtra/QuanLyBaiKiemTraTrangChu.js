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
import { Card } from 'react-native-elements'

export default class QuanLyBaiKiemTraTrangChu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0,
      danhsachkiemtra: [],
    };
  }
  componentDidMount() {
    fetch(`${API_PUBLIC}/kiemtra/tranthaibaikiemtra.php?idtrangthaikiemtra=3`)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          danhsachkiemtra: responseJson,
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
          />

        </View>
        <View style={{flex:1}}>
          <View style={styles.thongtindiem}>
            <Card wrapperStyle={{width:Sizes.s300, height:Sizes.s160}}>
            <View style={{flexDirection:'row'}}>
            <Image
                      source={require('../../../res/images/saos.png')}
                      style={{
                        height: Sizes.s70,
                        width: Sizes.s70,
                        resizeMode: 'contain',
                      }}
                    />
                    <Text>ĐIỂM TRUNG BÌNH</Text>
              </View>
              <Text style={{
                marginTop:Sizes.s10,
                alignSelf:'center',
                fontSize:Sizes.s50,
                color:'#4596dd',
                fontWeight:'bold'
              }}>0</Text>
              </Card>
              <Card wrapperStyle={{width:Sizes.s300, height:Sizes.s160}}>
              <View style={{flexDirection:'row'}}>
            <Image
                      source={require('../../../res/images/userss.png')}
                      style={{
                        height: Sizes.s70,
                        width: Sizes.s70,
                        resizeMode: 'contain',
                      }}
                    />
                    <Text>SINH VIÊN ĐÃ LÀM</Text>
              </View>
              <Text style={{
                marginTop:Sizes.s10,
                alignSelf:'center',
                fontSize:Sizes.s50,
                color:'#4596dd',
                fontWeight:'bold'
              }}>0</Text>
                </Card>
            </View>
            <View style={styles.thongkediem}>
              <View style={{flexDirection:'row',marginTop:Sizes.s40,}}>
                <View style={{width:Sizes.s100, height:Sizes.s40, borderRadius:100, backgroundColor:'#62aced'}}/>
        
                
                  <Text style={{fontSize:Sizes.s30, marginLeft:Sizes.s20}}>Lớn hơn 9</Text>
                </View>
                <View style={{flexDirection:'row',marginTop:Sizes.s40,}}>
                <View style={{width:Sizes.s100, height:Sizes.s40, borderRadius:100, backgroundColor:'#70cf97'}}/>
        
                
                  <Text style={{fontSize:Sizes.s30, marginLeft:Sizes.s40}}>Từ 8 - 9</Text>
                </View>
                <View style={{flexDirection:'row',marginTop:Sizes.s40,}}>
                <View style={{width:Sizes.s100, height:Sizes.s40, borderRadius:100, backgroundColor:'#fede1e'}}/>
        
                
                  <Text style={{fontSize:Sizes.s30, marginLeft:Sizes.s20}}>Từ 6.5 - 8</Text>
                </View>
                <View style={{flexDirection:'row',marginTop:Sizes.s40,}}>
                <View style={{width:Sizes.s100, height:Sizes.s40, borderRadius:100, backgroundColor:'#ef535d'}}/>
        
                
                  <Text style={{fontSize:Sizes.s30, marginLeft:Sizes.s2}}>Nhỏ hơn 6.5</Text>
                </View>
                <View style={{flexDirection:'row',marginTop:Sizes.s40,}}>
                <View style={{width:Sizes.s100, height:Sizes.s40, borderRadius:100, backgroundColor:'#e6e6e6'}}/>
        
                
                  <Text style={{fontSize:Sizes.s30, marginLeft:Sizes.s20}}>Chưa làm</Text>
                </View>
              </View>
            <View style={styles.thongtinsinhvientot}>
              <Text style={styles.txtthongtinsinhvientot}>
                SINH VIÊN ĐIỂM TỐT
                </Text>
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
  thongtindiem:{
    flexDirection:'row',
    justifyContent:'space-around'
  },
  thongtinsinhvientot:{
    flex: 1,
    marginTop:Sizes.s30,
    marginHorizontal:Sizes.s20
  },
  txtthongtinsinhvientot:{
    fontSize:Sizes.s30,
    fontWeight:'bold',
    color:'#4596dd',
  },
  thongkediem:{
    flex:1,
    backgroundColor:'red',
    marginTop:Sizes.s100,
    alignItems:'flex-end',
    marginRight:Sizes.s200
  }
});
