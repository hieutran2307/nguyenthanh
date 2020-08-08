import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Image,
  FlatList,
  Picker,
} from 'react-native';
import {Headers, CustomControlTab} from '../../custom';
import {Sizes} from '@dungdang/react-native-basic';

class TuyChonLop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lop: '',
      soLuong: '',
      lopHP: '',
      groupGV: 0,
      groupMH: 0,
      groupLop: 0,
      search: '',
      selectedIndex: 0,
      modalMenu: false,
      modalSearch: false,
      modalInsert: false,
    };
  }


  itemList = (title, content) => {
    return (
      <View style={{flexDirection: 'row'}}>
        <Text style={[styles.textTab, {color: '#330066', fontWeight: 'bold'}]}>
          {title}
        </Text>
        <Text style={styles.textTab}>{content}</Text>
      </View>
    );
  };

  hien_thi_danh_sach() {
    return (
      <FlatList
        data={this.state.selectedIndex === 0 ? lop : lopHocPhan}
        renderItem={({item, index}) => {
          return (
            <View style={styles.viewTab}>
              {this.state.selectedIndex === 0 ? (
                <TouchableOpacity
                  style={{width: '90%'}}
                  onPress={() => {
                    if (this.state.selectedIndex === 0) {
                      this.props.navigation.navigate('DanhSachLop');
                    } else if (this.state.selectedIndex === 1) {
                      this.props.navigation.navigate('DanhSachLHP');
                    }
                  }}>
                  {this.itemList('Tên lớp:', item.className)}
                  {this.itemList('Số lượng:', item.soluong)}
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  style={{width: '90%'}}
                  onPress={() => {
                    this.props.navigation.navigate('DanhSachLHP');
                  }}>
                  {this.itemList('Lớp:', item.lop)}
                  {this.itemList('Lớp học phần:', item.ten_lop_hoc_phan)}
                  {this.itemList('Giáo viên:', item.ten_giao_vien)}
                  {this.itemList('Môn học:', item.ten_mon_hoc)}
                </TouchableOpacity>
              )}
              
            </View>
          );
        }}
      />
    );
  }

  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={{flex: 1, width: '100%'}}>
          
          <CustomControlTab
            titleLeft={'Lớp học'}
            titleRight={'Lớp học phần'}
            backgroundColorLeft={
              this.state.selectedIndex === 0 ? '#FFF' : '#E1E1E1'
            }
            backgroundColorRight={
              this.state.selectedIndex === 1 ? '#FFF' : '#E1E1E1'
            }
            colorLeft={this.state.selectedIndex === 0 ? '#3333FF' : '#717171'}
            colorRight={this.state.selectedIndex === 1 ? '#3333FF' : '#717171'}
            onPressLeft={(value) => {
              this.setState({
                selectedIndex: value,
                modalInsert: false,
              });
            }}
            onPressRight={(value) => {
              this.setState({
                selectedIndex: value,
                modalInsert: false,
              });
            }}
          />
          <View style={{flex: 1}}>
            <View style={styles.title}>
              <Text
                style={{
                  fontSize: Sizes.h34,
                  fontWeight: 'bold',
                  padding: Sizes.s20,
                  color: '#FFF',
                  width: '63%',
                }}>
                {this.state.selectedIndex === 0
                  ? 'Danh sách lớp học'
                  : 'Danh sách lớp học phần'}
              </Text>
              {/* {userProfile.user !== "admin" ? ( */}
      
              {/* ) : (
                <View />
              )} */}
            </View>
            {this.state.modalInsert === true ? (
              this.state.selectedIndex === 0 ? (
                this.them_lop()
              ) : (
                this.them_lop_hoc_phan()
              )
            ) : (
              <View />
            )}
            {this.hien_thi_danh_sach()}
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  viewTab: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    marginHorizontal: Sizes.s10,
    marginBottom: Sizes.s15,
    borderRadius: Sizes.s10,
    shadowColor: 'rgba(0, 0, 0, 0.5 )',
    shadowOffset: {width: 0, height: 4},
    shadowRadius: 5,
    shadowOpacity: 0.2,
    elevation: 10,
  },
  textTab: {
    fontSize: Sizes.h34,
    paddingHorizontal: Sizes.s20,
    paddingVertical: Sizes.s5,
    textAlign: 'center',
  },
  title: {
    width: '100%',
    flexDirection: 'row',
    backgroundColor: '#0066CC',
    marginBottom: Sizes.s10,
    alignItems: 'center',
  },
});

export default TuyChonLop;
