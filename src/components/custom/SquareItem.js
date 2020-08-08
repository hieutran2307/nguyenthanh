import React from 'react';
import {
  Button,
  Image,
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableHighlight,
  ImageBackground
} from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { Sizes } from "@dungdang/react-native-basic";

export default class SquareItem extends React.Component {
  constructor(props) {
    super(props);
  }

  handleNextButton() {
    this.props.handleNextButton();
  }

  render() {
    const cellText = this.props.cellText;
    const Img = this.props.Img;
    return (
      <TouchableHighlight
        style={styles.cell}
        onPress={() => {
          this.handleNextButton()
        }}
      >
        <ImageBackground source={Img} style={styles.imgItem}>
          <Text style={styles.cellText}> {cellText}</Text>
        </ImageBackground>
      </TouchableHighlight>
    );
  }
}
const styles = StyleSheet.create({
  cell: {
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#fff',
    justifyContent: 'center',
    textAlign: 'center',
    aspectRatio: 1,
    flex: 1,
    margin: 10,
    marginTop: 0,
    marginBottom: 0,
    backgroundColor: '#eaa',
  },

  cellText: {
    fontSize: Sizes.s35,
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  imgItem: {
    resizeMode: 'cover',
    overflow: 'hidden',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#fff',
    justifyContent: 'center',
    textAlign: 'center',
    flex: 1,
    // justifyContent: "center"
  },
});