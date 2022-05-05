import {StatusBar} from 'expo-status-bar';
import {Button, ScrollView, StyleSheet, Text, TextInput, View} from 'react-native';


export default function SignUp({navigation}) {

    return (
        <ScrollView style={{padding:50}}>

            <View style={{padding:30}}>
                <Text>Name</Text>
            </View>

            <View style={{padding:30}}>
                <TextInput placeholder={"Enter Your Name"}></TextInput>
            </View>

            <View style={{padding:30}}>
                <Text>Password</Text>
            </View>

            <View style={{padding:30}}>
                <TextInput placeholder={"Enter your Password"}></TextInput>
            </View>

            <View style={{padding:30}}>
                <Text>Confirm Password</Text>
            </View>

            <View style={{padding:30}}>
                <TextInput placeholder={"Enter your Password again"}></TextInput>
            </View>

            <View style={{padding:30}}>
                <Text>Nationality Number</Text>
            </View>

            <View style={{padding:30}}>
                <TextInput placeholder={"Enter Your Nationality Number"}></TextInput>
            </View>

            <View style={{padding:30}}>
                <Text>Address</Text>
            </View>

            <View style={{padding:30}}>
                <TextInput placeholder={"Enter Your Address"}></TextInput>
            </View>

            <View style={{padding:30}}>
                <Text>Email</Text>
            </View>

            <View style={{padding:30}}>
                <TextInput placeholder={"Enter your Email"}></TextInput>
            </View>

            <View style={{padding:30}}>
                <Text>Phone Number</Text>
            </View>

            <View style={{padding:30}}>
                <TextInput placeholder={"Enter your Phone Number"}></TextInput>
            </View>

            <View style={{padding:30}}>
                <Button title={"Create a new Account"} onPress={() => navigation.goBack()}/>
            </View>

            <StatusBar style="auto"></StatusBar>
        </ScrollView>
    );
}

const styles = StyleSheet.create(
    {}
); 