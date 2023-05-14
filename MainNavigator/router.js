import React from 'react'

import { StyleSheet, Image, Text, View, ImageBackground } from "react-native"
import { MagnifyingGlassIcon, UserCircleIcon , UsersIcon, InboxArrowDownIcon, BookmarkIcon} from 'react-native-heroicons/outline';

import {createMaterialTopTabNavigator} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';



const Tabs = createMaterialTopTabNavigator(
    {
        Contacts: {
            screen: Contacts,
            navigationOptions: {
              tabBarLabel: ({tintColor}) => (
                <View style={styles.iconCOntainer}>
                  <UserCircleIcon size={24} color='#717171'/>
                  <Text style={{color: tintColor}}>Contacts</Text>
                </View>
              ),
            },
          },

          Requests: {
            screen: Requests,
            navigationOptions: {
              tabBarLabel: ({tintColor}) => (
                <View style={styles.iconCOntainer}>
                  <BookmarkIcon size={24} color='#717171'/>
                  <Text style={{color: tintColor}}>Requests</Text>
                </View>
              ),
            },
          },

          MyFriends: {
            screen: MyFriends,
            navigationOptions: {
              tabBarLabel: ({tintColor}) => (
                <View style={styles.iconCOntainer}>
                  <UsersIcon size={24} color='#717171'/>
                  <Text style={{color: tintColor}}>MyFriends</Text>
                </View>
              ),
            },
          },



    },

    {
        initialRouteName: 'Home',
        lazyLoad: true,
        tabBarPosition: 'top',
        swipeEnabled: true,
        tabBarOptions: {
          style: {
            height: 70,
            backgroundColor: '#40404c',
            paddingBottom: 3,
            paddingTop: 3,
          },
          indicatorStyle: {
            backgroundColor: '#fff',
            elevation: 10,
          },
          activeTintColor: '#fff',
          inactiveTintColor: 'gray',
        },
      },

);

const MainScreenNavigator = createStackNavigator({
    Tabs: {
      screen: Tabs,
      navigationOptions: {
        title: 'My App',
        headerStyle: {
          backgroundColor: '#2b2b39',
        },
        headerTitleStyle: {
          color: '#fff',
        },
      },
    },
  });

export default createAppContainer(MainScreenNavigator);




const styles = StyleSheet.create({


  iconCOntainer: {
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },  

  Search: {
    width: 342,
    height: 48,
    alignContent: "center",
    paddingHorizontal: 80,
    paddingTop: 12,
    paddingBottom: 12,
    borderRadius: 48,
    
    backgroundColor: "#FFFF00",
  },

  GroupSearch: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
    height: "100%",
    
  },

  SearchFriendsUsers: {
    color: "#717171",
    fontFamily: "Nunito-Medium",
    fontWeight: "700",
    alignItems: "flex-start",
    
  },

  UpperNavBar: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: 127,
    paddingLeft: 24,
    paddingRight: 24,
    paddingTop: 8,
    paddingBottom: 71,
    boxSizing: "border-box",
    backgroundColor: "#FFC0CB",
  },

  IconGroupRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 40,
    paddingTop: 18,
    width: "100%",
    boxSizing: "border-box",
  },
  ContactColumn: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "100%",
    paddingBottom: 3,
    boxSizing: "border-box",
  },

  Contacts: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    color: "#717171",
    fontFamily: "Nunito-Light",
    fontWeight: "400",
    textAlign: "center",
  },
  MyfriendsColumn: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "100%",
    paddingBottom: 7,
    boxSizing: "border-box",
    borderBottomColor: "#000000",
    borderBottomWidth: 3,
  },
 
  MyFriends: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    color: "#717171",
    fontFamily: "Nunito-Light",
    fontWeight: "700",
    textAlign: "center",
  },
  RequestColumn: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "100%",
    paddingBottom: 3,
    boxSizing: "border-box",
  },
 
  Requests: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    color: "#717171",
    fontFamily: "Nunito-Light",
    fontWeight: "400",
    textAlign: "center",
  },

  MiddleContent: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: 127,
    paddingLeft: 24,
    paddingRight: 24,
    paddingTop: 8,
    paddingBottom: 71,
    boxSizing: "border-box",
    backgroundColor: "#DDDDDD",
  },

  BottanNavBar: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 51,
    paddingLeft: 26,
    paddingRight: 26,
    paddingTop: 6,
    paddingBottom: 5,
    borderColor: "#FF0000",
    boxSizing: "border-box",
    backgroundColor: "#FF0000",
  },

})