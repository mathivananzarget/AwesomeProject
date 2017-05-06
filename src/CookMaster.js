import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Button,
  Text,
  View
} from 'react-native';

import HomeScene from './scenes/HomeScene'

export default class CookMaster extends Component {
  render() {
    var testData={name:'thaveethu',age:24};
    return (
      <HomeScene data={testData} />
    );
  }
}


