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
    TouchableOpacity,
    AlertIOS,
    // TouchableHight
} from 'react-native';

var Dimensions = require('Dimensions');

// let {width} = Dimensions.get("window");

var LoginView = React.createClass({

    getInitialState(){
      return{
          title: "不透明触摸"
      }
    },

    render() {
        return (
            <View style={styles.container}>

                <TouchableOpacity activeOpacity={0.4}
                    onPress={()=>this.loginPress("点击")}
                    onPressIn={()=>this.loginPress("按下")}
                    onPressOut={()=>this.loginPress("离开")}
                    onLongPress={()=>this.loginPress("长按")}

                >
                    <View style={styles.loginViewStyle}>
                        <Text style={styles.logTextStyle}>事件</Text>
                    </View>
                </TouchableOpacity>
                <View>
                    <Text ref="textViewSt">{this.state.title}</Text>
                </View>
            </View>
        );
    },

    loginPress(event){
        // console.log("click");
        // AlertIOS.alert("CLick");
        this.setState({
            title:event
        })
        this.refs.textViewSt.style = {color:"red"}
    }

});

// class LoginView extends Component {
//     render() {
//         return (
//             <View style={styles.container} onPress={()=>{this.loginPress}}>
//                 <Image source={require("./qq.jpeg")} style={styles.imageStyle} />
//                 <TextInput style={styles.inputAccountStyle} keyboardType={"number-pad"}
//                 placeholder={"请输入QQ号"} clearButtonMode={"while-editing"}
//                 >
//
//                 </TextInput>
//                 <TextInput password={true} style={styles.inputAccountStyle2}
//                 placeholder={"请输入密码"}
//                 >
//
//                 </TextInput>
//                 <TouchableOpacity activeOpacity={0.4}>
//                     <View style={styles.loginViewStyle}>
//                     <Text style={styles.logTextStyle}>登录</Text>
//                     </View>
//                 </TouchableOpacity>
//
//                 <View style={styles.bottomStyle}>
//                     <Text style={styles.noLoginStyle}>无法登录</Text>
//                     <Text>忘记密码</Text>
//                 </View>
//             </View>
//         );
//     }
//
//     loginPress(){
//         console.log("click");
//     }
// }

const styles = StyleSheet.create({
    container: {
        backgroundColor:'#dddd',
          flex:1,
        // flexDirection:'row',
        // marginTop:25,
        // justifyContent:'center',
        alignItems:'center'
    },
    inputAccountStyle:{
      backgroundColor:"white",
        width:Dimensions.get("window").width,
        height:40,
        borderWidth:1,
        borderColor:"#c2c2c2",
        marginTop:20,
        textAlign:"center"
    },
    inputAccountStyle2:{
        backgroundColor:"white",
        width:Dimensions.get("window").width,
        height:40,
        marginTop:-1,
        borderWidth:1,
        // borderBottomWidth:1,
        borderColor:"#c2c2c2",
        // borderBottomWidth:1,
        // marginTop:20,
        textAlign:"center"
    },
    imageStyle:{
        width:100,
        height:100,
        marginTop:120,
        // backgroundColor:"red"
    },
    loginViewStyle:{
        marginTop:40,
        backgroundColor:"#2323ff",
        width:Dimensions.get("window").width - 30,
        height:40,
        borderBottomLeftRadius:5,
        borderBottomRightRadius:5,
        borderTopLeftRadius:5,
        borderTopRightRadius:5,
        justifyContent:"center",
        alignItems:"center",
    },
    logTextStyle:{
        color:"white",
        fontSize:20,
    },
    bottomStyle:{
        flexDirection:"row",
        // backgroundColor:"red",
        width:Dimensions.get("window").width,
        height:40,
        // marginTop:20,
        // justifyContent:"center",
        alignItems:"center",
        padding:15,
        justifyContent:"space-between",
    },
    noLoginStyle:{

    }

});

module.exports = LoginView;