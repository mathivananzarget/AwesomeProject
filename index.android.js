/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import ReactNative from 'react-native';

import {
  StackNavigator,
} from 'react-navigation';

import {
  AppRegistry,
  StyleSheet,
  Button,
  Text,
  View
} from 'react-native';

import  HomeScene from './src/scenes/HomeScene';
import  CreateReciepe from './src/scenes/CreateReciepe';
import  PlayReciepe from './src/scenes/PlayReciepe';
const styles = require('./src/style/styles.js');


export default class AwesomeProject extends Component {

  constructor(props){
   super(props);
     this.clickMe=this.clickMe.bind(this);
  }

  clickMe(type) {
    alert("hai"+type);
    const { navigate } = this.props.navigation;
    if(type=='create'){
          navigate('Create',{'profileData':this.props});
    } else if(type=='play'){
          navigate('Play',{'profileData':this.props});
    }
  }
  render() {
    var testData={name:'thaveethu VIGNESH',age:24};
    return (
      <View style={styles.container}>
      <HomeScene data={testData} />
        <Button
          onPress={this.clickMe.bind(this,'create')}
          title="Go Create"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />

        <Button
          onPress={this.clickMe.bind(this,'play')}
          title="Go Play"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />

        </View>
    );
  }
}

const App = StackNavigator({
  Home :{screen: AwesomeProject},
  Create: {screen: CreateReciepe},
  Play :{screen: PlayReciepe}
  });

AppRegistry.registerComponent('AwesomeProject', () => App);