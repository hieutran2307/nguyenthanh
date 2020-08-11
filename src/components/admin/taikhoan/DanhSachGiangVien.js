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
  }
  componentDidMount() {
    this.getData();
  }
  getData = () => {
    const url = `${API_PUBLIC}/kiemtra/danhsachgiangvien.php`;
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
    console.log('data', this.state.listkhoahoc);
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Headers
            title="Thêm sinh viên vào lớp"
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
            keyExtractor={(item) => item.id}
            data={this.state.data}
            refreshing={this.state.data}
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
                <View></View>
              </View>
            )}
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
