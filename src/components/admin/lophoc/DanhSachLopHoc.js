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
  RefreshControl,
} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import {Sizes} from '@dungdang/react-native-basic';
import Headers from '../../custom/Headers';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {/* userProfile,*/ API_PUBLIC} from '../../../config/settings';
import UserAvatar from 'react-native-user-avatar';
import RBSheet from 'react-native-raw-bottom-sheet';

export default class DanhSachLopHoc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      danhsachlophoc: [],
      refreshing: false,
    };
    this.GetData();
  }
  componentDidUpdate(prevState) {
    if (prevState.danhsachlophoc !== this.state.danhsachlophoc) {
      this.GetData();
    }
  }
  GetData = () => {
    //Service to get the data from the server to render
    return fetch(`${API_PUBLIC}/kiemtra/danhsachlop.php`)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          refreshing: false,
          dataSource: responseJson,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };
  ListViewItemSeparator = () => {
    return (
      //returning the listview item saparator view
      <View
        style={{
          height: 0.2,
          width: '90%',
          backgroundColor: '#808080',
        }}
      />
    );
  };
  onRefresh() {
    this.setState({dataSource: []});
    this.GetData();
  }
  render() {
    if (this.state.refreshing) {
      return (
        <View style={{flex: 1, paddingTop: 20}}>
          <ActivityIndicator />
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Headers
            title="Danh sách lớp học"
            onPressBackButton={() => {
              this.props.navigation.goBack('');
            }}
            onPressShowMenu={() => {
              this.props.navigation.navigate('ThemLopHoc');
            }}
          />
        </View>
        <View style={{flex: 1}}>
          <FlatList
            style={styles.container}
            data={this.state.dataSource}
            ItemSeparatorComponent={this.ListViewItemSeparator}
            enableEmptySections={true}
            renderItem={({item, index}) => (
              <View style={styles.wrapper}>
                <View style={{flex: 1}}>
                  <View style={{marginRight: Sizes.s50, flexDirection: 'row'}}>
                    <UserAvatar
                      style={{width: Sizes.s140, height: Sizes.s140}}
                      name={item.tenmonhoc}
                      bgColors={['#3498db', '#34495e', '#e67e22']}
                    />
                    <View>
                      <Text style={[styles.title, {fontSize: Sizes.h40}]}>
                        Lớp học:
                      </Text>
                      <Text
                        style={[
                          styles.title,
                          {
                            fontSize: Sizes.h36,
                            fontWeight: 'bold',
                            color: '#335272',
                          },
                        ]}>
                        {item.tenlop}
                      </Text>
                    </View>
                  </View>
                </View>

                <View>
                  <TouchableOpacity
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
                          onPress={() => {
                            this.props.navigation.navigate('CapNhatLop', {
                              idlop: item.idlop,
                              tenlop: item.tenlop,
                              soluongsinhvien: item.soluongsinhvien,
                            })
                            this[RBSheet + index].close()
                          }}>
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
                              Cập nhật thông tin
                            </Text>
                          </View>
                        </TouchableOpacity>

                        <TouchableOpacity
                          onPress={() => {
                            this.props.navigation.navigate('TABLopHoc', {
                              idlop: item.idlop,
                              tenlop: item.tenlop,
                              soluongsinhvien: item.soluongsinhvien,
                            })
                            this[RBSheet + index].close()
                          }}>
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
                              Thông tin lớp học
                            </Text>
                          </View>
                        </TouchableOpacity>
                      </View>
                    </RBSheet>
                  </View>
                </View>
              </View>
            )}
            refreshControl={
              <RefreshControl
                refreshing={this.state.refreshing}
                onRefresh={this.onRefresh.bind(this)}
              />
            }
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
