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
import {userProfile, API_PUBLIC} from '../../../config/settings';
import {CustomControlTab3} from '../../custom/CustomControlTab3';
import UserAvatar from 'react-native-user-avatar';

export default class DanhSachKiemTraGV extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0,
      danhsachkiemtra: [],
    };
  }
  componentDidMount() {
    fetch(`${API_PUBLIC}/kiemtra/tranthaibaikiemtra.php?idtrangthaikiemtra=3`)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          danhsachkiemtra: responseJson,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }
  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.container}>
        <FlatList
          style={styles.container}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.idkiemtra}
          data={this.state.danhsachkiemtra}
          refreshing={this.state.danhsachkiemtra}
          extraData={this.state.danhsachkiemtra}
          renderItem={({item, index}) => (
            <View style={styles.wrapper}>
              <View style={{flex: 1}}>
                <View style={{marginRight: Sizes.s50, flexDirection: 'row'}}>
                  <UserAvatar
                    style={{width: Sizes.s200, height: Sizes.s200}}
                    name={item.tenbaikiemtra}
                    bgColors={['#3498db', '#34495e', '#e67e22']}
                  />
                  <View style={{flexDirection: 'column'}}>
                    <Text style={styles.title}>
                      Bài kiểm tra: {item.tenbaikiemtra}
                    </Text>
                    <Text style={styles.title}>
                      Mã kiểm tra: {item.makiemtra}
                    </Text>
                    <Text style={styles.title}>
                      Thời gian: {item.thoigian} phút
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          )}
        />
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
});
