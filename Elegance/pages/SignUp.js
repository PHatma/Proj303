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
   
    const [phonenumber, setphonenumber] = useState('');
    const [nationaliynumber,setNationalityNum] = useState('');
    const [fullname,setName] = useState('');
    const [address,setAddress] = useState('');
    function registerUser() {
        if (email === '' || password === ''|| phonenumber===''||nationaliynumber===''||fullname===''||address==='') {
            alert("email or password is empty!");
        } else {
            register(email, password , phonenumber,nationaliynumber,fullname,address).then(() => {
                console.log(getUserUId());

                getUserUId().then((id) => {
                    // console.log(id);
                    addUser({id: id, email, password,phonenumber,nationaliynumber,fullname,address});
                });
                navigation.navigate('SignIn');
            }).catch((e) => {
                console.log(e.message)
            });
        }
    }

    return (
        <ScrollView style={{padding: 30, backgroundColor :`#ffffff`}}>
   <View >
                <TextInput 
                style={styles.TextInput}
                placeholder={"Enter your Name "}
                placeholderstyle={styles.TextInput} onChangeText={setName} value={fullname}/>
            </View>
            <View>
                <TextInput 
                style={styles.TextInput}
                placeholder="Enter your Nationality Number"
                placeholderstyle={styles.TextInput}  onChangeText={setNationalityNum} value={nationaliynumber}/>
            </View>
<View  >
                 <TextInput
                    style={styles.TextInput}
                    placeholder=" Enter Your Email "
                    placeholderstyle={styles.TextInput}  onChangeText={setEmail} value={email}/>
            </View>

           

          
            <View>
  <TextInput
    style={styles.TextInput}
    placeholder="Enter Your Password "
    placeholderstyle={styles.TextInput} secureTextEntry={true} onChangeText={setPassword}
                           value={password}/>
            </View>

          
            <View >
                <TextInput 
                style={styles.TextInput}
                placeholder="Confirm Password"
                placeholderstyle={styles.TextInput}/>
            </View>

            <View>
                <TextInput 
                style={styles.TextInput}
                placeholder="Phone Number"
                placeholderstyle={styles.TextInput} onChangeText={setphonenumber} value={phonenumber}/>
            </View>
           
            <View style={styles.inputView}>
                <TextInput 
                style={styles.TextInput}
                placeholder="Address"
                placeholderstyle={styles.TextInput}
                 onChangeText={setAddress} value={address}
                />
            </View>
            <TouchableOpacity
                   onPress={registerUser}>
        <Text style={styles.loginText}>Create Account</Text>
        
      </TouchableOpacity>
            

            <StatusBar style="auto"/>
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
            width: "40%", 
            height: 45,
            marginHorizontal: "30%",
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
          width: "40%", 
          height: 50,
          marginHorizontal: "30%",
        
          paddingVertical: 10, 
          paddingHorizontal: 15, 
          marginBottom: 20,
           borderWidth: 1,
            borderRadius: 25, 
          fontSize:16,
        }
}
);