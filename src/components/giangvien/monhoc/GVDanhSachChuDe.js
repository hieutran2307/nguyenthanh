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
import UserAvatar from 'react-native-user-avatar';

export default class GVDanhSachChuDe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listkhoahoc: '',
      refreshing: false,
      idmonhoc: this.props.navigation.getParam('idmonhoc'),
    };
    
  }
  componentDidMount() {
    this.GetData()
  }
  componentDidUpdate(prevState){
    if(prevState.listkhoahoc !== this.state.listkhoahoc){
      this.GetData()
    }
  }
  GetData = () =>{
    return fetch(`${API_PUBLIC}/kiemtra/chude.php?idmonhoc=${this.state.idmonhoc}`)
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
    console.log('gv idmonhoc', this.state.idmonhoc, {
      idmonhoc: this.state.idmonhoc,
    });
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
                idmonhoc: this.state.idmonhoc,
              });
            }}
          />
        </View>
        <View style={{flex: 1}}>
          {this.state.listkhoahoc === '' ? (
            <View
              style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
              <Image
                source={require('../../../res/images/404.png')}
                style={{
                  height: Sizes.s340 + Sizes.s340,
                  width: Sizes.s340 + Sizes.s340,
                  resizeMode: 'contain',
                }}
              />
              <Text style={{fontSize: Sizes.s40}}>
                Hiện tại chưa có chủ đề được tạo
              </Text>
            </View>
          ) : (
            <FlatList
              style={styles.container}
              showsVerticalScrollIndicator={false}
              keyExtractor={(item) => item.idchude}
              data={this.state.listkhoahoc}
              refreshing={this.state.listkhoahoc}
              extraData={this.state.listkhoahoc}
              renderItem={({item, index}) => (
                <View style={styles.wrapper}>
                  <View style={{flex: 1}}>
                    <View
                      style={{marginRight: Sizes.s50, flexDirection: 'row'}}>
                      <UserAvatar
                        style={{width: Sizes.s140, height: Sizes.s140}}
                        name={item.tenchude}
                        bgColors={['#3498db', '#34495e', '#e67e22']}
                      />
                      <View>
                      <Text style={[styles.title, {fontSize: Sizes.h40}]}>
                        Chủ đề
                      </Text>
                      <Text
                        style={[
                          styles.title,
                          {
                            fontSize: Sizes.h36,
                            fontWeight: 'bold',
                            color: '#335272',
                          },
                        ]}>
                        {item.tenchude}
                      </Text>
                    </View>
                    </View>
                  </View>
                </View>
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
