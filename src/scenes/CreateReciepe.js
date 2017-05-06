import React, { Component } from 'react';
import ReactNative from 'react-native';

const {
  AppRegistry,
  ListView,
  StyleSheet,
  Alert,
  TextInput,
  AsyncStorage,
  View,
  Image,
  ToolbarAndroid,
  TouchableHighlight} = ReactNative;

import { Container, Content, ListItem, Text ,Button, Thumbnail} from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

 var tts = require('react-native-android-speech');
 const styles = require('../style/styles.js');

  import {
  StackNavigator,
} from 'react-navigation';

export default class CreateReciepe extends Component {

constructor(props){
   super(props);
     this.clickMe=this.clickMe.bind(this);
  }
    static navigationOptions = {
title: "Create Your Own Reciepe"
  };

  clickMe() {
    const { navigate } = this.props.navigation;
    navigate('Home',{'profileData':this.props});
  }
   render() {
    return (
      <Container style={{ backgroundColor: '#373D4B'}}>
                <Content>
                <Grid>
                <Row style={{ backgroundColor: '#FFF8EE' , margin:10,marginTop:0,height:540  }}>

                <Text style={styles.instructions}>
		          create page
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
                
                  </Row>
                  </Grid>
                </Content>
            </Container>
    );
  }
}