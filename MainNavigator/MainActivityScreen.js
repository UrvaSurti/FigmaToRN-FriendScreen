import React from 'react';
//import { Text, View } from "react-native";

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import Ionicons from 'react-native-vector-icons/Ionicons';
import { HomeIcon, UsersIcon, PlusIcon, BookmarkIcon, UserIcon } from 'react-native-heroicons/outline';

//Screens 
import HomeScreen from './Screens/HomeScreen'
import FriendsScreen from './Screens/FriendsScreen'
import CreateScreen from './Screens/CreateScreen'
import ListsScreen from './Screens/ListsScreen'
import ProfileScreen from './Screens/ProfileScreen';


//Screens Name 
const HomeName = 'Home';
const FriendsName = 'Friends';
const CreateName = 'Create';
const ListsName = 'Lists';
const ProfileName = 'Profile';


// Bottom Screen Navigator 

const Tab = createBottomTabNavigator();

export default function MainActivityScreen(){
    return(
        <NavigationContainer>
      <Tab.Navigator
        initialRouteName={FriendsName}
        screenOptions={({ route }) => ({
          
          headerShown: false,
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'grey',
          tabBarLabelStyle: { paddingBottom: 10, fontSize: 10 },
          tabBarStyle: { padding: 10, height: 70},

          tabBarStyle: [
            {
              display: "flex",
              padding: 5,
              height: 70,

            },
            null
          ],
            


          tabBarIcon: ({ color, size }) => {
            
            
            let rn = route.name;
            
            if (rn === HomeName) {
              //iconName = focused ? 'HomeIcon' : 'HomeIcon';
              return <HomeIcon size={size} color={color} />;

            } else if (rn === FriendsName) {
              //iconName = focused ? 'UsersIcon' : 'UsersIcon';
              return <UsersIcon size={size} color={color} />;

            } else if (rn === CreateName) {
              //iconName = focused ? 'PlusIcon' : 'PlusIcon';
              return <PlusIcon size={size} color={color} />;

            } else if (rn === ListsName) {
              //iconName = focused ? 'Bookmark' : 'BookmarkIcon';
              return <BookmarkIcon size={size} color={color} />;

            } else if (rn === ProfileName) {
              //iconName = focused ? 'User' : 'UserIcon';
              return <UserIcon size={size} color={color} />;
  
            }

            // You can return any component that you like here!
            //return <iconName size={size} color={color} />;

            },

        })}>

        <Tab.Screen name={HomeName} component={HomeScreen} />
        <Tab.Screen name={FriendsName} component={FriendsScreen} />
        <Tab.Screen name={CreateName} component={CreateScreen} />
        <Tab.Screen name={ListsName} component={ListsScreen} />
        <Tab.Screen name={ProfileName} component={ProfileScreen} />

      </Tab.Navigator>
    </NavigationContainer>


    );
}