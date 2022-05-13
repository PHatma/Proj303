import {StatusBar} from 'expo-status-bar';
import {TouchableOpacity, ScrollView, StyleSheet, Text, TextInput, View} from 'react-native';
import {useEffect, useState} from 'react';
import {register, getUserUId} from "../db/auth/auth";
import {addUser, getUserById} from "../db/User";

const routeName = 'SignUp';

export {routeName};

export default function SignUp({navigation}) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [money, setmoney] = useState('');
    const [phonenumber, setphonenumber] = useState('');
    const [nationaliynumber,setNationalityNum] = useState('');
    const [fullname,setName] = useState('');
    const [address,setAddress] = useState('');
    function registerUser() {
        if (email === '' || password === ''|| phonenumber===''||money===''||nationaliynumber===''||fullname===''||address==='') {
            alert("email or password is empty!");
        } else {
            register(email, password ,money, phonenumber,nationaliynumber,fullname,address).then(() => {
                console.log(getUserUId());

                getUserUId().then((id) => {
                    // console.log(id);
                    addUser({id: id, email,money, password,phonenumber,nationaliynumber,fullname,address});
                });
                navigation.navigate('SignIn');
            }).catch((e) => {
                console.log(e.message)
            });
        }
    }

    return (
        <ScrollView style={{padding: 30, backgroundColor :`#fdf5e6`}}>
   <View style={styles.inputView}>
                <TextInput 
                style={styles.TextInput}
                placeholder={"Enter your Name "}
                placeholderTextColor="#003f5c"onChangeText={setName} value={fullname}/>
            </View>
            <View style={styles.inputView}>
                <TextInput 
                style={styles.TextInput}
                placeholder="Enter your Nationality Number"
                placeholderTextColor="#003f5c"  onChangeText={setNationalityNum} value={nationaliynumber}/>
            </View>
<View  style={styles.inputView}>
                 <TextInput
                    style={styles.TextInput}
                    placeholder=" Enter Your Email "
                    placeholderTextColor="#003f5c"  onChangeText={setEmail} value={email}/>
            </View>

           

          
            <View  style={styles.inputView}>
  <TextInput
    style={styles.TextInput}
    placeholder="Enter Your Password "
    placeholderTextColor="#003f5c" secureTextEntry={true} onChangeText={setPassword}
                           value={password}/>
            </View>

          
            <View style={styles.inputView}>
                <TextInput 
                style={styles.TextInput}
                placeholder="Confirm Password"
                placeholderTextColor="#003f5c"/>
            </View>

            <View style={styles.inputView}>
                <TextInput 
                style={styles.TextInput}
                placeholder="Phone Number"
                placeholderTextColor="#003f5c" onChangeText={setphonenumber} value={phonenumber}/>
            </View>
            <View style={styles.inputView}>
                <TextInput 
                style={styles.TextInput}
                placeholder="Money"
                placeholderTextColor="#003f5c"
                 onChangeText={setmoney} value={money}
                />
            </View>
            <View style={styles.inputView}>
                <TextInput 
                style={styles.TextInput}
                placeholder="Address"
                placeholderTextColor="#003f5c"
                 onChangeText={setAddress} value={address}
                />
            </View>
            <TouchableOpacity style={styles.loginBtn}
                   onPress={registerUser}>
        <Text style={styles.loginText}>Create Account</Text>
        
      </TouchableOpacity>
            

            <StatusBar style="auto"/>
        </ScrollView>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        image :{
            marginBottom: 40
         
          }
       },
     
      
         
    
       inputView: {
        backgroundColor: "#da70d6",
        borderRadius: 40,
        width: "30%",
        height: 50,
         alignItems: "center",
        justifyContent:"center",
        marginBottom: 50,
        marginHorizontal: "30%"
       
        
      },
      
      TextInput: {
        height: 50,
        padding: 10,
        alignItems: "center",
        justifyContent:"center", 
        marginHorizontal: "30%"  
    },
    
     
      loginBtn: {
        width: "30%",
        borderRadius: 50,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        backgroundColor: "#800080",
        marginHorizontal: "30%"
      },
}
);