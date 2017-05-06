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

  import {
  StackNavigator,
} from 'react-navigation';

export default class PlayReciepe extends Component {

constructor(props){
   super(props);
     this.clickMe=this.clickMe.bind(this);
  }

  clickMe() {
    const { navigate } = this.props.navigation;
    navigate('Home',{'profileData':this.props});
  }
   render() {
    return (
      <View style={styles.container}>
        <Text style={styles.instructions}>
          Play page
        </Text>
           <Button
          onPress={this.clickMe.bind(this,'play')}
          title="Go Back"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
      </View>
    );
  }
}