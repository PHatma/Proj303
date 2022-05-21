import {Button, ScrollView, StyleSheet,View} from 'react-native';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
import Home from "./pages/Home";
import {AuthContext} from "./pages/Utils";
import IntroduceApp from "./pages/IntroduceApp";
import Profile from "./pages/Profile";
import Payment from "./pages/Payment";
import StoredItems from "./pages/StoredItems";
import HomeForAdmain from "./pages/HomeForAdmain";

import SignIn, {routeName as signInRoute} from "./pages/SignIn";
import SignUp, {routeName as signUpRoute} from "./pages/SignUp";

function Menu() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home}/>
            <Tab.Screen name="HomeForAdmain" component={HomeForAdmain}/>
            <Tab.Screen name="IntroduceApp" component={IntroduceApp}/>
            <Tab.Screen name="StoredItems" component={StoredItems}/>
            <Tab.Screen name="Payment" component={Payment}/>
            <Tab.Screen name="Profile" component={Profile}/>
        </Tab.Navigator>
    );
}


export default function App() {
    const authContext = React.useMemo(
                () => ({
                    signIn: async (data) => {
                        console.log('from useMemo: ', data)
                        dispatch({ type: 'SIGN_IN', token: data.token });
                    },
                    signOut: () => dispatch({ type: 'SIGN_OUT' }),
                    // signUp: async (data) => {
                    //     dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
                    // },
                }),
                []
            );
    return (
        <AuthContext.Provider value={authContext}>
        <NavigationContainer  >
             { <Stack.Navigator initialRouteName="IntroduceApp">
                <Stack.Screen name="Menu" component={Menu}/>
               <Stack.Screen name={signInRoute} component={SignIn}/>
                 <Stack.Screen name={signUpRoute} component={SignUp}/>
            </Stack.Navigator> }  
          
        </NavigationContainer>
        </AuthContext.Provider>
    );
}
const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
       flex: 1,
      backgroundColor:' #fdf5e6',
    },
    });
    