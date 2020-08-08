import React, {Component} from 'react';
import {View, Image, StyleSheet} from 'react-native';

export default class WelcomeScreen extends Component {
  render() {
    setTimeout(() => {
      this.props.navigation.navigate('Login');
    }, 2000);
    return (
      <View style={styles.container}>
        <Image
          source={require('../../res/images/logo.png')}
          style={styles.image}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#edf7ff',
  },
  image: {
    width: 320,
    height: 80,
  },
});
