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
const styles = StyleSheet.create({
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
  iconButtonIcon:{
    fontSize: 22,
    margin:8,
    height: 42
  }
});

export default class HomeScreen extends Component {
    static contextTypes = {
    isLoggedIn: React.PropTypes.bool,
    login: React.PropTypes.func,
    logout: React.PropTypes.func,
    props: React.PropTypes.object
    };
  constructor(props) {
      super(props);
      this.userLogout=this.userLogout.bind(this);
           this.clickMe=this.clickMe.bind(this);

  }
    static navigationOptions = {
header: null
  };
  clickMe(type) {
    
    const { navigate } = this.props.navigation;
    if(type=='create'){
          navigate('Create',{'profileData':this.props});
    } else if(type=='play'){
          navigate('Play',{'profileData':this.props});
    }
  }


  userLogout(){
    var _this = this;

  }
render(){

        return (
          <Container style={{ backgroundColor: '#373D4B'}}>
                <Content>
                <Grid>
                <Row style={{ backgroundColor: '#373D4B', height: 200 }}>
                <Grid style={{margin:9}}>
                	<Row style={{ height: 125 }}>
                	<Grid>
                  <Col style={{ alignItems:'center',justifyContent: 'center' }}>
                      <TouchableHighlight onPress={()=>{}}>
                      <View style={{backgroundColor: '#9D8A6C',width: 40,alignItems:'center',  height: 40, borderRadius: 30}}>
                      <Icon size={30}  title="messages" ios="ios-mail" md="md-mail" name="md-mail" style={styles.iconButtonIcon} />
                      </View>
                      </TouchableHighlight>
                  </Col>
                	<Col style={{alignItems:'center',justifyContent: 'center'}}>
                      <Grid>
                      <Row style={{height: 90}}>
                      </Row>
                      <Row>
                      <Text style={{color:'#9D8A6C',alignItems:'center'}}>hai gce                       </Text>
                       </Row>
                	     </Grid>
                  </Col>
                	 <Col style={{ alignItems:'center',justifyContent: 'center' }}>
                      <TouchableHighlight onPress={()=>{
                        this.userLogout()
                        }}>
                      <View style={{backgroundColor: '#9D8A6C',width: 40,alignItems:'center',  height: 40, borderRadius: 30}}>
                      <Icon size={30}  title="logout" ios="ios-log-out" md="md-log-out" name="md-log-out" style={styles.iconButtonIcon} />
                      </View>
                      </TouchableHighlight>
                	</Col>

                	</Grid>
                	</Row>
                	<Row style={{backgroundColor:'#1D2331', height: 65 }}>
                	<Button large info style={{margin:2,backgroundColor: '#373D4B',marginRight:1,marginLeft:3,width:111}}>
                	 <Text>5</Text>
                	<Text style={{fontSize:12}}>Pending</Text></Button>
                	<Button large info style={{margin:2,backgroundColor: '#373D4B',marginRight:1,marginLeft:1,width:111}}>
                	<Text>15</Text><Text style={{fontSize:12}}>Finished</Text></Button>
                	<Button large info style={{margin:2,backgroundColor: '#373D4B',marginRight:1,marginLeft:1,width:111}}>
                	<Text>25</Text><Text style={{fontSize:12}}>Coming</Text></Button>
                	</Row>
                </Grid>
                </Row>
                <Row style={{ backgroundColor: '#FFF8EE' , margin:10,marginTop:0,height:400  }}>
                <Col>
                    <ListItem style={{ height: 80 }}>
                        <Text onPress={this.clickMe.bind(this,'create')}>Thaveethu name</Text>
                    </ListItem>
                    <ListItem style={{ height: 80 }}>
                        <Text>Clean dustbin now noww</Text>
                    </ListItem>
                    <ListItem style={{ height: 80 }}>
                        <Text>Buy Vegie</Text>
                    </ListItem>
                    <ListItem style={{ height: 80 }}>
                        <Text>Clean Room</Text>
                    </ListItem>
                    </Col>
                    </Row>
                  </Grid>
                </Content>
        <ActionButton buttonColor="rgba(231,76,60,1)">
          <ActionButton.Item buttonColor='#9b59b6' title="New Task" onPress={() => console.log("notes tapped!")}>
            <Icon name="md-create" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#3498db' title="Notifications" onPress={() => {}}>
            <Icon name="md-notifications-off" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#1abc9c' title="All Tasks" onPress={() => {}}>
            <Icon name="md-done-all" style={styles.actionButtonIcon} />
          </ActionButton.Item>
        </ActionButton>
            </Container>
      )
    }

}