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
import Header from '../../custom/Header';
import {/* userProfile,*/ API_PUBLIC} from '../../../config/settings';
import { Card } from 'react-native-elements'

export default class ThongBao extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      danhsachthongbao: [],
      refreshing: false,
    };
  }
  componentDidMount() {
    fetch(`${API_PUBLIC}/thongbao/danhsachthongbao.php`)
      .then((response) => response.json())
      .then((responseJson) => {
          console.log("data",responseJson)
        this.setState({
            danhsachthongbao: responseJson,
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
          <Header
            title="Danh sách thông báo"
          
          
          />
        </View>
        <View style={{flex: 1}}>{this.state.danhsachlophoc === undefined ? (
             <View style={{alignItems: 'center', justifyContent: 'center'}}>
             <Image
               source={require('../../../res/images/error.png')}
               style={styles.img}
             />
             <Text style={styles.textthongbao}>
              Hiện tại chưa có thông báo nào
             </Text>

            
           </View>
        ):
        <FlatList
            style={styles.container}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => item.idthongtbao}
            data={this.state.danhsachthongbao}
            refreshing={this.state.danhsachthongbao}
            extraData={this.state.danhsachthongbao}
            renderItem={({item, index}) => (
                <Card>
                    <Text style={{fontSize:Sizes.s30}}>{item.noidung}</Text>
                </Card>
            )}
          />
        }

          
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
