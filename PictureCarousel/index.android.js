import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
    Image,
    TextInput
} from 'react-native';

var Dimensions = require('Dimensions');



export default class HelloWordOne extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>当前宽度是屏幕的：{Dimensions.get('window').height}</Text>
        <Text>当前宽度是屏幕的：{Dimensions.get('window').height}</Text>
        <Image source={{uri:''}}>

        </Image>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'gray',
      flex:1,
    // flexDirection:'row',
    marginTop:25,
    justifyContent:'center',
    alignItems:'center'
  }
});

AppRegistry.registerComponent('HelloWordOne', () => HelloWordOne);