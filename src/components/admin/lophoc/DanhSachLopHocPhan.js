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
  RefreshControl,
} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import {Sizes} from '@dungdang/react-native-basic';
import Headers from '../../custom/Headers';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {/* userProfile,*/ API_PUBLIC} from '../../../config/settings';

export default class DanhSachLopHocPhan extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      idlop: this.props.navigation.getParam('idlop'),
      tenlop: this.props.navigation.getParam('tenlop'),
      refreshing: false,
    };
    this.GetData();
  }
  componentDidUpdate() {
    this.GetData();
  }
  GetData = () => {
    //Service to get the data from the server to render
    return fetch(
      `${API_PUBLIC}/kiemtra/danhsachlophocphan.php?idlop=${this.state.idlop}`,
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
            title="Danh sách lớp học phần"
            onPressBackButton={() => {
              this.props.navigation.goBack('');
            }}
            onPressShowMenu={() => {
              this.props.navigation.navigate('ThemLopHocPhan', {
                idlop: this.state.idlop,
                tenlop: this.state.tenlop,
              });
            }}
          />
        </View>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <FlatList
            keyExtractor={(item) => item.idlop}
            style={styles.container}
            data={this.state.dataSource}
            ItemSeparatorComponent={this.ListViewItemSeparator}
            enableEmptySections={true}
            renderItem={({item}) => (
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate('DanhSachSinhVIenLopHocPhan', {
                    idlop: this.state.idlop,
                    idlophocphan: item.idlophocphan,
                  })
                }>
                <View style={styles.wrapper}>
                  <Text style={styles.title}>Lớp: {item.tenlop}</Text>
                  <Text style={styles.title}>
                    Lớp học phần: {item.tenhocphan}
                  </Text>
                  <Text style={styles.title}>Giáo viên: {item.giaovien}</Text>
                  <Text style={styles.title}>Môn học: {item.tenmonhoc}</Text>
                </View>
              </TouchableOpacity>
            )}
            refreshControl={
              <RefreshControl
                refreshing={this.state.refreshing}
                onRefresh={this.onRefresh.bind(this)}
              />
            }
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
    width: Sizes.s340,
    height: Sizes.s340,
  },
  textthongbao: {
    fontSize: Sizes.s40,
  },
  btn: {
    marginTop: Sizes.s20,
    backgroundColor: '#f06c5b',
    height: Sizes.s70,
    width: Sizes.s340 + Sizes.s340,
    marginHorizontal: Sizes.s30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtbtn: {
    color: '#FFFF',
    fontSize: Sizes.s30,
    fontWeight: 'bold',
  },
});
