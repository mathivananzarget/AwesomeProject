import React, { Component } from 'react';
import ReactNative from 'react-native';

import Timeline from 'react-native-timeline-listview';
var tts = require('react-native-android-speech');


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

export default class PlayReciepe extends Component {
constructor(props){
    super(props)
    this.onEventPress = this.onEventPress.bind(this)
    this.renderSelected = this.renderSelected.bind(this)
    this.renderDetail = this.renderDetail.bind(this);
    this.textToSpeech=this.textToSpeech.bind(this);
  	this.initTime= Date.now();
  	this.counter=0;
  	console.log("init in play ");
  	this.data=[];
  	if(this._timer){
  		clearInterval(this._timer);
  	}
    this.dataset ={"briyani" : [
      {
        time: '0', 
        timeInt:0,
        isActive:false,
        title: 'Archery Training', 
        description: 'The briyani Beginner Archery and Beginner Crossbow course does not require you to bring any equipment, since everything you need will be provided for the course. ',
        lineColor:'#009688', 
        imageUrl: 'https://cloud.githubusercontent.com/assets/21040043/24240340/c0f96b3a-0fe3-11e7-8964-fe66e4d9be7a.jpg'
      },
      {
        time: '1', 
        timeInt:1,
        isActive:false,
        title: 'Play Badminton', 
        description: 'Badminton is a racquet sport played using racquets to hit a shuttlecock across a net.', 
        imageUrl: 'https://cloud.githubusercontent.com/assets/21040043/24240405/0ba41234-0fe4-11e7-919b-c3f88ced349c.jpg'
      },
      {
        time: '2', 
        timeInt:1,
        isActive:false,
        description: 'Team sport played between two teams of eleven players with a spherical ball. ',
        title: 'Lunch'
              },
      {
        time: '3', 
        timeInt:1,
        isActive:false,
        title: 'Watch Soccer', 
        description: 'Team sport played between two teams of eleven players with a spherical ball. ',
        lineColor:'#009688', 
        imageUrl: 'https://cloud.githubusercontent.com/assets/21040043/24240419/1f553dee-0fe4-11e7-8638-6025682232b1.jpg'
      },
      {
        time: '4',
        timeInt:1,
        isActive:false, 
        title: 'Go to Fitness center', 
        description: 'Look out for the Best Gym & Fitness Centers around me :)', 
        imageUrl: 'https://cloud.githubusercontent.com/assets/21040043/24240422/20d84f6c-0fe4-11e7-8f1d-9dbc594d0cfa.jpg'
      }
    ] ,
"sambar" : [
      {
        time: '0', 
        timeInt:0,
        isActive:false,
        title: 'Archery Training', 
        description: 'The sambar Beginner Archery and Beginner Crossbow course does not require you to bring any equipment, since everything you need will be provided for the course. ',
        lineColor:'#009688', 
        imageUrl: 'https://cloud.githubusercontent.com/assets/21040043/24240340/c0f96b3a-0fe3-11e7-8964-fe66e4d9be7a.jpg'
      },
      {
        time: '1', 
        timeInt:1,
        isActive:false,
        title: 'Play Badminton', 
        description: 'Badminton is a racquet sport played using racquets to hit a shuttlecock across a net.', 
        imageUrl: 'https://cloud.githubusercontent.com/assets/21040043/24240405/0ba41234-0fe4-11e7-919b-c3f88ced349c.jpg'
      },
      {
        time: '2', 
        timeInt:1,
        isActive:false,
        description: 'Team sport played between two teams of eleven players with a spherical ball. ',
        title: 'Lunch'
              },
      {
        time: '3', 
        timeInt:1,
        isActive:false,
        title: 'Watch Soccer', 
        description: 'Team sport played between two teams of eleven players with a spherical ball. ',
        lineColor:'#009688', 
        imageUrl: 'https://cloud.githubusercontent.com/assets/21040043/24240419/1f553dee-0fe4-11e7-8638-6025682232b1.jpg'
      },
      {
        time: '4',
        timeInt:1,
        isActive:false, 
        title: 'Go to Fitness center', 
        description: 'Look out for the Best Gym & Fitness Centers around me :)', 
        imageUrl: 'https://cloud.githubusercontent.com/assets/21040043/24240422/20d84f6c-0fe4-11e7-8f1d-9dbc594d0cfa.jpg'
      }
    ] ,
"muttonbriyani" : [
      {
        time: '0', 
        timeInt:0,
        isActive:false,
        title: 'Archery muttonbriyani Training', 
        description: 'The Beginner muttonbriyani Archery and Beginner Crossbow course does not require you to bring any equipment, since everything you need will be provided for the course. ',
        lineColor:'#009688', 
        imageUrl: 'https://cloud.githubusercontent.com/assets/21040043/24240340/c0f96b3a-0fe3-11e7-8964-fe66e4d9be7a.jpg'
      },
      {
        time: '1', 
        timeInt:1,
        isActive:false,
        title: 'Play Badminton', 
        description: 'Badminton is a racquet sport played using racquets to hit a shuttlecock across a net.', 
        imageUrl: 'https://cloud.githubusercontent.com/assets/21040043/24240405/0ba41234-0fe4-11e7-919b-c3f88ced349c.jpg'
      },
      {
        time: '2', 
        timeInt:1,
        isActive:false,
        description: 'Team sport played between two teams of eleven players with a spherical ball. ',
        title: 'Lunch'
              },
      {
        time: '3', 
        timeInt:1,
        isActive:false,
        title: 'Watch Soccer', 
        description: 'Team sport played between two teams of eleven players with a spherical ball. ',
        lineColor:'#009688', 
        imageUrl: 'https://cloud.githubusercontent.com/assets/21040043/24240419/1f553dee-0fe4-11e7-8638-6025682232b1.jpg'
      },
      {
        time: '4',
        timeInt:1,
        isActive:false, 
        title: 'Go to Fitness center', 
        description: 'Look out for the Best Gym & Fitness Centers around me :)', 
        imageUrl: 'https://cloud.githubusercontent.com/assets/21040043/24240422/20d84f6c-0fe4-11e7-8f1d-9dbc594d0cfa.jpg'
      }
    ],
"chickenrice" : [
      {
        time: '0', 
        timeInt:0,
        isActive:false,
        title: 'Archery Training', 
        description: 'The chickenrice Beginner Archery and Beginner Crossbow course does not require you to bring any equipment, since everything you need will be provided for the course. ',
        lineColor:'#009688', 
        imageUrl: 'https://cloud.githubusercontent.com/assets/21040043/24240340/c0f96b3a-0fe3-11e7-8964-fe66e4d9be7a.jpg'
      },
      {
        time: '1', 
        timeInt:1,
        isActive:false,
        title: 'Play Badminton', 
        description: 'Badminton is a racquet sport played using racquets to hit a shuttlecock across a net.', 
        imageUrl: 'https://cloud.githubusercontent.com/assets/21040043/24240405/0ba41234-0fe4-11e7-919b-c3f88ced349c.jpg'
      },
      {
        time: '2', 
        timeInt:1,
        isActive:false,
        description: 'Team sport played between two teams of eleven players with a spherical ball. ',
        title: 'Lunch'
              },
      {
        time: '3', 
        timeInt:1,
        isActive:false,
        title: 'Watch Soccer', 
        description: 'Team sport played between two teams of eleven players with a spherical ball. ',
        lineColor:'#009688', 
        imageUrl: 'https://cloud.githubusercontent.com/assets/21040043/24240419/1f553dee-0fe4-11e7-8638-6025682232b1.jpg'
      },
      {
        time: '4',
        timeInt:1,
        isActive:false, 
        title: 'Go to Fitness center', 
        description: 'Look out for the Best Gym & Fitness Centers around me :)', 
        imageUrl: 'https://cloud.githubusercontent.com/assets/21040043/24240422/20d84f6c-0fe4-11e7-8f1d-9dbc594d0cfa.jpg'
      }
    ]};
     console.log(" state "+this.props.navigation.state);
  	const { params } = props.navigation.state;
	console.log("got data " ,params.type);
	if(params.type){
		this.data=this.dataset[params.type];
	}
	console.log("data ",this.data);
    console.log("init end in play ");
    this.state = {selected: null};
  } 

