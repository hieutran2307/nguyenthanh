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
import {userProfile, API_PUBLIC} from '../../../config/settings';
import {ProgressSteps, ProgressStep} from 'react-native-progress-steps';
import {CheckBox, SearchBar} from 'react-native-elements';
import UserAvatar from 'react-native-user-avatar';
import MultiSelect from 'react-native-multiple-select';

export default class DanhSachKiemTra extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      idlop: this.props.navigation.getParam('idlop'),
      tenlop: this.props.navigation.getParam('tenlop'),
      idchude: '',
      danhsachmonhoc: [],
      checked: [],
      tencauhoi: '',
      idthanhvien:'',
      a: '',
      b: '',
      c: '',
      d: '',
      dapan: '',
      selectedItems: [],
      items: [
        {
          id: 'a',
          name: 'a',
        },
        {
          id: 'b',
          name: 'b',
        },
        {
          id: 'c',
          name: 'c',
        },
        {
          id: 'd',
          name: 'd',
        },
      ],
    };
    this.arrayholderdanhsachmonhoc = [];
  }

  onSelectedItemsChange = (selectedItems) => {
    this.setState({
      selectedItems,
      dapan: selectedItems[0],
    });
  };
  tencauhoiChange = (value) => {
    this.setState({
      tencauhoi: value,
    });
  };
  aChange = (value) => {
    this.setState({
      a: value,
    });
  };
  bChange = (value) => {
    this.setState({
      b: value,
    });
  };
  cChange = (value) => {
    this.setState({
      c: value,
    });
  };
  dChange = (value) => {
    this.setState({
      d: value,
    });
  };

  checkItemdanhsachmonhoc = (item) => {
    const {checked} = this.state;

    if (!checked.includes(item)) {
      this.setState({
        checked: [...checked, item],
        idchude: item,
        tenmonhoc: tenmonhoc,
      });
    } else {
      this.setState({checked: checked.filter((a) => a !== item)});
    }
  };

  componentDidMount() {
    this.getData();
  }
  getData = () => {
    const url = `${API_PUBLIC}/kiemtra/danhsachchudegiaovien.php?idthanhvien=${userProfile.data.idthanhvien}`;
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

  // gui du lieu len server

  async onSubmitSteps() {
    fetch(`${API_PUBLIC}/kiemtra/datcauhoi.php`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        tencauhoi: this.state.tencauhoi,
        a: this.state.tencauhoi,
        b: this.state.b,
        c: this.state.c,
        d: this.state.d,
        dapan: this.state.dapan,
        idchude: this.state.idchude,
        idthanhvien:userProfile.data.idthanhvien
      }),
    })
      .then((response) => response.json())
      .then((responseData) => {
        console.log("data tra ve gi day", responseData)
        if (responseData.statusCode === '200') {
          this.props.navigation.navigate('GVDanhSachCauHoi',{
            idchude: this.state.idchude,
          });
        }
      });
  }
  render() {
    const {selectedItems, selectedItemsMonHoc} = this.state;
    console.log("id mon hocaaaa",this.state.idchude)
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Headers
            title="Tạo câu hỏi"
            onPressBackButton={() => {
              this.props.navigation.goBack('');
            }}
          />
        </View>
        <View style={{flex: 1}}>
          <ProgressSteps>
            <ProgressStep
              label="Chủ đề"
              scrollViewProps={this.defaultScrollViewProps}>
              <View>
                <SearchBar
                  containerStyle={styles.search}
                  placeholder="Nhập tên chủ đề ...."
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
                          onPress={() =>
                            this.checkItemdanhsachmonhoc(
                              item.id,
                              (tenmonhoc = item.name),
                            )
                          }
                          checked={this.state.checked.includes(
                            item.id,
                            (tenmonhoc = item.name),
                          )}
                        />
                      </View>
                    </View>
                  )}
                />
              </View>
            </ProgressStep>
            <ProgressStep
              label="Câu hỏi"
              scrollViewProps={this.defaultScrollViewProps}
              onPrevious={this.onPrevStep}
              onSubmit={() => this.onSubmitSteps()}
              >
              <View style={{flex:1}}>



              <View style={{marginTop: Sizes.s20}}>
              <View style={styles.labelContainer}>
                <Text caption medium style={styles.label}>
                  Câu hỏi
                </Text>
              </View>
              <TextInput
                style={styles.input}
                value={this.state.tencauhoi}
                onChangeText={(text) => this.tencauhoiChange(text)}
              />
            </View>
            <View style={{marginTop: Sizes.s20}}>
              <View style={styles.labelContainer}>
                <Text caption medium style={styles.label}>
                  Đáp án A
                </Text>
              </View>
              <TextInput
                style={styles.input}
                value={this.state.a}
                onChangeText={(text) => this.aChange(text)}
              />
            </View>
            <View style={{marginTop: Sizes.s20}}>
              <View style={styles.labelContainer}>
                <Text caption medium style={styles.label}>
                  Đáp án B
                </Text>
              </View>
              <TextInput
                style={styles.input}
                value={this.state.b}
                onChangeText={(text) => this.bChange(text)}
              />
            </View>
            <View style={{marginTop: Sizes.s20}}>
              <View style={styles.labelContainer}>
                <Text caption medium style={styles.label}>
                  Đáp án C
                </Text>
              </View>
              <TextInput
                style={styles.input}
                value={this.state.c}
                onChangeText={(text) => this.cChange(text)}
              />
            </View>
            <View style={{marginTop: Sizes.s20}}>
              <View style={styles.labelContainer}>
                <Text caption medium style={styles.label}>
                  Đáp án D
                </Text>
              </View>
              <TextInput
                style={styles.input}
                value={this.state.d}
                onChangeText={(text) => this.dChange(text)}
              />
            </View>
            <View style={{marginTop: Sizes.s20}}>
              <View style={styles.labelContainer}>
                <Text caption medium style={styles.label}>
                  Kết qủa
                </Text>
              </View>
              <MultiSelect
                items={this.state.items}
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
  textinfo: {
    fontSize: Sizes.s40,
    marginTop: Sizes.s45,
  },
  textnoidunginfo: {
    fontSize: Sizes.s50,
    marginTop: Sizes.s30,
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
});
