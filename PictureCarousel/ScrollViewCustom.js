/**
 * Created by lilingbin on 17/3/11.
 */
/**
 * Created by lilingbin on 17/3/10.
 */
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
    TextInput,
    ScrollView,
} from 'react-native';

var Dimensions = require('Dimensions');

var {width} = Dimensions.get("window");
var dataJson = require("./data.json");

var TimerMixin = require("react-timer-mixin");
var  ScrollViewCustom = React.createClass({

    // 注册计时器
    mixins : [TimerMixin],

    getDefaultProps(){
      return {
          time : 1000,
      }
    },

    getInitialState(){
        return {
            currentPage:0,
        }
    },

    render() {
        return (
            <View style={styles.container}>
                <ScrollView
                    ref="scrollView"
                    pagingEnabled={true}
                    horizontal={true}
                    bounces={false}
                    showsHorizontalScrollIndicator={false}
                    onMomentumScrollEnd = {(e)=>this.onAnimationEnd(e)}
                    onScrollBeginDrag = {this.onScrollBeginDrag}
                    onScrollEndDrag = {this.onScrollEndDrag}
                >
                    {this.renderChildView()}
                </ScrollView>
                <View style={styles.bottomViewStyle}>
                    {this.renderPageView()}
                </View>
            </View>
        );
    },


    componentDidMount(){
      this.startTimer();
    },

    startTimer(){
        var scrollView = this.refs.scrollView;
        var array = dataJson.data;
        var activePage = 0;
       this.timer = this.setInterval(function () {


           if (this.state.currentPage + 1 >= array.length){
               activePage = 0;
           }else {
               activePage+=1;
           }

           this.setState({
               currentPage: activePage,
           });

           var offSetX = activePage * width;

           scrollView.scrollResponderScrollTo({x:offSetX, y:0, animated:true});

        }, this.props.time);
    },

    onScrollBeginDrag(){
        this.clearInterval(this.timer);
    },

    onScrollEndDrag(){
        this.startTimer();
    },


    renderChildView(){
        var subViews = [];
        var array = dataJson.data;
        for(var i = 0; i <array.length; i++){
            var imgItem = array[i];
            subViews.push(
                <Image key={i} source={{uri:imgItem.img}} style={styles.imgStyle}>

                </Image>
            );
        }
        return subViews;
    },

    renderPageView(){
        var subViews = [];
        var array = dataJson.data;
        for(var i = 0; i <array.length; i++){
            style = (i == this.state.currentPage ? {color:"red"} : {color:"white"});
            subViews.push(
                <Text key={i} style={[{fontSize:20}, style]}>&bull;</Text>
            );
        }
        return subViews;
    },

    onAnimationEnd(e){
        var offsetX = e.nativeEvent.contentOffset.x;
        var currentPage = Math.floor(offsetX / width);
        this.setState({
            currentPage:currentPage,
            }
        );
    }
});


const styles = StyleSheet.create({
    container: {
        backgroundColor:'#dddd',
        // flex:1,
        // flexDirection:'row',
        marginTop:25,
        width:width,
        height:150,
        justifyContent:'center',
        alignItems:'center'
    },
    imgStyle:{
        width:width,
        height:150,
    },
    bottomViewStyle:{
        width:width,
        flexDirection:'row',
        height:25,
        backgroundColor:"rgba(0,0,0,0.4)",
        position:"absolute",
        bottom:0,
        alignItems:'center',
        paddingLeft:5,
    }
});

module.exports = ScrollViewCustom;