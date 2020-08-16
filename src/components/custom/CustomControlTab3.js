import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import { Sizes, Functions } from '@dungdang/react-native-basic'
const CustomControlTab3 = (props) => {
    const { objectIsNull } = Functions
    const {
        onPressLeft,
        onPressCenter,
        onPressRight,
        choose,
    } = props
    return (
        <View style = {styles.controlTab}>
            <TouchableOpacity style = {[styles.touch,{backgroundColor: choose === 0 ? "#FFF" : "#E1E1E1"}]}
            onPress = {() => {
                if (!objectIsNull(onPressLeft)) {
                    onPressLeft(0)
                }
            }}>
                <Text style = {[styles.styleText,{color: choose === 0 ? "#3333FF" : "#717171"}]}>
                    Chưa kiểm tra
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style = {[styles.touch,{backgroundColor: choose === 1 ? "#FFF" : "#E1E1E1"  }]}
            onPress = {() => {
                if (!objectIsNull(onPressCenter)) {
                    onPressCenter(1)
                }
            }}>
                <Text style = {[styles.styleText,{color: choose === 1 ? "#3333FF" : "#717171"}]}>
                    Đang kiểm tra
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style = {[styles.touch,{backgroundColor: choose === 2 ? "#FFF" : "#E1E1E1"}]}
            onPress = {() => {
                if (!objectIsNull(onPressRight)) {
                    onPressRight(2)
                }
            }}>
                <Text style = {[styles.styleText,{color: choose === 2 ? "#3333FF" : "#717171"}]}>
                    Đã kiểm tra
                </Text>
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    controlTab: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginHorizontal: Sizes.s20,
        marginVertical: Sizes.s10,
        paddingVertical: Sizes.s5,
        width: '96%',
        borderRadius: Sizes.s10,
        backgroundColor: '#E1E5E7',
    },
    touch: {
        width: '33%',
        paddingHorizontal: Sizes.s10,
        paddingVertical: Sizes.s20,
        alignItems: 'center',
        borderRadius: Sizes.s10,
    },
    styleText: {
        fontSize: Sizes.h30,
        fontWeight: 'bold',
        textAlign: 'center'
    }
});
export {CustomControlTab3}