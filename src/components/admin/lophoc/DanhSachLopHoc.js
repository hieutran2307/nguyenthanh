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

export default class DanhSachLopHoc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      danhsachlophoc: [],
    };
  }
  componentDidMount() {
    fetch(`${API_PUBLIC}/kiemtra/danhsachlop.php`)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          danhsachlophoc: responseJson,
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
        <View style={styles.header}>
          <Headers
            title="Danh sách lớp học"
            onPressBackButton={() => {
              this.props.navigation.goBack('');
            }}
            onPressShowMenu={() => {
              this.props.navigation.navigate('ThemLopHoc');
            }}
          />
        </View>
        <View style={{flex: 1}}>
          <FlatList
            keyExtractor={(item) => item.idlop}
            style={styles.container}
            data={this.state.danhsachlophoc}
            refreshing={this.state.danhsachlophoc}
            renderItem={({item}) => (
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate('DanhSachLopHocPhan', {
                    idlop:item.idlop,
                  })
                }>
                <View style={styles.wrapper}>
                  <Text style={styles.title}>Tên lớp: {item.tenlop}</Text>
                  <Text style={styles.title}>
                    số lượng sinh viên: {item.soluongsinhvien}
                  </Text>
                </View>
              </TouchableOpacity>
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
