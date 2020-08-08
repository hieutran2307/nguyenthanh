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
import {userProfile} from '../../../config/settings';

export default class GVDanhSachChuDe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      idlophocphan: this.props.navigation.getParam('idlophocphan'),
      danhsachchude: '',
    };
  }
  componentDidMount() {
    fetch(
      `${API_PUBLIC}/kiemtra/chudetheohocphan.php?idlophocphan=${this.state.idlophocphan}`,
    )
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          danhsachchude: responseJson,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }
  render() {
    console.log('data tra ve', this.state.idlophocphan);
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Headers
            title="Danh sách chủ đề"
            onPressBackButton={() => {
              this.props.navigation.goBack('');
            }}
            onPressShowMenu={() => {
              this.props.navigation.navigate('TaoChuDe', {
                idlophocphans: this.state.idlophocphan,
              });
            }}
          />
        </View>
        <View style={{flex: 1}}>
          {this.state.danhsachchude === '' ? (
            <View
              style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
              <Image
                source={require('../../../res/images/error.png')}
                style={styles.img}
              />
              <Text style={styles.textthongbao}>
                Hiện tại chưa có chủ đề trong học phần này.
              </Text>
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate('TaoChuDe', {
                    idlophocphans: this.state.idlophocphan,
                  })
                }>
                <View style={styles.btn}>
                  <Text style={styles.textbtn}>TẠO CHỦ ĐỀ</Text>
                </View>
              </TouchableOpacity>
            </View>
          ) : (
            <FlatList
              keyExtractor={(item) => item.idchude}
              style={styles.container}
              data={this.state.danhsachchude}
              refreshing={this.state.danhsachchude}
              renderItem={({item}) => (
                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate('GVDanhSachCauHoi', {
                      idchude:item.idchude
                    })
                  }>
                  <View style={styles.wrapper}>
                    <Text style={styles.title}>Chủ đề: {item.tenchude}</Text>
                  </View>
                </TouchableOpacity>
              )}
            />
          )}
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
    backgroundColor: '#edf7ff',
    margin: 10,
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.2,
    padding: 10,
    paddingTop: 0,
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
  textthongbao: {
    fontSize: Sizes.s40,
  },
  btn: {
    marginTop: Sizes.s60,
    backgroundColor: '#f06c5b',
    height: Sizes.s60,
    width: Sizes.s340 + Sizes.s340,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textbtn: {
    fontSize: Sizes.s30,
    fontWeight: 'bold',
    color: '#FFF',
  },
});
