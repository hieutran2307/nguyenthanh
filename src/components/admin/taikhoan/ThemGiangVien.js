import React from 'react';
import {
  Button,
  Image,
  View,
  Text,
  ScrollView,
  StyleSheet,
  Dimensions,
  TextInput
} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import {Sizes} from '@dungdang/react-native-basic';
import Headers from '../../custom/Headers';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {/* userProfile,*/ API_PUBLIC} from '../../../config/settings';
import RBSheet from 'react-native-raw-bottom-sheet';
import {CheckBox, SearchBar} from 'react-native-elements';
import UserAvatar from 'react-native-user-avatar';
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';

export default class ThemGiangVien extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          hovaten: '',
          ngaysinh: '',
          diachi:'',
          sodienthoai:'',
          email:'',
          maso:'',
          matkhau:'',
          idnhom:2,
          hinhanh:'',
          idlop:'',
          idlophocphan:''
        };
      }
      hovatenChange = (value) => {
        this.setState({
            hovaten: value,
        });
      };
      ngaysinhChange = (value) => {
        this.setState({
            ngaysinh: value,
        });
      };
      diachiChange = (value) => {
        this.setState({
            diachi: value,
        });
      };
      sodienthoaiChange = (value) => {
        this.setState({
            sodienthoai: value,
        });
      };
      emailChange = (value) => {
        this.setState({
            email: value,
        });
      };
      masoChange = (value) => {
        this.setState({
            maso: value,
        });
      };
      matkhauChange = (value) => {
        this.setState({
            matkhau: value,
        });
      };
      componentDidMount(){
        const max = 9000000;
        const maso = Math.floor(Math.random() * max) + 1;
        this.setState({ maso: this.state.maso + maso });
      }
  render() {
    return <View style={styles.container}>
          <View style={styles.header}>
          <Headers
            title="Thêm giảng viên"
            onPressBackButton={() => {
              this.props.navigation.goBack('');
            }}        
          />

        </View>
        <View style={{flex:1, marginHorizontal:Sizes.s30}}>
        <ProgressSteps>
        <ProgressStep label="Thông tin cá nhận">
            <View>
            <View style={{marginTop: Sizes.s20}}>
            <View style={styles.labelContainer}>
              <Text caption medium style={styles.label}>
                Họ và tên
              </Text>
            </View>
            <TextInput
              style={styles.input}
              value={this.state.hovaten}
              onChangeText={(text) => this.hovatenChange(text)}
            />
          </View>
          <View style={{marginTop: Sizes.s20}}>
            <View style={styles.labelContainer}>
              <Text caption medium style={styles.label}>
                Ngày sinh
              </Text>
            </View>
            <TextInput
              style={styles.input}
              value={this.state.ngaysinh}
              onChangeText={(text) => this.ngaysinhChange(text)}
            />
          </View>
          <View style={{marginTop: Sizes.s20}}>
            <View style={styles.labelContainer}>
              <Text caption medium style={styles.label}>
                Thông tin liên hệ
              </Text>
            </View>
            <TextInput
              style={styles.input}
              value={this.state.diachi}
              onChangeText={(text) => this.diachiChange(text)}
            />
          </View>

          <View style={{marginTop: Sizes.s20}}>
            <View style={styles.labelContainer}>
              <Text caption medium style={styles.label}>
                Số điện thoại
              </Text>
            </View>
            <TextInput
              style={styles.input}
              value={this.state.sodienthoai}
              onChangeText={(text) => this.sodienthoaiChange(text)}
            />
          </View>
            </View>
        </ProgressStep>
        <ProgressStep label="Tài khoản">
        <View style={{marginTop: Sizes.s20}}>
            <View style={styles.labelContainer}>
              <Text caption medium style={styles.label}>
                Địa chỉ E-Mail
              </Text>
            </View>
            <TextInput
              style={styles.input}
              value={this.state.email}
              onChangeText={(text) => this.emailChange(text)}
            />
          </View>
          <View style={{marginTop: Sizes.s20}}>
            <View style={styles.labelContainer}>
              <Text caption medium style={styles.label}>
                Mã số giảng viên
              </Text>
            </View>
            <TextInput
              style={styles.input}
              value={this.state.maso}
              onChangeText={(text) => this.masoChange(text)}
            />
          </View>

          <View style={{marginTop: Sizes.s20}}>
            <View style={styles.labelContainer}>
              <Text caption medium style={styles.label}>
                Mật khẩu truy cập
              </Text>
            </View>
            <TextInput
              style={styles.input}
              value={this.state.matkhau}
              onChangeText={(text) => this.matkhauChange(text)}
            />
          </View>
            <View>
              
            </View>
        </ProgressStep>
        <ProgressStep label="Xác nhận">
            <View>
               
            </View>
        </ProgressStep>
    </ProgressSteps>
        </View>
    </View>;
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
});
