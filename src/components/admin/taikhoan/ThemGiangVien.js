import React from 'react';
import {
  Button,
  Image,
  View,
  Text,
  ScrollView,
  StyleSheet,
  Dimensions,
  TextInput,
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
import {ProgressSteps, ProgressStep} from 'react-native-progress-steps';

export default class ThemGiangVien extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hovaten: '',
      ngaysinh: '',
      diachi: '',
      sodienthoai: '',
      email: '',
      maso: '',
      matkhau: '123123',
      idnhom: 2,
      hinhanh: '',
      idlop: '6',
      idlophocphan: '',
      data: [],
      checked: [],
      arrayDetail: [],
    };
    this.arrayholder = [];
  }
  //id  lop
  checkItem = (item) => {
    const {checked} = this.state;

    if (!checked.includes(item)) {
      this.setState({
        checked: [...checked, item],
        arrayDetail: [
          {
            ...checked,
            idlop: item,
          },
        ],
      });
    } else {
      this.setState({checked: checked.filter((a) => a !== item)});
    }
  };

  getDataLop = () => {
    const url = `${API_PUBLIC}/kiemtra/danhsachlop.php`;
    this.setState({loading: true});

    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        console.log('dddd', res);
        this.setState({
          data: res,
          error: res.error || null,
          loading: false,
        });
        this.arrayholder = res;
      })
      .catch((error) => {
        this.setState({error, loading: false});
      });
  };

  hovatenChange = (value) => {
    this.setState({
      hovaten: value,
    });
  };
  ngaysinhChange = (value) => {
    this.setState({
      ngaysinh: value,
    });
  };
  diachiChange = (value) => {
    this.setState({
      diachi: value,
    });
  };
  sodienthoaiChange = (value) => {
    this.setState({
      sodienthoai: value,
    });
  };
  emailChange = (value) => {
    this.setState({
      email: value,
    });
  };
  masoChange = (value) => {
    this.setState({
      maso: value,
    });
  };
  matkhauChange = (value) => {
    this.setState({
      matkhau: value,
    });
  };
  componentDidMount() {
    const max = 9000000;
    const maso = Math.floor(Math.random() * max) + 1;
    this.setState({maso: this.state.maso + maso});
    this.getDataLop();
  }
  // gui du lieu len server
  async onSubmitSteps() {
    fetch(`${API_PUBLIC}/thanhvien/dangky.php`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        hovaten: this.state.hovaten,
        ngaysinh: this.state.ngaysinh,
        diachi: this.state.diachi,
        sodienthoai: this.state.sodienthoai,
        email: this.state.email,
        maso: this.state.maso,
        matkhau: this.state.matkhau,
        idnhom: 2,
        hinhanh: '',
        idlop: 6,
        idlophocphan: 2,
      }),
    })
      .then((response) => response.json())
      .then((responseData) => {
        console.log('data tra ve', responseData);
        if (responseData.statusCode === '200') {
          this.props.navigation.navigate('DanhSachGiangVien');
        }
      });
  }
  render() {
    console.log('get id lop nha', this.state.idlop);
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Headers
            title="Thêm giảng viên"
            onPressBackButton={() => {
              this.props.navigation.goBack('');
            }}
          />
        </View>
        <View style={{flex: 1, marginHorizontal: Sizes.s30}}>
          <ProgressSteps>
            <ProgressStep
              label="Thông tin cá nhận"
              scrollViewProps={this.defaultScrollViewProps}>
              <View>
                <View style={{marginTop: Sizes.s20}}>
                  <View style={styles.labelContainer}>
                    <Text caption medium style={styles.label}>
                      Họ và tên
                    </Text>
                  </View>
                  <TextInput
                    style={styles.input}
                    value={this.state.hovaten}
                    onChangeText={(text) => this.hovatenChange(text)}
                  />
                </View>
                <View style={{marginTop: Sizes.s20}}>
                  <View style={styles.labelContainer}>
                    <Text caption medium style={styles.label}>
                      Ngày sinh
                    </Text>
                  </View>
                  <TextInput
                    style={styles.input}
                    value={this.state.ngaysinh}
                    onChangeText={(text) => this.ngaysinhChange(text)}
                  />
                </View>
                <View style={{marginTop: Sizes.s20}}>
                  <View style={styles.labelContainer}>
                    <Text caption medium style={styles.label}>
                      Địa chỉ
                    </Text>
                  </View>
                  <TextInput
                    style={styles.input}
                    value={this.state.diachi}
                    onChangeText={(text) => this.diachiChange(text)}
                  />
                </View>

                <View style={{marginTop: Sizes.s20}}>
                  <View style={styles.labelContainer}>
                    <Text caption medium style={styles.label}>
                      Số điện thoại
                    </Text>
                  </View>
                  <TextInput
                    style={styles.input}
                    value={this.state.sodienthoai}
                    onChangeText={(text) => this.sodienthoaiChange(text)}
                  />
                </View>
              </View>
            </ProgressStep>
            <ProgressStep
              label="Tài khoản"
              scrollViewProps={this.defaultScrollViewProps}>
              <View style={{marginTop: Sizes.s20}}>
                <View style={styles.labelContainer}>
                  <Text caption medium style={styles.label}>
                    Địa chỉ E-Mail
                  </Text>
                </View>
                <TextInput
                  style={styles.input}
                  value={this.state.email}
                  onChangeText={(text) => this.emailChange(text)}
                />
              </View>
              <View style={{marginTop: Sizes.s20}}>
                <View style={styles.labelContainer}>
                  <Text caption medium style={styles.label}>
                    Mã số giảng viên
                  </Text>
                </View>
                <TextInput
                  style={styles.input}
                  value={this.state.maso}
                  onChangeText={(text) => this.masoChange(text)}
                />
              </View>

              <View style={{marginTop: Sizes.s20}}>
                <View style={styles.labelContainer}>
                  <Text caption medium style={styles.label}>
                    Mật khẩu truy cập
                  </Text>
                </View>
                <TextInput
                  style={styles.input}
                  value={this.state.matkhau}
                  onChangeText={(text) => this.matkhauChange(text)}
                />
              </View>
              <View></View>
            </ProgressStep>

            <ProgressStep
              label="Lớp học"
              scrollViewProps={this.defaultScrollViewProps}>
              <FlatList
                style={styles.container}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item) => item.idlop}
                data={this.state.data}
                refreshing={this.state.data}
                renderItem={({item, index}) => (
                  <View style={styles.wrapper}>
                    <View style={{flex: 1}}>
                      <View
                        style={{marginRight: Sizes.s50, flexDirection: 'row'}}>
                        <UserAvatar
                          size={Sizes.s100}
                          name={item.tenlop}
                          bgColors={['#3498db', '#34495e', '#e67e22']}
                        />
                        <Text style={styles.title}>{item.tenlop}</Text>
                      </View>
                    </View>
                    <View>
                      <CheckBox
                        onPress={() =>
                          this.checkItem(item.idlop, (idlop = item.idlop))
                        }
                        checked={this.state.checked.includes(
                          item.idlop,
                          (idlop = item.idlop),
                        )}
                      />
                    </View>
                  </View>
                )}
              />
            </ProgressStep>

            <ProgressStep
              label="Xác nhận"
              onPrevious={this.onPrevStep}
              onSubmit={() => this.onSubmitSteps()}
              scrollViewProps={this.defaultScrollViewProps}>
              <View>
                <View style={{alignItems: 'center'}}>
                  <UserAvatar
                    style={styles.img}
                    name={this.state.hovaten}
                    bgColors={['#3498db', '#34495e', '#e67e22']}
                  />
                  <Text
                    style={{
                      fontSize: Sizes.s30,
                      marginTop: Sizes.s20,
                    }}>
                    {' '}
                    {this.state.hovaten}
                  </Text>
                </View>
                <View style={styles.wrapperthongtin}>
                  <View style={{flexDirection: 'row', flex: 1}}>
                    <Image
                      style={styles.icon}
                      source={require('../../../res/images/macode.jpg')}
                    />
                    <Text style={styles.txttitle}>{this.state.maso}</Text>
                  </View>
                </View>
              </View>

              <View style={styles.wrapperthongtin}>
                <View style={{flexDirection: 'row', flex: 1}}>
                  <Image
                    style={styles.icon}
                    source={require('../../../res/images/student.png')}
                  />
                  <Text style={styles.txttitle}>Họ và tên</Text>
                </View>

                <View style={{alignItems: 'flex-end', marginRight: Sizes.s40}}>
                  <Text style={styles.txttitles}>{this.state.hovaten}</Text>
                </View>
              </View>

              <View style={styles.wrapperthongtin}>
                <View style={{flexDirection: 'row', flex: 1}}>
                  <Image
                    style={styles.icon}
                    source={require('../../../res/images/date.png')}
                  />
                  <Text style={styles.txttitle}>Ngày sinh</Text>
                </View>

                <View style={{alignItems: 'flex-end', marginRight: Sizes.s40}}>
                  <Text style={styles.txttitles}>{this.state.ngaysinh}</Text>
                </View>
              </View>

              <View style={styles.wrapperthongtin}>
                <View style={{flexDirection: 'row', flex: 1}}>
                  <Image
                    style={styles.icon}
                    source={require('../../../res/images/geo.png')}
                  />
                  <Text style={styles.txttitle}>Địa chỉ</Text>
                </View>

                <View style={{alignItems: 'flex-end', marginRight: Sizes.s40}}>
                  <Text style={styles.txttitles}>{this.state.diachi}</Text>
                </View>
              </View>
              <View style={styles.wrapperthongtin}>
                <View style={{flexDirection: 'row', flex: 1}}>
                  <Image
                    style={styles.icon}
                    source={require('../../../res/images/phone.png')}
                  />
                  <Text style={styles.txttitle}>Điện thoại</Text>
                </View>

                <View style={{alignItems: 'flex-end', marginRight: Sizes.s40}}>
                  <Text style={styles.txttitles}>{this.state.sodienthoai}</Text>
                </View>
              </View>

              <View style={styles.wrapperthongtin}>
                <View style={{flexDirection: 'row', flex: 1}}>
                  <Image
                    style={styles.icon}
                    source={require('../../../res/images/email.png')}
                  />
                  <Text style={styles.txttitle}>E-Mail</Text>
                </View>

                <View style={{alignItems: 'flex-end', marginRight: Sizes.s40}}>
                  <Text style={styles.txttitles}>{this.state.email}</Text>
                </View>
              </View>

              <View></View>
            </ProgressStep>
          </ProgressSteps>
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
  wrapperthongtin: {
    width: width - 20,
    backgroundColor: '#f5f9fc',
    margin: 10,
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.2,
    padding: 10,
    paddingTop: 0,
    flexDirection: 'row',
  },

  icon: {
    marginHorizontal: Sizes.s20,
    marginTop: Sizes.s30,
    width: Sizes.s60,
    height: Sizes.s60,
  },

  title: {
    fontSize: Sizes.s40,
    marginHorizontal: Sizes.s30,
    marginTop: Sizes.s10,
  },
  img: {
    width: Sizes.s260,
    height: Sizes.s260,
    alignSelf: 'center',
  },
  icon: {
    marginHorizontal: Sizes.s20,
    marginTop: Sizes.s30,
    width: Sizes.s100,
    height: Sizes.s100,
  },
  txttitle: {
    fontSize: Sizes.s40,
    marginTop: Sizes.s45,
  },
  txttitles: {
    fontSize: Sizes.s35,
    marginTop: Sizes.s50,
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
});
