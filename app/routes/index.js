//Developer: Pablo Larios

import React, { Component } from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PersistGate } from 'redux-persist/integration/react';

//Import views
import HomeScreen from '../modules/Home'
import PhotoListScreen from '../modules/PhotoList'
import PhotoDetailScreen from '../modules/PhotoDetail'

//const navigation
const Stack = createNativeStackNavigator();

//connection whit redux
import { initStore } from '../redux/store';
import { connect, Provider } from 'react-redux';
const store = initStore();

//import styles 
const themeClasses = require('../styles').themeClasses;

export default class Routes extends Component {
  constructor(properties) {
    super(properties);
  }

  render() {
    return (
         <Provider store={store}>
            <NavigationContainer>
              <Stack.Navigator 
                initialRouteName="Home"
                screenOptions={{
                  headerShown: false
                }}
              >
                <Stack.Screen 
                  name="Home" 
                  component={HomeScreen} 
                />
                <Stack.Screen 
                  name="PhotoList" 
                  component={PhotoListScreen} 
                />
                <Stack.Screen 
                  name="PhotoDetail" 
                  component={PhotoDetailScreen} 
                />
              </Stack.Navigator>
            </NavigationContainer>
         </Provider>
    );
  }
}
