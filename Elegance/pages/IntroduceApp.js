import {StatusBar} from 'expo-status-bar';
import {Button, ScrollView, StyleSheet, Text, View,Dimensions,Image,ImageBackground} from 'react-native';
import back from "../assets/back.png"
import Blank from "../assets/Blank.png"
import Item from "../components/Item"
import { useEffect, useState } from "react";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
export default function IntroduceApp({navigation}) {

    return ( 
      
       < ScrollView >
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
                    
              
            <Image source={require('../assets/Back.png')}  style={{ width: width, height: height }} />
            <Image source={require('../assets/Blank.png')}  style={{ width: width, height: height }} />
            
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
    justifyContent: 'space-between',
    justifyContent: 'left',
    alignItems:'left'  
}  
  
});
