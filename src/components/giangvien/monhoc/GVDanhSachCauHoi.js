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
  RefreshControl
} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import {Sizes} from '@dungdang/react-native-basic';
import Headers from '../../custom/Headers';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {/* userProfile,*/ API_PUBLIC} from '../../../config/settings';
import {userProfile} from '../../../config/settings';

export default class GVDanhSachCauHoi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      idchude: this.props.navigation.getParam('idchude'),
      danhsachcauhoi: '',
      refreshing: false,
    };
    this.GetData();
  }
  componentDidUpdate(prevState){
    if(prevState.danhsachcauhoi !== this.state.danhsachcauhoi){
      this.GetData()
    }
  }
  GetData = () => {
    //Service to get the data from the server to render
    return fetch(
      `${API_PUBLIC}/kiemtra/danhsachcauhoi.php?idchude=${this.state.idchude}`,
    )
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          refreshing: false,
          dataSource: responseJson,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };
  ListViewItemSeparator = () => {
    return (
      //returning the listview item saparator view
      <View
        style={{
          height: 0.2,
          width: '90%',
          backgroundColor: '#808080',
        }}
      />
    );
  };
  onRefresh() {
    this.setState({dataSource: []});
    this.GetData();
  }
  render() {
    console.log('get id chu de', this.state.idchude);
    if (this.state.refreshing) {
      return (
        <View style={{flex: 1, paddingTop: 20}}>
          <ActivityIndicator />
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Headers
            title="Danh sách câu hỏi"
            onPressBackButton={() => {
              this.props.navigation.navigate('HomeGiangVien');
            }}
            onPressShowMenu={() => {
              this.props.navigation.navigate('TaoCauHoi', {
                idchude: this.state.idchude,
              });
            }}
          />
        </View>
        <View style={{flex: 1}}>
          {this.state.dataSource === '' ? (
            <View
              style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
              <Image
                source={require('../../../res/images/error.png')}
                style={styles.img}
              />
              <Text style={styles.textthongbao}>
                Hiện tại chưa chưa có danh mục câu hỏi trong chủ đề này.
              </Text>
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate('TaoCauHoi', {
                    idchude: this.state.idchude,
                  })
                }>
                <View style={styles.btn}>
                  <Text style={styles.textbtn}>TẠO CÂU HỎI</Text>
                </View>
              </TouchableOpacity>
            </View>
          ) : (
            <FlatList
              showsVerticalScrollIndicator={false}
              keyExtractor={(item) => item.idchude}
              style={styles.container}
              data={this.state.dataSource}
              ItemSeparatorComponent={this.ListViewItemSeparator}
              renderItem={({item}) => (
                <View style={styles.wrapper}>
                  <Text style={styles.title}>Câu hỏi: {item.tencauhoi}</Text>
                  <Text style={styles.title}>Đáp án a: {item.a}</Text>
                  <Text style={styles.title}>Đáp án b: {item.b}</Text>
                  <Text style={styles.title}>Đáp án c: {item.c}</Text>
                  <Text style={styles.title}>Đáp án d: {item.d}</Text>
                  <Text style={styles.title}>Kết quả: {item.dapan}</Text>
                </View>
              )}
              refreshControl={
                <RefreshControl
                  refreshing={this.state.refreshing}
                  onRefresh={this.onRefresh.bind(this)}
                />
              }
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
