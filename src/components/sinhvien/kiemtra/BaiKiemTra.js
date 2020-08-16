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
  Alert,
} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import {Sizes} from '@dungdang/react-native-basic';
import Headers from '../../custom/Headers';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {userProfile, API_PUBLIC} from '../../../config/settings';
import UserAvatar from 'react-native-user-avatar';
import {CheckBox, SearchBar} from 'react-native-elements';
import MultiSelect from 'react-native-multiple-select';

export default class BaiKiemTra extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      makiemtra: this.props.navigation.getParam('makiemtra'),
      idkiemtra: this.props.navigation.getParam('idkiemtra'),
      thongtibaikiemtra: [],
      danhsachcauhoi: [],
      dapan: '',
      diemso: 0,
      checkeda: [],
      checkedb: [],
      checkedc: [],
      checkedd: [],
      idcauhoi: '',
      point: 0,
    };
  }
  checkItemketquaa = (item) => {
    const {checkeda} = this.state;

    if (!checkeda.includes(item)) {
      this.setState({
        checkeda: [...checkeda, item],
        idcauhoi: item,
        dapanhchona: dapanhchona,
        ketquaa: ketquaa,
      });
    } else
    if ((this.state.dapanhchona === this.state.ketquaa)) {
      this.setState({
        point: this.state.point + 1,
      });
    } else {
      this.setState({checkeda: checkeda.filter((a) => a !== item)});
    }
  };

  checkItemketquab = (item) => {
    const {checkedb} = this.state;

    if (!checkedb.includes(item)) {
      this.setState({
        checkedb: [...checkedb, item],
        idcauhoi: item,
        dapanhchonb: dapanhchonb,
        ketquab: ketquab,
      });
    } else
    if ((this.state.dapanhchonb === this.state.ketquab)) {
      this.setState({
        point: this.state.point + 1,
      });
    } else {
      this.setState({checkedb: checkedb.filter((a) => a !== item)});
    }
  };
  checkItemketquac = (item) => {
    const {checkedc} = this.state;

    if (!checkedc.includes(item)) {
      this.setState({
        checkedc: [...checkedc, item],
        idcauhoi: item,
        dapanhchonc: dapanhchonc,
        ketquac: ketquac,
      });
    } else
    if ((this.state.dapanhchonc === this.state.ketquac)) {
      this.setState({
        point: this.state.point + 1,
      });
    } else {
      this.setState({checkedc: checkedc.filter((a) => a !== item)});
    }
  };
  checkItemketquad = (item) => {
    const {checkedd} = this.state;

    if (!checkedd.includes(item)) {
      this.setState({
        checkedd: [...checkedd, item],
        idcauhoi: item,
        dapanhchond: dapanhchond,
        ketquad: ketquad,
      });
    } else
    if ((this.state.dapanhchond === this.state.ketquad)) {
      this.setState({
        point: this.state.point + 1,
      });
    } else {
      this.setState({checkedd: checkedd.filter((a) => a !== item)});
    }
  };

  componentDidMount() {
    fetch(`${API_PUBLIC}/thi/thongtinde.php?makiemtra=${this.state.makiemtra}`)
      .then((response) => response.json())
      .then((responseJson) => {
        console.log('thong tin kiem tra', responseJson);
        this.setState({
          thongtibaikiemtra: responseJson,
        });
      })
      .catch((error) => {
        console.error(error);
      });
    this.getData();
  }

  getData = () => {
    const url = `${API_PUBLIC}/thi/chitietbaithi.php?makiemtra=${this.state.makiemtra}`;
    this.setState({loading: true});

    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          danhsachcauhoi: res,
          error: res.error || null,
          loading: false,
        });
        this.arrdapan = res;
      })
      .catch((error) => {
        this.setState({error, loading: false});
      });
  };
  handleChange(e) {
    let isChecked = e.target.checked;
    // do whatever you want with isChecked value
    alert('dấd');
  }
  nopbai(){
    fetch(`${API_PUBLIC}/thi/chamdiem.php`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        idkiemtra:this.state.idkiemtra,
        idthanhvien:userProfile.data.idthanhvien,
        diemso:this.state.point
      }),
    })
      .then((response) => response.json())
      .then((responseData) => {
        console.log('data tra ve', responseData);
        if (responseData.statusCode === '200') {
          this.props.navigation.navigate('KetQuaThi',{
            makiemtra:this.state.makiemtra,
            diemso:this.state.point,
          });
        }
      });
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Headers
            title="Bài Kiểm tra"
            onPressBackButton={() => {
              this.props.navigation.goBack('');
            }}
          />
        </View>
        <View>
          {this.state.thongtibaikiemtra.map((item) => (
            <View style={styles.wrapper}>
              <View style={{flexDirection: 'row'}}>
                <UserAvatar
                  style={{width: Sizes.s140, height: Sizes.s140}}
                  name={item.tenbaikiemtra}
                  bgColors={['#3498db', '#34495e', '#e67e22']}
                />
                <View>
                  <Text style={styles.title}>
                    Môn kiểm tra :{item.tenbaikiemtra}{' '}
                  </Text>
                  <Text style={styles.title}>
                    Thời gian: {item.thoigian} phút{' '}
                  </Text>
                </View>
              </View>
            </View>
          ))}
        </View>
        <View style={{flex: 1}}>
          <FlatList
            style={styles.container}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => item.idlop}
            data={this.state.danhsachcauhoi}
            refreshing={this.state.danhsachcauhoi}
            renderItem={({item, index}) => (
              <View
                style={{
                  marginTop: Sizes.s40,
                  flex: 1,
                  marginHorizontal: Sizes.s30,
                }}>
                <Text style={{fontSize: Sizes.s40}}>Câu hỏi</Text>

                <Text style={{marginTop: Sizes.s30}}>{item.tencauhoi}</Text>

                <View style={styles.dapan}>
                  <View style={styles.wrapper}>
                    <CheckBox
                      onPress={() =>
                        this.checkItemketquaa(
                          item.idcauhoi,
                          (dapanhchona = 'a'),
                          (ketquaa = item.dapan),
                        )
                      }
                      checked={this.state.checkeda.includes(
                        item.idcauhoi,
                        (dapanhchona = item.a),
                        (ketquaa = item.dapan),
                      )}
                    />

                    <Text
                      style={{
                        fontSize: Sizes.s40,
                        marginTop: Sizes.s10,
                        marginLeft: Sizes.s20,
                      }}>
                      {item.a}
                    </Text>
                  </View>
                </View>
                <View style={styles.dapan}>
                  <View style={styles.wrapper}>
                    <CheckBox
                      onPress={() =>
                        this.checkItemketquab(
                          item.idcauhoi,
                          (dapanhchonb = 'b'),
                          (ketquab = item.dapan),
                        )
                      }
                      checked={this.state.checkedb.includes(
                        item.idcauhoi,
                        (dapanhchonb = 'b'),
                        (ketquab = item.dapan),
                      )}
                    />
                    <Text
                      style={{
                        fontSize: Sizes.s40,
                        marginTop: Sizes.s10,
                        marginLeft: Sizes.s20,
                      }}>
                      {item.b}
                    </Text>
                  </View>
                </View>
                <View style={styles.dapan}>
                  <View style={styles.wrapper}>
                    <CheckBox
                      onPress={() =>
                        this.checkItemketquac(
                          item.idcauhoi,
                          (dapanhchonc = 'c'),
                          (ketquac = item.dapan),
                        )
                      }
                      checked={this.state.checkedc.includes(
                        item.idcauhoi,
                        (dapanhchonc = 'c'),
                        (ketquac = item.dapan),
                      )}
                    />
                    <Text
                      style={{
                        fontSize: Sizes.s40,
                        marginTop: Sizes.s10,
                        marginLeft: Sizes.s20,
                      }}>
                      {item.c}
                    </Text>
                  </View>
                </View>
                <View style={styles.dapan}>
                  <View style={styles.wrapper}>
                    <CheckBox
                      onPress={() =>
                        this.checkItemketquad(
                          item.idcauhoi,
                          (dapanhchond = 'd'),
                          (ketquad = item.dapan),
                        )
                      }
                      checked={this.state.checkedd.includes(
                        item.idcauhoi,
                        (dapanhchond = 'd'),
                        (ketquad = item.dapan),
                      )}
                    />
                    <Text
                      style={{
                        fontSize: Sizes.s40,
                        marginTop: Sizes.s10,
                        marginLeft: Sizes.s20,
                      }}>
                      {item.d}
                    </Text>
                  </View>
                </View>
              </View>
            )}
          />
        </View>

        <View style={{flex: 1 / 7}}>
          <TouchableOpacity onPress={()=> this.nopbai()}>
            <View
              style={{
                height: Sizes.s70,
                marginHorizontal: Sizes.s40,
                backgroundColor: '#f06c5b',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{fontSize: Sizes.s40, color: '#FFFF'}}>NỘP BÀI</Text>
            </View>
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
  wrapper: {
    width: width - 20,
    backgroundColor: '#edf7ff',
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
  img: {
    width: Sizes.s340 + Sizes.s200,
    height: Sizes.s340 + Sizes.s200,
  },
});
