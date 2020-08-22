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

export default class ThemBaiKiemTra extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: [],
      tenbaikiemtra: '',
      makiemtra: '',
      thoigian: '',
    };
    this.arrayholderdanhsachmonhoc = [];
  }

  tenbaikiemtraChange = (value) => {
    this.setState({
      tenbaikiemtra: value,
    });
  };
  makiemtraChange = (value) => {
    this.setState({
      makiemtra: value,
    });
  };
  thoigianChange = (value) => {
    this.setState({
      thoigian: value,
    });
  };

  componentDidMount() {
    const max = 90000;
    const makiemtra = Math.floor(Math.random() * max) + 1;
    this.setState({makiemtra: this.state.makiemtra + makiemtra});
    this.getData();
  }
  getData = () => {
    const url = `${API_PUBLIC}/thi/danhsachcauhoitheothanhvien.php?idthanhvien=${userProfile.data.idthanhvien}`;
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
      const itemData = `${item.tencauhoi.toUpperCase()}`;
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    this.setState({
      danhsachmonhoc: newData,
    });
  };

  themkiemtra() {
    fetch(`${API_PUBLIC}/thi/thembaikiemtra.php`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        tenbaikiemtra: this.state.tenbaikiemtra,
        makiemtra: this.state.makiemtra,
        thoigian: this.state.thoigian,
        idtrangthaikiemtra: 1,
      }),
    })
      .then((response) => response.json())
      .then((responseData) => {
          
      });
  }
  themcauhoikiemtra(){
    fetch(`${API_PUBLIC}/thi/themcauhoi.php`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        arrayDetail: [
          { "idcauhoi": 25, "idkiemtra": "30" },
          { "idcauhoi": 26, "idkiemtra": "30" },
          { "idcauhoi": 27, "idkiemtra": "30" },
          { "idcauhoi": 28, "idkiemtra": "30" },
          { "idcauhoi": 29, "idkiemtra": "30" }
        ]
      }),
    })
      .then((response) => response.json())
      .then((responseData) => {
        if (responseData.statusCode === '200') {
          this.props.navigation.navigate('HomeGiangVien');
        }
          
      });
  }

  async onSubmitSteps() {
  this.themkiemtra();
  this.themcauhoikiemtra();
  }
  render() {
    const {selectedItems, selectedItemsMonHoc} = this.state;
    console.log('id mon hocaaaa', this.state.idchude);
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Headers
            title="Tạo bài kiểm tra"
            onPressBackButton={() => {
              this.props.navigation.goBack('');
            }}
          />
        </View>
        <View style={{flex: 1}}>
          <ProgressSteps>
            <ProgressStep
              label="Bài kiểm tra"
              scrollViewProps={this.defaultScrollViewProps}>
              <View style={{flex: 1, marginHorizontal: Sizes.s30}}>
                <View style={{marginTop: Sizes.s20}}>
                  <View style={styles.labelContainer}>
                    <Text caption medium style={styles.label}>
                      Bài kiểm tra
                    </Text>
                  </View>
                  <TextInput
                    style={styles.input}
                    value={this.state.tenbaikiemtra}
                    onChangeText={(text) => this.tenbaikiemtraChange(text)}
                  />
                </View>
                <View style={{marginTop: Sizes.s20}}>
                  <View style={styles.labelContainer}>
                    <Text caption medium style={styles.label}>
                      Mã bài kiểm tra
                    </Text>
                  </View>
                  <TextInput
                    style={styles.input}
                    value={this.state.makiemtra}
                    onChangeText={(text) => this.makiemtraChange(text)}
                  />
                </View>
                <View style={{marginTop: Sizes.s20}}>
                  <View style={styles.labelContainer}>
                    <Text caption medium style={styles.label}>
                      Thời gian
                    </Text>
                  </View>
                  <TextInput
                    style={styles.input}
                    value={this.state.thoigian}
                    onChangeText={(text) => this.thoigianChange(text)}
                  />
                </View>
              </View>
            </ProgressStep>
            <ProgressStep
              label="Câu hỏi"
              scrollViewProps={this.defaultScrollViewProps}
              onPrevious={this.onPrevStep}
              onSubmit={() => this.onSubmitSteps()}>
              <View>
                <SearchBar
                  containerStyle={styles.search}
                  placeholder="Nhập tên câu hỏi ...."
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
                            style={{
                              width: Sizes.s100,
                              height: Sizes.s100,
                            }}
                            name={item.name}
                            bgColors={['#3498db', '#34495e', '#e67e22']}
                          />
                          <Text style={styles.title}>{item.tencauhoi}</Text>
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
