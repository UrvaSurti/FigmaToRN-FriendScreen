/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import MainActivityScreen from './MainNavigator/MainActivityScreen';


const Tabs = createMaterialTopTabNavigator()

function App() {

    return (
      <MainActivityScreen/>

         
    );
};


export default App;