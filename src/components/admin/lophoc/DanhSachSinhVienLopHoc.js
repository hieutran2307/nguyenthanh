import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  RefreshControl,
  FlatList,
} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import {Sizes} from '@dungdang/react-native-basic';
import Headers from '../../custom/Headers';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {/* userProfile,*/ API_PUBLIC} from '../../../config/settings';
import UserAvatar from 'react-native-user-avatar';
import RBSheet from 'react-native-raw-bottom-sheet';

export default class DanhSachSinhVienLopHoc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        idlop: this.props.navigation.getParam('idlop'),
        dataSource:'',
      refreshing: false,
    };
    this.GetData();
  }
  GetData = () => {
    //Service to get the data from the server to render
    fetch(`${API_PUBLIC}/kiemtra/danhsachsinhvientheolop.php?idlop=${this.state.idlop}`)

      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          refreshing: false,
          dataSource: responseJson
        });
      })
      .catch(error => {
        console.error(error);
      });
  };
  ListViewItemSeparator = () => {
    return (
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
    this.setState({ dataSource: [] });
    this.GetData();
  }
  render() {
  console.log("id lop ben danh sach lop", this.state.idlop)
    if (this.state.refreshing) {
      return (
        <View style={{ flex: 1, paddingTop: 20 }}>
          <ActivityIndicator />
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Headers
            title="Danh sách sinh viên"
            onPressBackButton={() => {
              this.props.navigation.goBack('');
            }}
            onPressShowMenu={() => {
              this.props.navigation.navigate('ThemSVLop',{
                idlop:this.state.idlop
              });
            }}
          />
        </View>
        <View style={{flex: 1}}>
          <FlatList
            style={styles.container}
            data={this.state.dataSource}
          ItemSeparatorComponent={this.ListViewItemSeparator}
          enableEmptySections={true}
            renderItem={({item, index}) => (
              <View style={styles.wrapper}>
                <View style={{flex: 1}}>
                  <View style={{marginRight: Sizes.s50, flexDirection: 'row'}}>
                    <UserAvatar
                      size={Sizes.s100}
                      name={item.hovaten}
                      bgColors={['#3498db', '#34495e', '#e67e22']}
                    />
                    <Text style={styles.title}>{item.hovaten}</Text>
                  </View>
                </View>

           
              </View>
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
});
