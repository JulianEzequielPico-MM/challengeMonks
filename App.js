/**
 * Test Media.Monks
 * by: Pablo Larios
 */

import React from 'react';
import { 
  StatusBar, 
  View 
} from 'react-native'
// import SplashScreen from 'react-native-splash-screen';

//import routes of app
import Routes from './app/routes/index'

//import colors
const colors = require('./app/styles').colors;

export default class App extends React.Component{
  constructor(){
    super()
  }

  componentDidMount(){
    // SplashScreen.hide()
 }

  render(){
    return(
        <View style={{flex:1}}>
          <StatusBar 
            backgroundColor={colors.secondaryBlack}
            barStyle={'light-content'}
          />
          <Routes/>
        </View>
    )
  }
}
