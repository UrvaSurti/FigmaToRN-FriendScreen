import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';



const Friends = (props) => {

    return (
        // Container of Each Friends detail (ie Profile photo, name and username)  
        <View style={styles.FriendsDetailsContainer}>
            <Image source={props.image}
                   style={styles.ProfileImage}>
            </Image>
            <View>
                <Text style={styles.FriendsTitleWrapper}>{props.title}</Text>
                <Text style={styles.FriendsusernameWrapper}>{props.username}</Text>
            </View>           
        </View>
    )

}

const styles = StyleSheet.create({

//Styling of each Container     
    ProfileImage: {
        width: 60,
        height: 60,
        borderRadius: 40,
      },

    FriendsDetailsContainer:{

        marginTop: 0,
        paddingVertical: 0,
        paddingHorizontal: 0,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },

    FriendsTitleWrapper:{

        fontFamily:'Nunito-Bold',
        fontSize: 16,
        marginBottom: 5,
        color: "#000000",
        fontWeight: '400',
        marginLeft: 15,
       


    },

    FriendsusernameWrapper:{

        fontFamily:'Nunito-Light',
        fontSize: 16,
        fontWeight: '200',
        marginLeft: 15,


    }

})

export default Friends