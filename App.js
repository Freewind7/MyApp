import React from "react";
import {Text, View, StyleSheet, } from "react-native";
import AppNavigator from "./src/navigators/navigator";
import {AppLoading} from "expo";
import * as Font from "expo-font";


export default class App extends React.Component {

  state = { 
    isFontLoaded : false
  }
  async componentDidMount () {
    await Font.loadAsync ({
      Outfit : require ("./src/fonts/Outfit-Thin.ttf"),
      ZenKakuGothicNew : require ("./src/fonts/ZenKakuGothicNew-Light.ttf"),
    });

  this.setState({isFontLoaded:true});

  }
  
  render () {
    return (
      (this.state.isFontLoaded === true) ? (<AppNavigator/>) : (AppLoading)
    ) 
  }
}
