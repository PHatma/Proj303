import {StatusBar} from 'expo-status-bar';
import { ScrollView, StyleSheet,View,TouchableOpacity, Text,Image, TextInput} from 'react-native';
import {useEffect, useState} from 'react';
import {login, getUserToken} from "../db/auth/auth";
import {AuthContext} from "./Utils";
import Item from "../components/Item"
import logo2 from "../assets/logo2.png"
import * as React from "react";

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
        backgroundColor :'#fdf5e6', }}>
      
      <View style={styles.container} >
      <Image
        style={{
         
          width: "30%", marginHorizontal: "30%",
        }}/>
               {data.map((e, index) => (<Item text={e.text} iconScr={e.iconScr} key={index}/>))}
            </View>

            <View  style={styles.inputView}>
                 <TextInput
                    style={styles.TextInput}
                    placeholder=" Email "
                    placeholderTextColor="#003f5c" onChangeText={setEmail} value={email}/>
            </View>

            <View  style={styles.inputView}>
  <TextInput
    style={styles.TextInput}
    placeholder=" Password "
    placeholderTextColor="#003f5c"
    secureTextEntry={true} onChangeText={setPassword}
                           value={password}/>
            </View>
           
      <TouchableOpacity style={styles.loginBtn}
      onPress={signInUser}>
        <Text style={styles.loginText}>Sign In</Text>
        
      </TouchableOpacity>
          
      <TouchableOpacity style={styles.loginBtn}
      onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.loginText}>Create new account</Text>
        
      </TouchableOpacity>

    
        </ScrollView>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 5,
        backgroundColor:' #fdf5e6',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 40,
        marginHorizontal: "30%",
     },
       inputView: {
        backgroundColor: "#da70d6",
        borderRadius: 30,
        width: "30%",
        height: 50,
         alignItems: "center",
        justifyContent:"center",
        marginBottom: 50,
        marginHorizontal: "35%"
       
        
      },
      
      TextInput: {
        height: 50,
        padding: 20,
        alignItems: "center",
        justifyContent:"center", 
        marginHorizontal: "35%"  
    },
    
     
      loginBtn: {
        width: "30%",
        borderRadius: 50,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        backgroundColor: "#800080",
        marginHorizontal: "35%"
      },
});