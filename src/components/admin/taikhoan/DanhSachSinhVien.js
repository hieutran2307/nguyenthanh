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

export default class DanhSachSinhVien extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listkhoahoc: [],
      isOpen: false,
    };
  }
  componentDidMount() {
    fetch(`${API_PUBLIC}/kiemtra/danhsachmonhoc.php`)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          listkhoahoc: responseJson,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }
  togglePanel() {
    this.setState({
      isOpen: true,
    });
  }
  render() {
    console.log('data', this.state.listkhoahoc);
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Headers
            title="Danh sách môn học"
            onPressBackButton={() => {
              this.props.navigation.goBack('');
            }}
            onPressShowMenu={() => {
              this.props.navigation.navigate('ThemMonHoc');
            }}
          />
        </View>
        <View style={{flex: 1}}>
          <FlatList
            keyExtractor={(item) => item.idmonhoc}
            style={styles.container}
            data={this.state.listkhoahoc}
            refreshing={this.state.listkhoahoc}
            renderItem={({item, index}) => (
              <View style={styles.wrapper}>
                <View style={{flex: 1}}>
                  <View style={{marginRight: Sizes.s50}}>
                    <Text style={styles.title}>Môn học: {item.tenmonhoc}</Text>
                    <Text style={styles.title}>
                      Số tín chỉ: {item.sotinchi}
                    </Text>
                    <Text style={styles.title}>Số tiết: {item.sotiet}</Text>
                  </View>
                </View>


                
                <View>
                  <TouchableOpacity onPress={()=>this.props.navigation.navigate('CapNhatMonHoc',{
                      idmonhoc:item.idmonhoc,
                      tenmonhoc:item.tenmonhoc,
                      sotinchi:item.sotinchi,
                      sotiet:item.sotiet,
                    })}>
                   
                    <Image
                      source={require('../../../res/images/ic_private_edit.png')}
                      style={{
                        height: Sizes.s70,
                        width: Sizes.s70,
                        resizeMode: 'contain',
                      }}
                    />
                  </TouchableOpacity>
                </View>


                <View>
                <RBSheet
                  ref={(ref, item) => {
                    this.RBSheet = ref;
                  }}
                  height={Sizes.s340}
                  openDuration={Sizes.s260}
                  customStyles={{
                    container: {
                      marginTop: Sizes.s40,
                    },
                  }}>
                  <View
                    style={{
                      marginTop: Sizes.s40,
                      marginHorizontal: Sizes.s30,
                    }}>
                   
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('CapNhatMonHoc',{
                      //idmonhoc:item.idmonhoc,
                      tenmonhocs:item.tenmonhoc,
                      sotinchi:item.sotinchi,
                      sotiet:item.sotiet,
                    })}>
                    <View style={{flexDirection: 'row'}}>
                      <Image
                        source={require('../../../res/images/edits.png')}
                        style={{
                          height: Sizes.s70,
                          width: Sizes.s70,
                          resizeMode: 'contain',
                        }}
                      />
                      <Text
                        style={{
                          marginTop: Sizes.s10,
                          marginLeft: Sizes.s10,
                          fontSize: Sizes.s40,
                        }}>

                      </Text>
                    </View>
                    </TouchableOpacity>

                    <View style={{flexDirection: 'row', marginTop: Sizes.s40}}>
                      <Image
                        source={require('../../../res/images/infos.png')}
                        style={{
                          height: Sizes.s70,
                          width: Sizes.s70,
                          resizeMode: 'contain',
                        }}
                      />
                      <Text
                        style={{
                          marginTop: Sizes.s10,
                          marginLeft: Sizes.s10,
                          fontSize: Sizes.s40,
                        }}>
                        Thông tin khoá học
                      </Text>
                    </View>
                  </View>
                </RBSheet>
                  </View>
    
              </View>

           

            )}
          />
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
    flexDirection: 'row',
  },
  title: {
    fontSize: Sizes.s40,
    marginHorizontal: Sizes.s30,
    marginTop: Sizes.s10,
  },
});
