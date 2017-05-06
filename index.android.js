/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import ReactNative from 'react-native';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';


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
  import {
  StackNavigator,
} from 'react-navigation';
import { Container, Content, ListItem, Text ,Button, Thumbnail} from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

import  HomeScene from './src/scenes/HomeScene';
import  CreateReciepe from './src/scenes/CreateReciepe';
import  PlayReciepe from './src/scenes/PlayReciepe';
const styles = require('./src/style/styles.js');


export default class AwesomeProject extends Component {

state: State;
  _timer: Timer;

  constructor(props){
   super(props);
     this.clickMe=this.clickMe.bind(this);
      this.state = {
    animating: true,
    loading:true,
    newTask: ""
  };

  }

  static navigationOptions = {
header: null
  };

  componentWillMount() {

  }

  componentWillUnmount() {
    //alert("called");
    clearTimeout(this._timer);

  }

  componentDidMount() {
  // start listening for firebase updates
    this.setToggleTimeout();
}

 setToggleTimeout() {
    this._timer = setTimeout(() => {
      this.setState({animating: !this.state.animating});
      clearTimeout(this._timer);
    }, 1000);
  }

  clickMe(type,resp) {
    const { navigate } = this.props.navigation;
   // alert(resp);
    if(type=='create'){
          navigate('Create',{'profileData':this.props});
    } else if(type=='play'){
          navigate('Play',{'type':resp});
    }
  }
  render() {
    var testData={name:'thaveethu VIGNESH',age:24};
    const content =  <View style={styles.container}>
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
    return (
      <Container style={{ backgroundColor: '#373D4B'}}>
                <Content>
                <Grid>
                <Row style={{ backgroundColor: '#373D4B', height: 80 }}>
                <Grid style={{margin:9}}>
                  
                  <Row style={{backgroundColor:'#1D2331', height: 65 }}>
                  <Button large info style={{margin:2,backgroundColor: '#373D4B',marginRight:1,marginLeft:3,width:111}}>
                   <Text>5</Text>
                  <Text style={{fontSize:12}}>My Reciepe</Text></Button>
                  <Button large info style={{margin:2,backgroundColor: '#373D4B',marginRight:1,marginLeft:1,width:111}}>
                  <Text>15</Text><Text style={{fontSize:12}}>Cooked</Text></Button>
                  <Button large info style={{margin:2,backgroundColor: '#373D4B',marginRight:1,marginLeft:1,width:111}}>
                  <Text>25</Text><Text style={{fontSize:12}}>Favourite</Text></Button>
                  </Row>
                </Grid>
                </Row>
                <Row style={{ backgroundColor: '#FFF8EE' , margin:10,marginTop:0,height:440  }}>
                <Col>
                    <ListItem onPress={this.clickMe.bind(this,'play','briyani')} style={{ height: 80 }}>
                        <Text>Briyani</Text>
                    </ListItem>
                    <ListItem onPress={this.clickMe.bind(this,'play','sambar')} style={{ height: 80 }}>
                        <Text>Sambar</Text>
                    </ListItem>
                    <ListItem onPress={this.clickMe.bind(this,'play','muttonbriyani')} style={{ height: 80 }}>
                        <Text>Mutton Briyani</Text>
                    </ListItem>
                    <ListItem onPress={this.clickMe.bind(this,'play','chickenrice')} style={{ height: 80 }}>
                        <Text>Chicken Rice</Text>
                    </ListItem>
                    </Col>
                    </Row>
                  </Grid>
                </Content>
        <ActionButton buttonColor="rgba(231,76,60,1)">
          <ActionButton.Item buttonColor='#9b59b6' title="New Reciepe" onPress={this.clickMe.bind(this,'create')}>
            <Icon name="md-create" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          
        </ActionButton>
            </Container>
    );
  }
}

const App = StackNavigator({
  Home :{screen: AwesomeProject},
  Create: {screen: CreateReciepe},
  Play :{screen: PlayReciepe}
  });

AppRegistry.registerComponent('AwesomeProject', () => App);