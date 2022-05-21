import {StatusBar} from 'expo-status-bar';
import { ScrollView, StyleSheet,View,TouchableOpacity, Text,Image, TextInput} from 'react-native';
import {useEffect, useState} from 'react';
import {login, getUserToken} from "../db/auth/auth";
import {AuthContext} from "./Utils";
import Item from "../components/Item"
import logo2 from "../assets/logo2.png"
import * as React from "react";
import { CurrentRenderContext } from '@react-navigation/native';

const routeName = 'SignIn';

export {routeName};

export default function SignIn({navigation}) {

    const {signIn} = React.useContext(AuthContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function signInUser() {
        login(email, password).then(() => {
            signIn({email, password, token : getUserToken()});
            goToHome();
        }).catch((e) => {
            alert(e.message);
            console.log(e.message);
        });
    }
const data = [ {text: "", iconScr: logo2},
        ];

    function goToHome() {
        navigation.navigate('Home');
    }
    
    return (   
        <ScrollView style={{padding: 30,
        backgroundColor :`#ffffff`, }}>
      
      <View style={styles.container} >
      <Image
        style={{
         
          width: "30%", marginHorizontal: "30%",
        }}/>
               {data.map((e, index) => (<Item text={e.text} iconScr={e.iconScr} key={index}/>))}
            </View>

            <View >
                 <TextInput
                    style={styles.TextInput}
                    placeholder=" Email "
                    placeholderstyle={styles.TextInput} onChangeText={setEmail} value={email}/>
            </View>

            <View>
  <TextInput
    style={styles.TextInput}
    placeholder=" Password "
    placeholderstyle={styles.TextInput}
    secureTextEntry={true} onChangeText={setPassword}
                           value={password}/>
            </View>
           
      <TouchableOpacity 
      onPress={signInUser}>
        <Text style={styles.loginText}>Sign In</Text>
        
      </TouchableOpacity>
          
      <TouchableOpacity 
      onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.loginText}>Create new account</Text>
        
      </TouchableOpacity>

    
        </ScrollView>
    );
}

const styles = StyleSheet.create({

    container: {
      flexGrow: 1,
        flex: 1,
        backgroundColor:' #fdf5e6',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 40,
        marginHorizontal: "30%",},

      
        TextInput: {
          flex:1,
          backgroundColor:`#b22222`,
          width: "30%", 
          height: 45,
          marginHorizontal: "35%",
          placeholderTextColor:`#fffacd`,
          paddingVertical: 10, 
          paddingHorizontal: 15, 
          marginBottom: 20,
           borderWidth: 1,
            borderRadius: 25, 
          fontSize: 16,
          
         
        },
    
      loginText:{
        flex:1,
        color:`#fffacd`,
        backgroundColor:`#b22222`,
        width: "30%", 
        height: 50,
        marginHorizontal: "35%",
      
        paddingVertical: 10, 
        paddingHorizontal: 15, 
        marginBottom: 20,
         borderWidth: 1,
          borderRadius: 25, 
        fontSize:16,
      }
});