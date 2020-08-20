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
  RefreshControl,
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

export default class DanhSachGiangVien extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      danhsachgiangvien: [],
      data: [],
      isOpen: false,
    };
    this.arrayholder = [];
     this.GetData();
  }
  GetData = () => {
    //Service to get the data from the server to render
    return fetch(`${API_PUBLIC}/kiemtra/danhsachgiangvien.php`)
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

  searchFilterFunction = (text) => {
    this.setState({
      value: text,
    });

    const newData = this.arrayholder.filter((item) => {
      const itemData = `${item.name.toUpperCase()}`;
      const textData = text.toUpperCase();

      return itemData.indexOf(textData) > -1;
    });
    this.setState({
      data: newData,
    });
  };
  render() {
    if (this.state.refreshing) {
      return (
        <View style={{flex: 1, paddingTop: 20}}>
          <ActivityIndicator />
        </View>
      );
    }
    console.log('data', this.state.listkhoahoc);
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Headers
            title="Danh sách giảng viên"
            onPressBackButton={() => {
              this.props.navigation.goBack('');
            }}

            onPressShowMenu={() => {
              this.props.navigation.navigate('ThemGiangVien');
            }}
          />
        </View>
        <View style={{flex: 1}}>
          <SearchBar
            containerStyle={styles.search}
            placeholder="Nhập tên sinh viên...."
            lightTheme
            round
            onChangeText={(text) => this.searchFilterFunction(text)}
            autoCorrect={false}
            value={this.state.value}
          />
          <FlatList
            style={styles.container}
            showsVerticalScrollIndicator={false}
            data={this.state.dataSource}
            ItemSeparatorComponent={this.ListViewItemSeparator}
            enableEmptySections={true}
            keyExtractor={(item) => item.id}
            renderItem={({item, index}) => (
              <View style={styles.wrapper}>
                <View style={{flex: 1}}>
                  <View style={{marginRight: Sizes.s50, flexDirection: 'row'}}>
                    <UserAvatar
                      size={Sizes.s100}
                      name={item.name}
                      bgColors={['#3498db', '#34495e', '#e67e22']}
                    />
                    <Text style={styles.title}>{item.name}</Text>
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
                          onPress={() =>
                            this.props.navigation.navigate('TABThongTinGV', {
                              idgv:item.id,
                              ngaysinh:item.ngaysinh,
                              diachi:item.diachi,
                              sodienthoai:item.sodienthoai,
                              email:item.email,
                              tengv:item.name,
                              maso:item.maso
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
                              Thông tin giảng viên
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
                //refresh control used for the Pull to Refresh
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
});
