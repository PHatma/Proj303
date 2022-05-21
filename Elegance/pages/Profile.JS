import {StatusBar} from 'expo-status-bar';
import {Button, ScrollView, StyleSheet, View, Text, TextInput,Icon,TouchableOpacity,Image} from 'react-native';
import {getUsers} from "../db/User";
import {getUserUId} from "../db/auth/auth";
import {getUserById} from "../db/User";
import {useState} from "react";
import {isSignedIn, logout} from "../db/auth/auth";
import {AuthContext} from "../pages/Utils";
import HomeForAdmain from "../pages/HomeForAdmain";

import * as React from "react";

export default function Profile({navigation}) {

    const [email, setEmail] = useState('');
    const [fullname, setFullname] = useState('');
    const [nationaliynumber, setNationaliynumber] = useState('');
    const [money, setMoney] = useState('');
    const [phonenumber, setPhonenumber] = useState('');
    const [password, setPassword] = useState('');
    const [id, setId] = useState('');

    React.useEffect(() => {
        getUserUId().then((id) => {
            console.log(id);
            getUserById(id).then((user)=>{
                setEmail(user[0].email);
                setPassword(user[0].password);
                setFullname(user[0].fullname);
                setId(user[0].id);
                setNationaliynumber(user[0].nationaliynumber);
                setMoney(user[0].money);
                setPhonenumber(user[0].phonenumber);

            })
        });
    }, []);
    const {signOut} = React.useContext(AuthContext);

    function signOutUser(){
        signOut();
        logout();
        // no need explicitly to redirect for the sign-in screen
        // navigation.navigate('SignIn');
    }

    return (
        <ScrollView>
        <View style={styles.container}>
            <Image
            source={{
              uri:
                'https://th.bing.com/th/id/R.3ff5dbee7bf69cb6e2fc8d7ed58ae36a?rik=GYI4klp%2fZsAMSw&pid=ImgRaw&r=0',
            }}
            style={styles.buttonImageIconStyle}
          />
          </View>
            <View>
            <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 26,flexDirection: 'column', justifyContent: 'space-between' }}>Fullname:</Text>
            <Text style={{ color: 'black', fontSize: 26 }}>{fullname}</Text>
            </View>

            <View >
            <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 26,flexDirection: 'column', justifyContent: 'space-between' }}>Email:</Text>
            <Text style={{ color: 'black', fontSize: 26 }}>{email}</Text>
            </View>

            <View >
            <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 26 }}>Password:</Text>
            <Text style={{ color: 'black', fontSize: 26 }}>{password}</Text>
            </View>

            <View >
            <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 26 }}>Id:</Text>
            <Text style={{ color: 'black', fontSize: 26 }}>{id}</Text>
            </View>

            <View >
            <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 26 }}>Money:</Text>
            <Text style={{ color: 'black', fontSize: 26 }}>{money}</Text>
            </View>
           
            <View >
            <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 26 }}>Nationaliynumber:</Text>
            <Text style={{ color: 'black', fontSize: 26 }}>{nationaliynumber}</Text>
            </View>

            <View >
            <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 26 }}>Phonenumber:</Text>
            <Text style={{ color: 'black', fontSize: 26 }}>{phonenumber}</Text>
            </View>


            <View style={styles.app}>
                <Button title='Sign out' onPress={signOutUser} color="#000000" />
            </View>
            <Button   title="Admin" onPress={() => navigation.navigate('HomeForAdmain')}   color="#000000"  />
            <View> 
          
          
        
        </View>
            <StatusBar style="auto"/>
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    app: {
         backgroundColor: `#fdf5e6`,
         flexGrow: 1,
         flex: 1,
         },
         container: {
            flex: 1,
            margin: 1,
            padding: 30,
          justifyContent:'center',
          alignItems:'center',
          },
          buttonImageIconStyle: {
            padding: 10,
            margin: 5,
            height: 200,
            width: 200,
          //  resizeMode: '',
        
          },
          
});