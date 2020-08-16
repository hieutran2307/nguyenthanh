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
import UserAvatar from 'react-native-user-avatar';
import RBSheet from 'react-native-raw-bottom-sheet';

export default class DanhSachBaiThi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listkhoahoc: [],
      refreshing: false,
    };
  }
  componentDidMount() {
    fetch(
      `${API_PUBLIC}/thi/danhsachbaithi.php?idthanhvien=${userProfile.data.idthanhvien}`,
    )
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          listkhoahoc: responseJson,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }
  togglePanel() {
    this.setState({
      isOpen: true,
    });
  }

  render() {
    console.log('data', this.state.listkhoahoc);
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Headers
            title="Danh sách bài kiểm tra"
            onPressBackButton={() => {
              this.props.navigation.goBack('');
            }}
          />
        </View>
        <View style={{flex: 1}}>
          <FlatList
            style={styles.container}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => item.idmonhoc}
            data={this.state.listkhoahoc}
            refreshing={this.state.listkhoahoc}
            extraData={this.state.listkhoahoc}
            renderItem={({item, index}) => (
              <View style={styles.wrapper}>
                <View style={{flex: 1}}>
                  <View style={{marginRight: Sizes.s50, flexDirection: 'row'}}>
                    <UserAvatar
                      style={{width: Sizes.s140, height: Sizes.s140}}
                      name={item.tenbaikiemtra}
                      bgColors={['#3498db', '#34495e', '#e67e22']}
                    />
                    <View style={{flexDirection: 'column'}}>
                      <Text style={styles.title}>
                        Môn: {item.tenbaikiemtra}
                      </Text>
                      <Text style={styles.title}>
                        Thời gian: {item.thoigian} phút
                      </Text>
                      <Text style={styles.title}>
                        Điểm số: {item.diemso} /10
                      </Text>
                    </View>
                  </View>
                </View>
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
});
