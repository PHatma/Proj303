import {StatusBar} from 'expo-status-bar';
import {Button, ScrollView, StyleSheet, View, Text, TextInput} from 'react-native';
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
        <ScrollView style={{padding: 30}}>
            <View>
            <Text style={styles.app}>Fullname:</Text>
            <Text style={styles.app1}>{fullname}</Text>
            </View>

            <View >
            <Text style={styles.app}>Email:</Text>
            <Text style={styles.app1}>{email}</Text>
            </View>

            <View >
            <Text style={styles.app}>Password:</Text>
            <Text style={styles.app1}>{password}</Text>
            </View>

            <View >
            <Text style={styles.app}>Id:</Text>
            <Text style={styles.app1}>{id}</Text>
            </View>

            <View >
            <Text style={styles.app}>Money:</Text>
            <Text style={styles.app1}>{money}</Text>
            </View>
           
            <View >
            <Text style={styles.app}>Nationaliynumber:</Text>
            <Text style={styles.app1}>{nationaliynumber}</Text>
            </View>

            <View >
            <Text style={styles.app}>Phonenumber:</Text>
            <Text style={styles.app1}>{phonenumber}</Text>
            </View>


            <View style={styles.app}>
                <Button title='Sign out' onPress={signOutUser} color="#000000" />
            </View>
            <Button   title="Admin" onPress={() => navigation.navigate('HomeForAdmain')}   color="#000000"  /> 


            <StatusBar style="auto"/>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    app: { backgroundColor: `#fdf5e6` }
});