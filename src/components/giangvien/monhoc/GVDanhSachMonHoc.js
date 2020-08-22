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
  RefreshControl
} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import {Sizes} from '@dungdang/react-native-basic';
import Headers from '../../custom/Headers';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {/* userProfile,*/ API_PUBLIC} from '../../../config/settings';
import {userProfile} from '../../../config/settings';
import UserAvatar from 'react-native-user-avatar';
import RBSheet from 'react-native-raw-bottom-sheet';

export default class GVDanhSachMonHoc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listmonhoc: '',
      refreshing: false,
    };
    this.GetData();
  }
  componentDidUpdate(prevState) {
    if (prevState.listmonhoc !== this.state.listmonhoc) {
      this.GetData();
    }
  }
  GetData = () => {
    //Service to get the data from the server to render
    return fetch(`${API_PUBLIC}/kiemtra/danhsachmonhocgv.php?idthanhvien=${userProfile.data.idthanhvien}`)
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
  togglePanel() {
    this.setState({
      isOpen: true,
    });
  }

  render() {
    if (this.state.refreshing) {
      return (
        <View style={{flex: 1, paddingTop: 20}}>
          <ActivityIndicator />
        </View>
      );
    }
    console.log('data', this.state.listmonhoc);
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Headers
            title="Danh sách môn học"
            onPressBackButton={() => {
              this.props.navigation.goBack('');
            }}
          />
        </View>
        <View style={{flex: 1}}>
          {this.state.dataSource === '' ? (
            <View
              style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
              <Image
                source={require('../../../res/images/errors.png')}
                style={{
                  height: Sizes.s340 + Sizes.s340,
                  width: Sizes.s340 + Sizes.s340,
                  resizeMode: 'contain',
                }}
              />
              <Text style={{fontSize: Sizes.s40}}>
                Hiện tại giảng viên chưa được phân công lớp giảng dạy. Xin vui
                lòng liên hệ quản trị viên để biết thêm thông tin
              </Text>
            </View>
          ) : (
            <FlatList
              style={styles.container}
              showsVerticalScrollIndicator={false}
              keyExtractor={(item) => item.idmonhoc}
              data={this.state.dataSource}
              ItemSeparatorComponent={this.ListViewItemSeparator}
              enableEmptySections={true}
              renderItem={({item, index}) => (
                <View style={styles.wrapper}>
                  <View style={{flex: 1}}>
                    <View
                      style={{marginRight: Sizes.s50, flexDirection: 'row'}}>
                      <UserAvatar
                        style={{width: Sizes.s140, height: Sizes.s140}}
                        name={item.tenmonhoc}
                        bgColors={['#3498db', '#34495e', '#e67e22']}
                      />
                      <Text style={styles.title}>
                        Môn học: {item.tenmonhoc}
                      </Text>
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
                            onPress={() => {
                              this.props.navigation.navigate(
                                'GVThongTinMonHoc',
                                {
                                  idmonhoc: item.idmonhoc,
                                  tenmonhoc: item.tenmonhoc,
                                  sotinchi: item.sotinchi,
                                  sotiet: item.sotiet,
                                },
                              )
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
              refreshControl={
                <RefreshControl
                  refreshing={this.state.refreshing}
                  onRefresh={this.onRefresh.bind(this)}
                />
              }
            />
          )}
        
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
