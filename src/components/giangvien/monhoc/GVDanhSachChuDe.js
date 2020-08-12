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
import UserAvatar from 'react-native-user-avatar';

export default class GVDanhSachChuDe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listkhoahoc: '',
      refreshing: false,
      idmonhoc: this.props.navigation.getParam('idmonhoc'),

    };
  }
  componentDidMount() {
    fetch(`${API_PUBLIC}/kiemtra/chude.php?idmonhoc=${this.state.idmonhoc}`)
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
    console.log('gv idmonhoc', this.state.idmonhoc,{
      idmonhoc:this.state.idmonhoc
    });
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Headers
            title="Danh sách chủ đề"
            onPressBackButton={() => {
              this.props.navigation.goBack('');
            }}
            onPressShowMenu={() => {
              this.props.navigation.navigate('TaoChuDe',{
                idmonhoc:this.state.idmonhoc
              });
            }}
          />
        </View>
        <View style={{flex: 1}}>
          <FlatList
            style={styles.container}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => item.idchude}
            data={this.state.listkhoahoc}
            refreshing={this.state.listkhoahoc}
            extraData={this.state.listkhoahoc}
            renderItem={({item, index}) => (
              <View style={styles.wrapper}>
                <View style={{flex: 1}}>
                  <View style={{marginRight: Sizes.s50, flexDirection: 'row'}}>
                    <UserAvatar
                      style={{width: Sizes.s140, height: Sizes.s140}}
                      name={item.tenchude}
                      bgColors={['#3498db', '#34495e', '#e67e22']}
                    />
                    <Text style={styles.title}>Môn học: {item.tenchude}</Text>
                  </View>
                </View>

                <View>
                  <TouchableOpacity
                    //onPress={() => this.RBSheet.open()}

                    onPress={() => this[RBSheet + index].open()}>
                    <Image
                      source={require('../../../res/images/ic_private_edit.png')}
                      style={{
                        height: Sizes.s70,
                        width: Sizes.s70,
                        resizeMode: 'contain',
                      }}
                    />
                  </TouchableOpacity>
                  {/* bottom sheet */}
                  <View>
                    <RBSheet
                      // ref={(ref, item) => {
                      //   this.RBSheet = ref;
                      // }}
                      ref={(ref) => {
                        this[RBSheet + index] = ref;
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
                        <TouchableOpacity
                          onPress={() =>
                            this.props.navigation.navigate('CapNhatMonHoc', {
                              idmonhoc: item.idmonhoc,
                              tenmonhoc: item.tenmonhoc,
                              sotinchi: item.sotinchi,
                              sotiet: item.sotiet,
                            })
                          }>
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
                              Chỉnh sửa thông tin
                            </Text>
                          </View>
                        </TouchableOpacity>

                        <TouchableOpacity
                          onPress={() =>
                            this.props.navigation.navigate('ThongTinMonHoc', {
                              idmonhoc: item.idmonhoc,
                              tenmonhoc: item.tenmonhoc,
                              sotinchi: item.sotinchi,
                              sotiet: item.sotiet,
                            })
                          }>
                          <View
                            style={{
                              flexDirection: 'row',
                              marginTop: Sizes.s40,
                            }}>
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
                              Thông tin môn học
                            </Text>
                          </View>
                        </TouchableOpacity>
                      </View>
                    </RBSheet>
                  </View>
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
});
