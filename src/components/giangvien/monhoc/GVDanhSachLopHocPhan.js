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
import {userProfile} from '../../../config/settings';

export default class GVDanhSachLopHocPhan extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      idmonhoc: this.props.navigation.getParam('idmonhoc'),
      danhsachhocphan: '',
    };
  }
  componentDidMount() {
    fetch(
      `${API_PUBLIC}/kiemtra/danhsachlophocphangv.php?idmonhoc=${this.state.idmonhoc}&idthanhvien=${userProfile.data.idthanhvien}`,
    )
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          danhsachhocphan: responseJson,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }
  render() {
    console.log('daaaaa', this.state.danhsachhocphan);
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Headers
            title="Danh sách lớp học phần"
            onPressBackButton={() => {
              this.props.navigation.goBack('');
            }}
          />
        </View>
        <View style={{flex: 1}}>
     
        {this.state.danhsachhocphan === '' ? (
            <View style={{alignItems: 'center',justifyContent: 'center', flex:1}}>
            <Image
              source={require('../../../res/images/error.png')}
              style={styles.img}
            />
            <Text style={styles.textthongbao}>
              Hiện tại giảng viên chưa đươc phân công lớp học phần, nếu đây là sự sai sót xin vui lòng liên hệ quản trị viên
            </Text>
          </View>
        ):
         <FlatList
         keyExtractor={(item) => item.idlophocphan}
         style={styles.container}
         data={this.state.danhsachhocphan}
         refreshing={this.state.danhsachhocphan}
         renderItem={({item}) => (
           <TouchableOpacity
             onPress={() =>
               this.props.navigation.navigate('GVDanhSachChuDe', {
                idlophocphan:item.idlophocphan
               })
             }>
             <View style={styles.wrapper}>
               <Text style={styles.title}>
                 Tên lớp: {item.tenlop}
               </Text>
               <Text style={styles.title}>Tên học phần: {item.tenhocphan}</Text>
               <Text style={styles.title}>Môn học: {item.tenmonhoc}</Text>
             </View>
           </TouchableOpacity>
         )}
       />
     }
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
  img: {
    width: Sizes.s340 +Sizes.s200,
    height: Sizes.s340 +Sizes.s200,
  },
  textthongbao:{
      fontSize:Sizes.s40
  }
});
