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

export default class Header extends React.Component {
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
        </View>
      </View>
    );
  }
}
