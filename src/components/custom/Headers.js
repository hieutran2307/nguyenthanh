import React from 'react';
import {
  Button,
  Image,
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import {Sizes} from '@dungdang/react-native-basic';

export default class Headers extends React.Component {
  render() {
    const {navigation} = this.props;
    const {
      name,
      content,
      children,
      title,
      ...props
    } = this.props;
    return (
      <View
        style={{
          paddingVertical: Sizes.s2,
        }}>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
          }}>
          <TouchableOpacity
            style={{
              // position: 'absolute',
              left: Sizes.s30,
              width: Sizes.s55,
              height: Sizes.s55,
              justifyContent: 'center',
            }}
            onPress={() => {
              props.onPressBackButton();
            }}>
            <Image
              resizeMode="contain"
              source={require('../../res/images/arrow_left_white.png')}
              style={{
                marginTop:Sizes.s200,
                width: Sizes.s45,
                height: Sizes.s45,
              }}
            />
          </TouchableOpacity>
          <View
            style={{
              flex: 1,
              paddingHorizontal: Sizes.s50,
            }}>
            <Text
              numberOfLines={2}
              style={{
                marginTop: Sizes.s80,
                textAlign: 'center',
                alignSelf: 'center',
                fontSize: Sizes.s40,
                color: '#FFFF',
                position: 'absolute',
                fontWeight: 'bold',
              }}>
              {title}
            </Text>
          </View>

        <TouchableOpacity
          disabled={props.onPressShowMenu === undefined}
          style={{
            // position: 'absolute',
            right: Sizes.s30,
            width: Sizes.s55,
            height: Sizes.s55,
            justifyContent: 'center',
          }}
          onPress={() => {
            props.onPressShowMenu()
          }}>{
            props.onPressShowMenu !== undefined &&
            <Image
              resizeMode="contain"
              source={require('../../res/images/add.png')}
              style={{
                marginTop:Sizes.s200,
                width: Sizes.s45,
                height: Sizes.s45,
                padding: Sizes.s20,
              }}
            />
          }
        </TouchableOpacity>
        </View>
      </View>
    );
  }
}
