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
import {/* userProfile,*/ API_PUBLIC} from '../../../config/settings';
import UserAvatar from 'react-native-user-avatar';
import {CheckBox, SearchBar} from 'react-native-elements';

export default class BaiKiemTra extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      makiemtra: this.props.navigation.getParam('makiemtra'),
      thongtibaikiemtra: [],
      checked: [],
      dapan: '',
      ketqua: '',
      danhsachcauhoi: [],
    };
    this.arrdapan = [];
  }
  checkarrdapan = (item) => {
    const {checked} = this.state;

    if (!checked.includes(item)) {
      this.setState({
        checked: [...checked, item],
        idmonhoc: item,
        tenmonhoc: tenmonhoc,
      });
    } else {
      this.setState({checked: checked.filter((a) => a !== item)});
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
        console.log('danh sach cau hoi', res);
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

  render() {
    console.log('dap an chon lua', this.state.dapan);
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
                      onPress={() => this.checkarrdapan((dapan = item.a))}
                      checked={this.state.checked.includes((dapan = item.a))}
                    />
                    <Text style={{fontSize: Sizes.s40, marginTop: Sizes.s20}}>
                    {item.a}
                    </Text>
                  </View>
                </View>
                <View style={styles.dapan}>
                  <View style={styles.wrapper}>
                    <CheckBox
                      onPress={() => this.checkarrdapan((dapan = item.a))}
                      checked={this.state.checked.includes((dapan = item.a))}
                    />
                    <Text style={{fontSize: Sizes.s40, marginTop: Sizes.s20}}>
                    {item.b}
                    </Text>
                  </View>
                </View>
                <View style={styles.dapan}>
                  <View style={styles.wrapper}>
                    <CheckBox
                      onPress={() => this.checkarrdapan((dapan = item.a))}
                      checked={this.state.checked.includes((dapan = item.a))}
                    />
                    <Text style={{fontSize: Sizes.s40, marginTop: Sizes.s20}}>
                    {item.c}
                    </Text>
                  </View>
                </View>
                <View style={styles.dapan}>
                  <View style={styles.wrapper}>
                    <CheckBox
                      onPress={() => this.checkarrdapan((dapan = item.a))}
                      checked={this.state.checked.includes((dapan = item.a))}
                    />
                    <Text style={{fontSize: Sizes.s40, marginTop: Sizes.s20}}>
                    {item.d}
                    </Text>
                  </View>
                </View>
              </View>
            )}
          />
        </View>

        <View style={{flex: 1 / 7}}>
          <TouchableOpacity>
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
