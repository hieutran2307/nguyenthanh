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
} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import {Sizes} from '@dungdang/react-native-basic';
import Headers from '../../custom/Headers';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {/* userProfile,*/ API_PUBLIC} from '../../../config/settings';
import MultiSelect from 'react-native-multiple-select';
export default class ThemLopHocPhan extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      idlophocphan: this.props.navigation.getParam('id'),
      tenlophocphan: '',
      idgiaovien: '',
      idmonhoc:'',
      danhsachgiangvien: [],
      danhsachmonhoc:[]
     
    };
  }
  onSelectedItemsChange = (selectedItems) => {
    this.setState({
      selectedItems,
      idgiaovien: selectedItems[0],
    });
    //Set Selected Items
  };

  onSelectedItemsMonHocChange = (selectedItemsMonHoc) => {
    this.setState({
      selectedItemsMonHoc,
      idmonhoc: selectedItemsMonHoc[0],
    });
    //Set Selected Items
  };

  tenlophocphanChange = (value) => {
    this.setState({
      tenlophocphan: value,
    });
  };

  componentDidMount() {
    fetch(`${API_PUBLIC}/kiemtra/danhsachgiangvien.php`)
      .then((response) => response.json())
      .then((responseJson) => {
        console.log('danh sach giang vien', responseJson);
        this.setState({
          danhsachgiangvien: responseJson,
        });
      })
      .catch((error) => {
        console.error(error);
      });
      fetch(`${API_PUBLIC}/kiemtra/danhsachmonhochp.php`)
      .then((response) => response.json())
      .then((res) => {
        console.log('danh sach mon hoc theo hoc phan', res);
        this.setState({
          danhsachmonhoc: res,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  // gui du lieu len server
  async taomonhoc() {
    fetch(`${API_PUBLIC}/kiemtra/themlophocphan.php`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        tenhocphan: this.state.tenlophocphan,
        idthanhvien: this.state.idgiaovien,
        idmonhoc:this.state.idmonhoc,
        idlop:this.state.idlophocphan
      }),
    })
      .then((response) => response.json())
      .then((responseData) => {
        console.log('data tao lop hoc', responseData);
        if (responseData.statusCode === '200') {
          this.props.navigation.navigate('DanhSachLopHocPhan');
        }
      });
  }
  render() {
    const {selectedItems,selectedItemsMonHoc} = this.state;
    console.log("id mon hoc", this.state.idmonhoc)
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Headers
            title="Tạo lớp học phần"
            onPressBackButton={() => {
              this.props.navigation.goBack('');
            }}
          />
        </View>
        <View style={{flex: 1, marginTop: Sizes.s100}}>
          <Image
            style={styles.img}
            source={require('../../../res/images/lophoc.png')}
          />

<View style={{marginTop: Sizes.s20}}>
            <View style={styles.labelContainer}>
              <Text caption medium style={styles.label}>
                Lớp học phần
              </Text>
            </View>
            <TextInput
              style={styles.input}
              value={this.state.tenlophocphan}
              onChangeText={(text) => this.tenlophocphanChange(text)}
            />
          </View>


          <View style={{marginTop: Sizes.s20}}>
            <View style={styles.labelContainer}>
              <Text caption medium style={styles.label}>
                Tên giảng viên
              </Text>
            </View>

            <MultiSelect
              items={this.state.danhsachgiangvien}
              uniqueKey="id"
              ref={(component) => {
                this.multiSelect = component;
              }}
              onSelectedItemsChange={this.onSelectedItemsChange}
              selectedItems={selectedItems}
              selectText={this.state.name}
              searchInputPlaceholderText="Search Items..."
              onChangeInput={(text) => console.log('aaaaaa')}
              tagRemoveIconColor="#CCC"
              tagBorderColor="#CCC"
              tagTextColor="#CCC"
              selectedItemTextColor="#CCC"
              selectedItemIconColor="#CCC"
              itemTextColor="#000"
              displayKey="name"
              searchInputStyle={{color: '#CCC'}}
              submitButtonColor="#48d22b"
              submitButtonText="Chọn"
              fontSize={Sizes.s35}
              itemFontSize={Sizes.s40}
              styleDropdownMenu={Sizes.s40}
            />
          </View>







          <View style={{marginTop: Sizes.s20}}>
            <View style={styles.labelContainer}>
              <Text caption medium style={styles.label}>
                Môn học
              </Text>
            </View>

            <MultiSelect
              items={this.state.danhsachmonhoc}
              uniqueKey="id"
              ref={(component) => {
                this.multiSelect = component;
              }}
              onSelectedItemsChange={this.onSelectedItemsMonHocChange}
              selectedItems={selectedItemsMonHoc}
              selectText={this.state.name}
              searchInputPlaceholderText="Search Items..."
              onChangeInput={(text) => console.log('aaaaaa')}
              tagRemoveIconColor="#CCC"
              tagBorderColor="#CCC"
              tagTextColor="#CCC"
              selectedItemTextColor="#CCC"
              selectedItemIconColor="#CCC"
              itemTextColor="#000"
              displayKey="name"
              searchInputStyle={{color: '#CCC'}}
              submitButtonColor="#48d22b"
              submitButtonText="Chọn"
              fontSize={Sizes.s35}
              itemFontSize={Sizes.s40}
              styleDropdownMenu={Sizes.s40}
            />
          </View>



          <TouchableOpacity style={styles.btn} onPress={() => this.taomonhoc()}>
            <Text style={styles.textbtn}>Tạo mới</Text>
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
});
