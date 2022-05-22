import {StatusBar} from 'expo-status-bar';
import {Button, ScrollView, StyleSheet, Text, View,Dimensions,Image,ImageBackground,TouchableOpacity} from 'react-native';
import back from "../assets/back.png"
import Blank from "../assets/Blank.png"
import Item from "../components/Item"
import { useEffect, useState } from "react";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
export default function IntroduceApp({navigation}) {

    return ( 
      
       < ScrollView >
       <View >  
       <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => navigation.navigate('SignUp')}>
          <Image source={{
              uri:"https://th.bing.com/th/id/R.8e4b0d9e5bc0a513b980bed9e3fb8e9a?rik=VhkixPkYn%2feeFA&pid=ImgRaw&r=0",

            }}
            style={styles.buttonImageIconStylee}
          />
          <View style={styles.buttonIconSeparatorStyle} />
          <Text style={styles.buttonTextStyle}>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => navigation.navigate('SignIn')} >
            <Image
            source={{
              uri:"https://th.bing.com/th/id/R.ae8f495be2d2e39388e28b9673644767?rik=fTHGXbjLl9bBqw&pid=ImgRaw&r=0",

            }}
            style={styles.buttonImageIconStylee}
          />
          <View style={styles.buttonIconSeparatorStyle} />
          <Text style={styles.buttonTextStyle}>Sign In</Text>
        </TouchableOpacity>
                      </View> 
                    
              
            <Image source={require('../assets/Back.png')}  style={{width: width ,
                    height:  height /2}} />
            <Image source={require('../assets/Blank.png')}  style={{width: width ,
                    height:  height / 2}} />
            
    <StatusBar style="auto"></StatusBar>
    </ScrollView>
  
    );
 }
 const styles = StyleSheet.create({
 
  
buttonStyle: 
{
 
  flexDirection: 'row',
 // alignItems: 'center',
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
},
  
});