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
import {ProgressSteps, ProgressStep} from 'react-native-progress-steps';
import {CheckBox, SearchBar} from 'react-native-elements';
import UserAvatar from 'react-native-user-avatar';

export default class ThemLopHocPhan extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      idlop: this.props.navigation.getParam('idlop'),
      tenlop: this.props.navigation.getParam('tenlop'),
      idmonhoc: '',
      idmonhoc: '',
      danhsachmonhoc: [],
      idgiangvien:'',
      danhsachgiangvien:[],
      checked: [],
      tenlophocphan:'',
      tenmonhoc:'',
      giangvien:'',
      tenhocphan:''
      
    };
    this.arrayholderdanhsachmonhoc = [];
    this.arrayholderdanhsachgiangvien= [];
  }
  checkItemdanhsachmonhoc = (item) => {
    const {checked} = this.state;

    if (!checked.includes(item)) {
      this.setState({checked: [...checked, item], idmonhoc: item, tenmonhoc:tenmonhoc});
    } else {
      this.setState({checked: checked.filter((a) => a !== item)});
    }
  };
  checkItemdanhsachgiangvien = (item) => {
    const {checked} = this.state;

    if (!checked.includes(item)) {
      this.setState({checked: [...checked, item], idgiangvien: item, giangvien:giangvien});
    } else {
      this.setState({checked: checked.filter((a) => a !== item)});
    }
  };


  componentDidMount() {
    this.getData();
    this.getDataGiangVien();
    const tenhocphan=this.state.tenlop + this.state.tenmonhoc;
  }
  getData = () => {
    const url = `${API_PUBLIC}/kiemtra/danhsachmonhochp.php`;
    this.setState({loading: true});

    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        console.log('dddd', res);
        this.setState({
          danhsachmonhoc: res,
          error: res.error || null,
          loading: false,
        });
        this.arrayholderdanhsachmonhoc = res;
      })
      .catch((error) => {
        this.setState({error, loading: false});
      });
  };


  getDataGiangVien = () => {
    const url = `${API_PUBLIC}/kiemtra/danhsachgiangvien.php`;
    this.setState({loading: true});

    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        console.log('dddd', res);
        this.setState({
          danhsachgiangvien: res,
          error: res.error || null,
          loading: false,
        });
        this.arrayholderdanhsachgiangvien = res;
      })
      .catch((error) => {
        this.setState({error, loading: false});
      });
  };

  searchFilterFunction = (text) => {
    this.setState({
      value: text,
    });

    const newData = this.arrayholderdanhsachmonhoc.filter((item) => {
      const itemData = `${item.name.toUpperCase()}`;
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    this.setState({
      danhsachmonhoc: newData,
    });
  };
  searchFilterFunctionGV = (text) => {
    this.setState({
      value: text,
    });

    const newData = this.arrayholderdanhsachgiangvien.filter((item) => {
      const itemData = `${item.name.toUpperCase()}`;
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    this.setState({
      danhsachmonhoc: newData,
    });
  };

  // gui du lieu len server
 
  async onSubmitSteps() {
    fetch(`${API_PUBLIC}/kiemtra/themlophocphan.php`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        tenhocphan:this.state.tenlop +  this.state.tenmonhoc,
        idthanhvien: this.state.idgiangvien,
        idmonhoc:this.state.idmonhoc,
        idlop:this.state.idlop
      }),
    })
      .then((response) => response.json())
      .then((responseData) => {
        console.log('data tra ve', responseData);
        if (responseData.statusCode === '200') {
          this.props.navigation.navigate('DanhSachLopHoc');
        }
      });
  };
  render() {
    const {selectedItems, selectedItemsMonHoc} = this.state;
    console.log("id giang vien", this.state.idgiangvien)
    console.log('id mon hoc', this.state.idmonhoc);
    console.log('id lop ben them moi', this.state.idlop);
    // console.log("ten mon hoc", this.state.tenmonhoc)
    // console.log("ten lop ben tao lop hoc phan", this.state.tenlop)
    // console.log("ten lop hoc phan",this.state.tenhocphan)
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
        <View style={{flex: 1}}>
          <ProgressSteps>
            <ProgressStep
              label="Môn Học"
              scrollViewProps={this.defaultScrollViewProps}>
              <View>
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
                  keyExtractor={(item) => item.idlop}
                  data={this.state.danhsachmonhoc}
                  refreshing={this.state.danhsachmonhoc}
                  renderItem={({item, index}) => (
                    <View style={styles.wrapper}>
                      <View style={{flex: 1}}>
                        <View
                          style={{
                            marginRight: Sizes.s50,
                            flexDirection: 'row',
                          }}>
                          <UserAvatar
                            size={Sizes.s100}
                            name={item.name}
                            bgColors={['#3498db', '#34495e', '#e67e22']}
                          />
                          <Text style={styles.title}>{item.name}</Text>
                        </View>
                      </View>
                      <View>
                        <CheckBox
                          onPress={() => this.checkItemdanhsachmonhoc(item.id,tenmonhoc=item.name)}
                          checked={this.state.checked.includes(item.id, tenmonhoc=item.name)}
                        />
                      </View>
                    </View>
                  )}
                />
              </View>
            </ProgressStep>
            <ProgressStep
              label="Giảng viên"
              scrollViewProps={this.defaultScrollViewProps}>
                <View>
                <SearchBar
                  containerStyle={styles.search}
                  placeholder="Nhập tên Giảng viên...."
                  lightTheme
                  round
                  onChangeText={(text) => this.searchFilterFunctionGV(text)}
                  autoCorrect={false}
                  value={this.state.value}
                />
                <FlatList
                  style={styles.container}
                  showsVerticalScrollIndicator={false}
                  keyExtractor={(item) => item.id}
                  data={this.state.danhsachgiangvien}
                  refreshing={this.state.danhsachgiangvien}
                  renderItem={({item, index}) => (
                    <View style={styles.wrapper}>
                      <View style={{flex: 1}}>
                        <View
                          style={{
                            marginRight: Sizes.s50,
                            flexDirection: 'row',
                          }}>
                          <UserAvatar
                            size={Sizes.s100}
                            name={item.name}
                            bgColors={['#3498db', '#34495e', '#e67e22']}
                          />
                          <Text style={styles.title}>{item.name}</Text>
                        </View>
                      </View>
                      <View>
                        <CheckBox
                          onPress={() => this.checkItemdanhsachgiangvien(item.id, giangvien=item.name)}
                          checked={this.state.checked.includes(item.id,giangvien=item.name)}
                        />
                      </View>
                    </View>
                  )}
                />
                  </View>
            </ProgressStep>
          
            <ProgressStep
              label="Thông tin"
              onPrevious={this.onPrevStep}
              onSubmit={() =>this.onSubmitSteps()}
              scrollViewProps={this.defaultScrollViewProps}>
              <View style={{flex:1}}>

              <View style={{alignItems: 'center'}}>
              <UserAvatar
                style={styles.img}
                name={this.state.tenlop}
                bgColors={['#3498db', '#34495e', '#e67e22']}
              />
             


             <View style={styles.wrapperthongtin}>
                <View style={{flexDirection: 'row', flex: 1}}>
                  
                        <Text style={styles.textinfo}>{this.state.tenlop} {this.state.tenmonhoc}</Text>
                </View>

              
              </View>


            </View>
                
              <View style={styles.wrapperthongtin}>
                <View style={{flexDirection: 'row', flex: 1}}>
                  <Image
                    style={styles.icon}
                    source={require('../../../res/images/student.png')}
                  />
                  <Text style={styles.textinfo}>Lớp học</Text>
                </View>

                <View style={{alignItems: 'flex-end', marginRight: Sizes.s40}}>
                  <Text style={styles.textnoidunginfo}>{this.state.tenlop}</Text>
                </View>
              </View>



              <View style={styles.wrapperthongtin}>
                <View style={{flexDirection: 'row', flex: 1}}>
                  <Image
                    style={styles.icon}
                    source={require('../../../res/images/khoahocss.png')}
                  />
                  <Text style={styles.textinfo}>Môn học</Text>
                </View>

                <View style={{alignItems: 'flex-end', marginRight: Sizes.s40, flex:1}}>
                  <Text style={styles.textnoidunginfo}>{this.state.tenmonhoc}</Text>
                </View>
              </View>



              <View style={styles.wrapperthongtin}>
                <View style={{flexDirection: 'row', flex: 1}}>
                  <Image
                    style={styles.icon}
                    source={require('../../../res/images/giangvienss.png')}
                  />
                  <Text style={styles.textinfo}>Giảng viên</Text>
                </View>

                <View style={{alignItems: 'flex-end', marginRight: Sizes.s40, flex:1}}>
                  <Text style={styles.textnoidunginfo}>{this.state.giangvien}</Text>
                </View>
              </View>


                
              </View>
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
    width: Sizes.s100,
    height: Sizes.s100,
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
  textinfo:{
    fontSize: Sizes.s40,
    marginTop: Sizes.s45,
  },
  textnoidunginfo:{
    fontSize: Sizes.s50,
    marginTop: Sizes.s30,
  },
  img: {
    width: Sizes.s260,
    height: Sizes.s260,
    alignSelf: 'center',
  },
});
