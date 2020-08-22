import React from 'react';
import {
  Button,
  Image,
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
import RBSheet from 'react-native-raw-bottom-sheet';
import UserAvatar from 'react-native-user-avatar';

export default class DanhSachMonHocTheoGV extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listkhoahoc: [],
      refreshing: false,
      idgv: this.props.navigation.getParam('idgv'),
    };
    this.GetData();
  }
  componentDidUpdate(prevState) {
    this.GetData();
  }
  GetData = () => {
    //Service to get the data from the server to render
    return fetch(
      `${API_PUBLIC}/kiemtra/danhsachmonhocgv.php?idthanhvien=${this.state.idgv}`,
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
  togglePanel() {
    this.setState({
      isOpen: true,
    });
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
            title="Danh sách môn học "
            onPressBackButton={() => {
              this.props.navigation.goBack('');
            }}
            onPressShowMenu={() => {
              this.props.navigation.navigate('ThemMonHocGV', {
                idgv: this.state.idgv,
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
                      style={{width: Sizes.s140, height: Sizes.s140}}
                      name={item.tenmonhoc}
                      bgColors={['#3498db', '#34495e', '#e67e22']}
                    />
                    <Text style={styles.title}>Môn học: {item.tenmonhoc}</Text>
                  </View>
                </View>
              </View>
            )}
            refreshControl={
              <RefreshControl
                //refresh control used for the Pull to Refresh
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
