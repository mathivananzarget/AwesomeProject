import React, { Component } from 'react';
import ReactNative from 'react-native';
import Timeline from 'react-native-timeline-listview';
var Slider = require('react-native-slider');

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
var styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
});

  import {
  StackNavigator,
} from 'react-navigation';

export default class CreateReciepe extends Component {

constructor(){
    super()
    this.onEventPress = this.onEventPress.bind(this)
    this.renderSelected = this.renderSelected.bind(this)
    this.renderDetail = this.renderDetail.bind(this)

    this.data = [
      {
        time: '09:00', 
        title: 'Archery Training', 
        description: 'The Beginner Archery and Beginner Crossbow course does not require you to bring any equipment, since everything you need will be provided for the course. ',
        lineColor:'#009688', 
        imageUrl: 'https://cloud.githubusercontent.com/assets/21040043/24240340/c0f96b3a-0fe3-11e7-8964-fe66e4d9be7a.jpg'
      },
      {
        time: '10:45', 
        title: 'Play Badminton', 
        description: 'Badminton is a racquet sport played using racquets to hit a shuttlecock across a net.', 
        imageUrl: 'https://cloud.githubusercontent.com/assets/21040043/24240405/0ba41234-0fe4-11e7-919b-c3f88ced349c.jpg'
      },
      {
        time: '12:00', 
        title: 'Lunch'
              },
      {
        time: '14:00', 
        title: 'Watch Soccer', 
        description: 'Team sport played between two teams of eleven players with a spherical ball. ',
        lineColor:'#009688', 
        imageUrl: 'https://cloud.githubusercontent.com/assets/21040043/24240419/1f553dee-0fe4-11e7-8638-6025682232b1.jpg'
      },
      {
        time: '16:30', 
        title: 'Go to Fitness center', 
        description: 'Look out for the Best Gym & Fitness Centers around me :)', 
        imageUrl: 'https://cloud.githubusercontent.com/assets/21040043/24240422/20d84f6c-0fe4-11e7-8f1d-9dbc594d0cfa.jpg'
      }
    ]
    this.state = {selected: null,inText:'',value: 0};
  } 

  onEventPress(data){
    this.setState({selected: data})
  }

  renderSelected(){
      if(this.state.selected)
        return <Text style={{marginTop:10}}>Selected event: {this.state.selected.title} at {this.state.selected.time}</Text>
  }

  renderDetail(rowData, sectionID, rowID) {
    let title = <Text style={[stylesnew.title]}>{rowData.title}</Text>
    var desc = null
    if(rowData.description && rowData.imageUrl)
      desc = (
        <View style={stylesnew.descriptionContainer}>   
          <Image source={{uri: rowData.imageUrl}} style={stylesnew.image}/>
          <Text style={[stylesnew.textDescription]}>{rowData.description}</Text>
        </View>
      )
    
    return (
      <View style={{flex:1}}>
        {title}
        {desc}
      </View>
    )
  }
  onButtonCall(){
  	alert("Added!");
  	this.setState({inText:''});
  }

  render() {
    return (
       <Container style={{ backgroundColor: '#FFF',margin:8}}>
       
     <Content>
        <Grid>
        <Row style={{ backgroundColor: '#FFF8EE'}}>
         {this.renderSelected()}
         </Row>
        <Row style={{ backgroundColor: '#FFF8EE', height: 200 }}>
        <Timeline 
          style={stylesnew.list}
          data={this.data}
          circleSize={20}
          circleColor='rgba(0,0,0,0)'
          lineColor='rgb(45,156,219)'
          timeContainerStyle={{minWidth:52, marginTop: -5}}
          timeStyle={{textAlign: 'center', backgroundColor:'#ff9797', color:'white', padding:5, borderRadius:13}}
          descriptionStyle={{color:'gray'}}
          options={{
            style:{paddingTop:5}
          }}
          onEventPress={this.onEventPress}
          renderDetail={this.renderDetail}
        />
		</Row>
		 
		 </Grid>
		<Grid style={{ backgroundColor: '#FFF',margin:20}}>
		 <Row style={{ backgroundColor: '#FFF',height: 120,margin:10}}>
		<View style={styles.container}>
        <Slider
          value={this.state.value}
          onValueChange={(value) => this.setState({value})} />
        <Text>Time: {this.state.value}</Text>
      </View>
          </Row>
          </Grid>
		<Grid style={{ backgroundColor: '#FFF',margin:20}}>
		 
		 <Row style={{ backgroundColor: '#FFF',height: 100}}>
		 <Grid>
              <Col>
			<TextInput
	        style={{height: 40}}
	        onChangeText={(inText) => this.setState({inText})}
	        value={this.state.inText}
	      />
	      </Col>
	      <Col>
	      <Button
            onPress={this.onButtonCall.bind(this)}
            title="Ok!"
            backgroundColor='#9b59b6'
            color="#9b59b6"

            accessibilityLabel="Next!">
            <Text>Next</Text></Button>
	      </Col>
	      </Grid>
		 </Row>
		 </Grid>
        </Content>
            </Container>
    );
  }

}
const stylesnew = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
	paddingTop:65,
    backgroundColor:'white'
  },
  list: {
    flex: 1,
    marginTop:20,
  },
  title:{
    fontSize:16,
    fontWeight: 'bold'
  },
  descriptionContainer:{
    flexDirection: 'row',
    paddingRight: 50
  },
  image:{
    width: 50,
    height: 50,
    borderRadius: 25
  },
  textDescription: {
    marginLeft: 10,
    color: 'gray'
  }
});