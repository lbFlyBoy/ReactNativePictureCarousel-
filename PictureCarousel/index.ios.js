/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

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

var LoginView = require('./LoginView');

var ScrollViewCustom = require("./ScrollViewCustom");

export default class HelloWordOne extends Component {
  render() {
    return (
        <ScrollViewCustom></ScrollViewCustom>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor:'gray',
    //   flex:1,
    // flexDirection:'row',
    marginTop:25,
    justifyContent:'center',
    alignItems:'center'
  },
    textInputStyle:{
      backgroundColor:'white',
        width:100,
        height:30,
        borderColor:"gray",
        borderWidth:1,
        fontSize:14
    }
});

AppRegistry.registerComponent('HelloWordOne', () => HelloWordOne);
