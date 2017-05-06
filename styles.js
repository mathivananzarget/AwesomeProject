const React = require('react-native')
const {StyleSheet} = React

var styles = StyleSheet.create({
  container: {
    backgroundColor: '#F6F6F6',
    flex: 1,
    flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
  },
  listView: {
    flex: 1,
  },
  textBig: {
     color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  textBigHead: {
    color: '#F13331',
    fontSize: 20,
    fontWeight: 'bold',
  },
  listItem: {
    borderBottomColor: '#eee',
    borderColor: 'gray',
    flexDirection:'row',
    alignItems:'center',
    borderWidth: 1,
    padding:20
  },
  listItemTitle: {
    flex: 6,
    color: '#003',
    fontSize: 16,
  },
  listItemAction: {
    flex: 1,
    width: 40,
    height: 40
  },
  navbar: {
    alignItems: 'center',
    backgroundColor: '#fff',
    borderBottomColor: '#eee',
    borderColor: 'transparent',
    borderWidth: 1,
    justifyContent: 'center',
    height: 54,
    flexDirection: 'row'
  },
  navbarTitle: {
    color: '#444',
    fontSize: 16,
    fontWeight: "500"
  },

    actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
  iconButtonIcon:{
    fontSize: 22,
    margin:8,
    height: 42
  },
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
})

module.exports = styles