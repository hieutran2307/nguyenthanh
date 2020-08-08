import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import {Sizes, Functions} from '@dungdang/react-native-basic';
const CustomControlTab = (props) => {
  const {arrayIsEmpty, stringIsEmpty, objectIsNull} = Functions;
  const {
    onPressLeft,
    onPressRight,
    backgroundColorLeft,
    backgroundColorRight,
    colorLeft,
    colorRight,
    titleLeft,
    titleRight,
  } = props;
  return (
    <View style={styles.controlTab}>
      <TouchableOpacity
        style={[styles.touch, {backgroundColor: backgroundColorLeft}]}
        onPress={() => {
          if (!objectIsNull(onPressLeft)) {
            onPressLeft(0);
          }
        }}>
        <Text style={[styles.styleText, {color: colorLeft}]}>
          {titleLeft === undefined
            ? 'BUTTON LEFT'
            : !stringIsEmpty(titleLeft)
            ? titleLeft
            : titleLeft.toUpperCase()}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.touch, {backgroundColor: backgroundColorRight}]}
        onPress={() => {
          if (!objectIsNull(onPressRight)) {
            onPressRight(1);
          }
        }}>
        <Text style={[styles.styleText, {color: colorRight}]}>
          {titleRight === undefined
            ? 'BUTTON RIGHT'
            : !stringIsEmpty(titleRight)
            ? titleRight
            : titleRight.toUpperCase()}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  controlTab: {
    flexDirection: 'row',
    padding: Sizes.s5,
    width: '96%',
    justifyContent: 'center',
    borderRadius: Sizes.s10,
    backgroundColor: '#E1E1E1',
    margin: Sizes.s15,
  },
  touch: {
    width: '50%',
    padding: Sizes.h22,
    alignItems: 'center',
    borderRadius: Sizes.s10,
  },
  styleText: {
    fontSize: Sizes.h30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
export {CustomControlTab};
