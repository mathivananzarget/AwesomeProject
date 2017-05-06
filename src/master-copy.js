import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Button,
  Text,
  View
} from 'react-native';
 var tts = require('react-native-android-speech');
 const extStyles = require('./style/styles.js')
export default class CookMaster extends Component {
  constructor(props){
   super(props);
   this.textToSpeech=this.textToSpeech.bind(this);
  }
  textToSpeech(){
  tts.getLocales().then(locales=>{
    console.log(locales)
  });
  tts.speak({
    text:'take 1 kg onion and cut down', // Mandatory
    pitch:1.5, // Optional Parameter to set the pitch of Speech,
    forceStop : false , //  Optional Parameter if true , it will stop TTS if it is already in process
    language : 'en', // Optional Paramenter Default is en you can provide any supported lang by TTS
    country : 'US' // Optional Paramenter Default is null, it provoques that system selects its default
}).then(isSpeaking=>{
    //Success Callback
    console.log(isSpeaking);
}).catch(error=>{
    //Errror Callback
    console.log(error)
});
}
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Button
          onPress={this.textToSpeech}
          title="Learn More"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

