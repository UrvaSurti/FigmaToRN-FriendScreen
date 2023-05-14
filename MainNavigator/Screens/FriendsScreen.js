import React from 'react';
import { StyleSheet, Image, Text, View, ImageBackground, FlatList } from "react-native"
import { MagnifyingGlassIcon, UserCircleIcon , UsersIcon, InboxArrowDownIcon} from 'react-native-heroicons/outline';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Friends from './Components/Friends';
import FriendsData from '../../assets/data/FriendsData';

function ContactsScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Contacts</Text>
      </View>
    );
  }
  
function RequestsScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Request</Text>
      </View>
    );
  }
  
function MyFriendsScreen() {
    return (
        <View style={styles.myFriendsWrapper} >    
            <View style={styles.InviteFriendBlock}>
                <View style={styles.InviteContentwrapper}>
                    <Text style={styles.InviteFriends}>Invite friends</Text>
                    <Text style={styles.SpielIsBetterWithYou}>
                        Spiel is better with your </Text>
                    <Text style={styles.Closestfriends}>closest friends.
                    </Text>
                </View>
                <View style={styles.InviteFriendLink}>
                    <View style={styles.InviteFriendIcon}>
                        <UsersIcon style={styles.Icon} size={30} color="#717171"/>
                    </View>
                </View>        
            </View>
            <FlatList
              data={FriendsData}
              renderItem={renderFriendsItem}
              keyExtractor={(item) => item.id}
              horizontal={false}
              style={styles.list}
            />
            

        </View>




        
    );
  }

const renderFriendsItem = ({ item }) => {
    return (
        <View style={styles.FriendsScrollView}>
            <Friends image={item.image} title={item.title} username={item.username}/>
        </View>
    )
}

const ContactsName = 'Contacts';
const MyFriendsName = 'My Friends';
const RequestsName = 'Requests';


const Tab = createMaterialTopTabNavigator();

export default function FriendScreen() {

    return (

        <SafeAreaProvider>

         {/* Search upper navigation bar */} 
         <View style={styles.UpperNavBar}> 

         {/* Search Bar */}
          <View style={styles.Search}>
            <View style={styles.GroupSearch}>
              <MagnifyingGlassIcon size={24} color='#717171' />
              <Text style={styles.SearchFriendsUsers}>
                Search friends & users
              </Text>  
            </View>
          </View>
          </View>

        
        {/* Top Screen Navigator */}
        <NavigationContainer  independent={true}>
            <Tab.Navigator
                    
                screenOptions={{
                tabBarActiveTintColor : '#000000',
                tabBarInactiveTintColor : 'grey',
                tabBarStyle : { padding: 0, height: 70},
                tabBarIndicatorcolor: 'red',
                tabBarIndicatorStyle: { backgroundColor:'#000000' ,width: '20%', marginLeft: 25 }
                                        
                }}>
                <Tab.Screen name={ContactsName} component={ContactsScreen} 
                    options={{
                        tabBarIcon: ({color}) => (
                            <UserCircleIcon name='Contacts' size={24} color={color}/>
                            
                        ),
                }}/>
                    
                <Tab.Screen name={MyFriendsName} component={MyFriendsScreen}
                    options={{
                        
                        tabBarIcon: ({color}) => (
                            <UsersIcon name='Contacts' size={24} color={color}/>
                            
                        ),
                }}/>

                <Tab.Screen name={RequestsName} component={RequestsScreen} 
                    options={{
                        tabBarIcon: ({color}) => (
                            <InboxArrowDownIcon size={24} color={color}/>
                            
                        ),
                }}/>
            </Tab.Navigator>
        </NavigationContainer>
        </SafeAreaProvider >
        

        
       
         
    );
};

// Stylesheet for each components 

const styles = StyleSheet.create({

// Search Bar 
  Search: {
    width: 342,
    height: 48,
    alignContent: "center",
    paddingHorizontal: 80,
    paddingTop: 12,
    paddingBottom: 12,
    borderRadius: 48,
    backgroundColor: "#F7F7F7",
  },


//Styling of elements inside the search bar 
  GroupSearch: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },

//Font styling of searchbar
  SearchFriendsUsers: {
    color: "#717171",
    fontFamily: "Nunito-Medium",
    fontWeight: "700",
    alignItems: "flex-start",
    
  },

//styling of nav bar of search area 
  UpperNavBar: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: 40,
    paddingLeft: 24,
    paddingRight: 24,
    paddingTop: 8,
    paddingBottom: 60,
    boxSizing: "border-box",
    backgroundColor: "#FFf",
  },


// Styling of MyFriend Screen
    // Invite friend Block Styling 
  InviteFriends: {
    color: "#000000",
    fontSize: 20,
    lineHeight: 20,
    fontFamily: "Nunito-SemiBold",
    fontWeight: "700",
  },

  SpielIsBetterWithYou: {
    color: "#717171",
    fontSize: 16,
    lineHeight: 16,
    paddingTop: 10,
    fontFamily: "Nunito-LightItalic",
    fontWeight: "400",
  },

  Closestfriends: {
    color: "#717171",
    fontSize: 16,
    lineHeight: 16,
    paddingTop: 5,
    paddingBottom: 10,
    fontFamily: "Nunito-LightItalic",
    fontWeight: "400",
  },

  InviteFriendBlock: { 
    marginBottom: 15,
    backgroundColor: "#FFFFFF",
    borderRadius: 25,
    paddingTop: 20,
    paddingLeft: 20,
    flexDirection: 'row',
    overflow: 'hidden',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },

  InviteFriendLink: {
    alignSelf: 'center',
    justifyContent: 'center',
    marginLeft: 90,
    width: 50,
    height: 50,
    borderRadius: 26,
    marginBottom: 20,
    backgroundColor: "#DDDDDD",
  },

  InviteFriendIcon: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    width: 45,
    height: 45,
    borderRadius: 26,
    marginBottom: 20,
    backgroundColor: "#FFFFFF",
  },
// Styling of My friend Screen Which contians Elemnt of Invite Block and FlatList
  myFriendsWrapper: {

    padding: 25,
    
    
  },
// Styling of Flat list as container 
  List:{
    marginTop: 20,
  }

})