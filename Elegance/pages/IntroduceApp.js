import {StatusBar} from 'expo-status-bar';
import {Button, ScrollView, StyleSheet, Text, View,Image,ImageBackground} from 'react-native';
import back from "../assets/back.png"
import Blank from "../assets/Blank.png"
import b2 from "../assets/b2.png"
import Item from "../components/Item"
import { useEffect, useState } from "react";


export default function IntroduceApp({navigation}) {

    return ( 
      
       < ScrollView >
       
                    
              
            <Image source={require('../assets/Back.png')}  style={{ width: 800, height: 500 }} />
            <Image source={require('../assets/b2.png')}  style={{ width: 800, height: 500 }} />
            <Image source={require('../assets/Blank.png')}  style={{ width: 800, height: 500 }} />
            <View style={styles.multiButtonContainer}>  
            <Button  
                        onPress={() => navigation.navigate('SignUp')}  
                        title="Sign Up"  
                        color="#8b0000" 
                        
                        
                    />  
             <Button  
                         onPress={() => navigation.navigate('SignIn')}  
                        title="Sign In"  
                        color="#8b0000"  
                       
                    /> 
                      </View> 
         
    <StatusBar style="auto"></StatusBar>
    </ScrollView>
  
    );
 }
 const styles = StyleSheet.create({
 
  multiButtonContainer: {  
    flex:1,
    marginHorizontal: 20,
    marginTop: 5,
    margin: 10,  
    flexDirection: 'row'  ,
    justifyContent: 'space-between'  
}  
  
});
