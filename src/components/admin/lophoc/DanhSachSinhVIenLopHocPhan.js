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
import UserAvatar from 'react-native-user-avatar';
import RBSheet from 'react-native-raw-bottom-sheet';

export default class DanhSachSinhVIenLopHocPhan extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        idlop: this.props.navigation.getParam('idlop'),
        idlophocphan: this.props.navigation.getParam('idlophocphan'),
      danhsachlop: [],
    };
  }
  componentDidMount() {
    fetch(`${API_PUBLIC}/kiemtra/danhsachsinhvientheolophp.php?idlop=${this.state.idlop}&idlophocphan=${this.state.idlophocphan}`)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
            danhsachlop: responseJson,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }
  render() {
    const {navigation} = this.props;
    console.log("id lop", this.state.idlop)
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Headers
            title="Danh sách sinh viên"
            onPressBackButton={() => {
              this.props.navigation.goBack('');
            }}
            onPressShowMenu={() => {
              this.props.navigation.navigate('ThemSVLopHocPhan',{
                idlop:this.state.idlop,
                idlophocphan:this.state.idlophocphan
              });
            }}
          />
        </View>
        <View style={{flex: 1}}>
          <FlatList
            style={styles.container}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => item.idthanhvien}
            data={this.state.danhsachlop}
            refreshing={this.state.danhsachlop}
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
