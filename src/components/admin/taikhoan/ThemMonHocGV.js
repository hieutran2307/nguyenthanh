import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
  Button,
  TouchableWithoutFeedback,
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
import {userProfile} from '../../../config/settings';

export default class ThemMonHocGV extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      idlop: this.props.navigation.getParam('idlop'),
      loading: false,
      data: [],
      checked: [],
      arrayDetail: [],
      idmonhoc: '',
      idgv: this.props.navigation.getParam('idgv'),
    };
    this.arrayholder = [];
  }
  checkItem = item => {
    const { checked } = this.state;

    if (!checked.includes(item)) {
      this.setState({ checked: [...checked, item],
            arrayDetail: [{
          ...checked,
          "idmonhoc":item,
          "idthanhvien":this.state.idgv
        }]
      });
    } else {
      this.setState({ checked: checked.filter(a => a !== item) });
    }
};
  componentDidMount() {
    this.getData();
  }
  getData = () => {
    const url = `${API_PUBLIC}/kiemtra/danhsachallmonhoc.php`;
    this.setState({loading: true});

    fetch(url)
      .then((res) => res.json())
      .then((res) => {
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
  async taomonhoc() {
    fetch(`${API_PUBLIC}/kiemtra/themnhieumonhocgv.php`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        arrayDetail: this.state.arrayDetail,
      }),
    })
      .then((response) => response.json())
      .then((responseData) => {
        console.log('tra ve gi day', responseData);
        if (responseData.statusCode === '200') {
          this.props.navigation.navigate('tabDanhSachMonHocTheoGV');
        }
      });
  }
  render() {
    const {navigation} = this.props;
    console.log('lay dc id mon hoc ko', this.state.arrayDetail);
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Headers
            title="Danh sách môn học"
            onPressBackButton={() => {
              this.props.navigation.goBack('');
            }}
          />
        </View>
        <View style={{flex: 1}}>
          <SearchBar
            containerStyle={styles.search}
            placeholder="Nhập tên môn học...."
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
                <View>
                  <CheckBox
                    onPress={() => this.checkItem(item.id)}
                    checked={this.state.checked.includes(item.id)}
                  />
                </View>
              </View>
            )}
          />
        </View>
        <View style={{flex: 1 / 9}}>
          <TouchableOpacity style={styles.btn} onPress={() => this.taomonhoc()}>
            <Text style={styles.textbtn}>Cập nhật</Text>
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
