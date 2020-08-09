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
} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import {Sizes} from '@dungdang/react-native-basic';
import Headers from '../../custom/Headers';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {/* userProfile,*/ API_PUBLIC} from '../../../config/settings';
import UserAvatar from 'react-native-user-avatar';

export default class ThongTinLop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tenlop: this.props.navigation.getParam('tenlop'),
      soluongsinhvien: this.props.navigation.getParam('soluongsinhvien'),
    };
  }


  render() {
    console.log('get id cap nhat mon hoc', this.state.tenmonhocs);
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Headers
            title="Thông tin lớp học"
            onPressBackButton={() => {
              this.props.navigation.goBack('');
            }}
          />
        </View>
        <View
          style={{flex: 1, marginTop: Sizes.s100, marginHorizontal: Sizes.s30}}>
          <ScrollView>
            <View style={{alignItems: 'center'}}>
              <UserAvatar
                style={styles.img}
                name={this.state.tenlop}
                bgColors={['#3498db', '#34495e', '#e67e22']}
              />
              <Text
                style={{
                  fontSize: Sizes.s30,
                  marginTop: Sizes.s20,
                }}>
                {' '}
                {this.state.tenlop}
              </Text>
            </View>
            <View style={{marginTop: Sizes.s40}}>
          
              <View style={styles.wrapper}>
                <View style={{flexDirection: 'row', flex: 1}}>
                  <Image
                    style={styles.icon}
                    source={require('../../../res/images/student.png')}
                  />
                  <Text style={styles.txttitle}>Sỉ số lớp</Text>
                </View>

                <View style={{alignItems: 'flex-end', marginRight: Sizes.s40}}>
                  <Text style={styles.txttitles}>{this.state.soluongsinhvien}</Text>
                </View>
              </View>
            </View>
          </ScrollView>
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
  wrapper: {
    width: width - 20,
    backgroundColor: '#f5f9fc',
    margin: 10,
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.2,
    padding: 10,
    paddingTop: 0,
    flexDirection: 'row',
  },
  icon: {
    marginHorizontal: Sizes.s20,
    marginTop: Sizes.s30,
    width: Sizes.s100,
    height: Sizes.s100,
  },
  txttitle: {
    fontSize: Sizes.s40,
    marginTop: Sizes.s45,
  },
  txttitles: {
    fontSize: Sizes.s50,
    marginTop: Sizes.s30,
  },
});
