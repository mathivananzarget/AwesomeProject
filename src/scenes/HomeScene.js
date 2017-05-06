import React, { Component } from 'react';
import ReactNative from 'react-native';

import {
  AppRegistry,
  StyleSheet,
  Button,
  Text,
  View
} from 'react-native';
 var tts = require('react-native-android-speech');
 const styles = require('../style/styles.js');

export default class HomeScene extends Component {

  constructor(props){
   super(props);
     this.clickMe=this.clickMe.bind(this);
  }

  clickMe() {
    const { navigate } = this.props.navigation;
    navigate('Create',{'profileData':this.props});
  }

   render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
  
        <Text style={styles.instructions}>
          To get started, edit index.android.js neww oi {this.props.data.name}
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
      </View>
    );
  }

}