import {StatusBar} from 'expo-status-bar';
import {Button, ScrollView,StyleSheet,View,Text, TextInput,Icon,TouchableOpacity,Image} from "react-native";
import { getUsers } from "../db/User";
import { getUserUId } from "../db/auth/auth";
import { getUserById } from "../db/User";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { useState } from "react";
import { isSignedIn, logout } from "../db/auth/auth";
import { AuthContext } from "../pages/Utils";
import HomeForAdmain from "../pages/HomeForAdmain";
import Settings from "../pages/Settings";


import * as React from "react";


export default function Setting({navigation})  {
    const { signOut } = React.useContext(AuthContext);

    function signOutUser() {
      signOut();
      logout();
      // no need explicitly to redirect for the sign-in screen
      // navigation.navigate('SignIn');
    }
    return (
        <ScrollView style={{padding: 30}}>
       <TouchableOpacity
          style={styles.buttonStyle}
            onPress={() => navigation.navigate("HomeForAdmain")}>
          <Image
            source={{
              uri:"https://cdn.onlinewebfonts.com/svg/img_394318.png",
            }}
            style={styles.buttonImageIconStylee}
          />
          <View style={styles.buttonIconSeparatorStyle} />
          <Text style={styles.buttonTextStyle}>Admin</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonStyle}
          activeOpacity={0.5}     onPress={() => navigation.navigate("SignIn")}>

          <Image
            source={{
              uri:"https://th.bing.com/th/id/OIP.9nmjieBvgRWlJjz5ZXWbHAHaHa?pid=ImgDet&rs=1",
            }}
            style={styles.buttonImageIconStylee}
          />
          <View style={styles.buttonIconSeparatorStyle} />
          <Text style={styles.buttonTextStyle}>Sign out</Text>
        </TouchableOpacity>
     

            <StatusBar style="auto"></StatusBar>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    buttonStyle: 
    {
      flexDirection: 'row',
      alignItems: 'center',
    //  backgroundColor: '#000000',
      borderWidth: 0.5,
      borderColor: '#000000',
      height: 40,
      borderRadius: 5,
      margin: 5,
    },
    buttonImageIconStylee: {
      padding: 10,
      margin: 5,
      height: 25,
      width: 25,
      resizeMode: 'stretch',
    },
    buttonTextStyle: {
      fontWeight: "bold",
      fontSize: 25,
      marginBottom: 4,
      marginLeft: 10,
    },
    buttonIconSeparatorStyle: {
      backgroundColor: '#000000',
      width: 1,
      height: 40,
    },}
);