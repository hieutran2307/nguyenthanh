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
import MultiSelect from 'react-native-multiple-select';

export default class TaoCauHoi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      idchude: this.props.navigation.getParam('idchude'),
      tencauhoi: '',
      a: '',
      b: '',
      c: '',
      d: '',
      dapan: '',
      selectedItems: [],
      items: [
        {
          id: 'a',
          name: 'a',
        },
        {
          id: 'b',
          name: 'b',
        },
        {
          id: 'c',
          name: 'c',
        },
        {
          id: 'd',
          name: 'd',
        },
      ],
    };
  }

  onSelectedItemsChange = (selectedItems) => {
    this.setState({
      selectedItems,
      dapan: selectedItems[0],
    });
  };
  tencauhoiChange = (value) => {
    this.setState({
      tencauhoi: value,
    });
  };
  aChange = (value) => {
    this.setState({
      a: value,
    });
  };
  bChange = (value) => {
    this.setState({
      b: value,
    });
  };
  cChange = (value) => {
    this.setState({
      c: value,
    });
  };
  dChange = (value) => {
    this.setState({
      d: value,
    });
  };
  // gui du lieu len server
  async taomonhoc() {
    fetch(`${API_PUBLIC}/kiemtra/datcauhoi.php`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        tencauhoi: this.state.tencauhoi,
        a: this.state.tencauhoi,
        b: this.state.b,
        c: this.state.c,
        d: this.state.d,
        dapan: this.state.dapan,
        idchude: this.state.idchude,
      }),
    })
      .then((response) => response.json())
      .then((responseData) => {
        if (responseData.statusCode === '200') {
          this.props.navigation.navigate('GVDanhSachCauHoi');
        }
      });
  }
  render() {
    console.log('id chu de', this.state.idchude);
    const {selectedItems} = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Headers
            title="Tạo câu hỏi"
            onPressBackButton={() => {
              this.props.navigation.goBack('');
            }}
          />
        </View>
        <ScrollView style={{flex: 1}}>
          <View style={{flex: 1, marginTop: Sizes.s100}}>
            <Image
              style={styles.img}
              source={require('../../../res/images/lophoc.png')}
            />
            <View style={{marginTop: Sizes.s20}}>
              <View style={styles.labelContainer}>
                <Text caption medium style={styles.label}>
                  Câu hỏi
                </Text>
              </View>
              <TextInput
                style={styles.input}
                value={this.state.tencauhoi}
                onChangeText={(text) => this.tencauhoiChange(text)}
              />
            </View>
            <View style={{marginTop: Sizes.s20}}>
              <View style={styles.labelContainer}>
                <Text caption medium style={styles.label}>
                  Đáp án A
                </Text>
              </View>
              <TextInput
                style={styles.input}
                value={this.state.a}
                onChangeText={(text) => this.aChange(text)}
              />
            </View>
            <View style={{marginTop: Sizes.s20}}>
              <View style={styles.labelContainer}>
                <Text caption medium style={styles.label}>
                  Đáp án B
                </Text>
              </View>
              <TextInput
                style={styles.input}
                value={this.state.b}
                onChangeText={(text) => this.bChange(text)}
              />
            </View>
            <View style={{marginTop: Sizes.s20}}>
              <View style={styles.labelContainer}>
                <Text caption medium style={styles.label}>
                  Đáp án C
                </Text>
              </View>
              <TextInput
                style={styles.input}
                value={this.state.c}
                onChangeText={(text) => this.cChange(text)}
              />
            </View>
            <View style={{marginTop: Sizes.s20}}>
              <View style={styles.labelContainer}>
                <Text caption medium style={styles.label}>
                  Đáp án D
                </Text>
              </View>
              <TextInput
                style={styles.input}
                value={this.state.d}
                onChangeText={(text) => this.dChange(text)}
              />
            </View>
            <View style={{marginTop: Sizes.s20}}>
              <View style={styles.labelContainer}>
                <Text caption medium style={styles.label}>
                  Kết qủa
                </Text>
              </View>
              <MultiSelect
                items={this.state.items}
                uniqueKey="id"
                ref={(component) => {
                  this.multiSelect = component;
                }}
                onSelectedItemsChange={this.onSelectedItemsChange}
                selectedItems={selectedItems}
                selectText={this.state.name}
                searchInputPlaceholderText="Search Items..."
                onChangeInput={(text) => console.log('aaaaaa')}
                tagRemoveIconColor="#CCC"
                tagBorderColor="#CCC"
                tagTextColor="#CCC"
                selectedItemTextColor="#CCC"
                selectedItemIconColor="#CCC"
                itemTextColor="#000"
                displayKey="name"
                searchInputStyle={{color: '#CCC'}}
                submitButtonColor="#48d22b"
                submitButtonText="Chọn"
                fontSize={Sizes.s35}
                itemFontSize={Sizes.s40}
                styleDropdownMenu={Sizes.s40}
              />
            </View>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => this.taomonhoc()}>
              <Text style={styles.textbtn}>Tạo mới</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
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
  labelContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
    width: width - 50,
  },
  label: {
    textTransform: 'uppercase',
  },
  input: {
    backgroundColor: 'rgba(224, 231, 255, 0.20)', // '#E0E7FF' 20%
    borderWidth: 0.5,
    borderColor: '#4abf91',
    borderRadius: 5,
    fontSize: 20,
    color: '#2E384D',
    height: 45,
    paddingVertical: 11,
    paddingHorizontal: 16,
  },
  btn: {
    height: Sizes.s80,
    backgroundColor: '#f06c5b',
    marginHorizontal: Sizes.s30,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: Sizes.s20,
  },
  textbtn: {
    fontSize: Sizes.s50,
    color: '#FFFF',
  },
});
