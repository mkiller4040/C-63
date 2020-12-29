import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import HomeScreen from './homeScreen';

export default class App extends Component{
  render(){
    return(
      <View>
        <HomeScreen />
      </View>
    )
  }
}