 static navigationOptions = ({ navigation }) => ({
    title: `Playing ${navigation.state.params.type}`,
  });

 textToSpeech(textS){
 	if(!textS){
 		textS="go ahead";
 	}
  tts.getLocales().then(locales=>{
    console.log(locales)
  });
  tts.speak({
    text:textS, // Mandatory
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

  onEventPress(data){
    this.setState({selected: data})
  }

  renderSelected(){
      if(this.state.selected)
        return <Text style={{marginTop:10}}>Selected Step: {this.state.selected.title} at {this.state.selected.time} Minutes</Text>
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

  componentWillMount() {

  }

  componentWillUnmount() {

  }
  componentDidMount() {
  	console.log("componentDidMount ");

  var that=this;
  var sel;
  that._timer = setInterval(() => {
  	if(that.counter>=that.data.length){
  		console.log("clear interval");
  		clearInterval(that._timer);
  	}
  	  sel=that.data[that.counter];
  	 // alert(that.initTime+": "+sel.timeInt+" : "+": "+Date.now());
  	 if(sel.timeInt!== 'undefined' && sel.timeInt!=null){
  	 console.log("sel "+sel.timeInt);
  	 console.log(that.initTime+": "+sel.timeInt+" : "+": "+Date.now()+" intr "+(that.initTime+(sel.timeInt*60000)));
  	  if((that.initTime+(sel.timeInt*60000))<=Date.now()){
  	  	that.textToSpeech(that.data[that.counter].description);
  	  console.log(that.initTime+": "+sel.timeInt+" : "+": "+Date.now());
  	  console.log("second one got "+that.counter);
  	  that.data[that.counter].isActive=true;
  	  that.setState({selected:that.data[that.counter] });
  	  that.initTime= Date.now();
  	  that.counter++;
  	  }
  	  }
  	  else {
  	  	clearInterval(that._timer);
  	  }

    }, 300);
}

  render() {
    return (
           <Container style={{ backgroundColor: '#FFF',margin:8}}>
        {this.renderSelected()}
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