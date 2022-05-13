import {StatusBar} from 'expo-status-bar';
import {Button, ScrollView, StyleSheet, View, Text, TextInput} from 'react-native';
import {getUsers} from "../db/User";
import {getUserUId} from "../db/auth/auth";
import {getUserById} from "../db/User";
import {useState} from "react";
import {isSignedIn, logout} from "../db/auth/auth";
import {AuthContext} from "./Utils";

import * as React from "react";

const routeName = 'Profile';

export {routeName};

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
             <View style={{padding: 10}}>
                <Text>fullname</Text>
                <Text>{fullname}</Text>
            </View>
            <View style={{padding: 10}}>
                <Text>email</Text>
                <Text>{email}</Text>
            </View>
            <View style={{padding: 10}}>
                <Text>password</Text>
                <Text>{password}</Text>
            </View>

            <View style={{padding: 10}}>
                <Text>id</Text>
                <Text>{id}</Text>
            </View>
            <View style={{padding: 10}}>
                <Text>money</Text>
                <Text>{money}</Text>
            </View>
           
            <View style={{padding: 10}}>
                <Text>nationaliynumber</Text>
                <Text>{nationaliynumber}</Text>
            </View>
            <View style={{padding: 10}}>
                <Text>phonenumber</Text>
                <Text>{phonenumber}</Text>
            </View>


            <View style={{padding: 30}}>
                <Button title='Sign out' onPress={signOutUser}/>
            </View>


            <StatusBar style="auto"/>
        </ScrollView>
    );
}

const styles = StyleSheet.create({});
