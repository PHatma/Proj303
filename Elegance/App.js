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
import Settings from "./pages/Settings";


import SignIn, {routeName as signInRoute} from "./pages/SignIn";
import SignUp, {routeName as signUpRoute} from "./pages/SignUp";

function Elegance() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="IntroduceApp" component={IntroduceApp}/>
            <Tab.Screen name="Home" component={Home}/>
            <Tab.Screen name="StoredItems" component={StoredItems}/>
            <Tab.Screen name="Payment" component={Payment}/>
            <Tab.Screen name="Profile" component={Profile}/>

        </Tab.Navigator>
    );
}


export default function App() {


    const [state, dispatch] = React.useReducer(
        (prevState, action) => {
            switch (action.type) {
                case 'RESTORE_TOKEN':
                    return {
                        ...prevState,
                        userToken: action.token,
                        isLoading: false,
                    };
                case 'SIGN_IN':
                    return {
                        ...prevState,
                        isSignout: false,
                        userToken: action.token,
                    };
                case 'SIGN_OUT':
                    return {
                        ...prevState,
                        isSignout: true,
                        userToken: null,
                    };
            }
        },
        {
            isLoading: true,
            isSignout: true,
            userToken: null,
        }
    );

    React.useEffect(() => {
        const bootstrapAsync = async () => {
            dispatch({type: 'RESTORE_TOKEN', token: null});
        };
        bootstrapAsync();
    }, []);
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
                <Stack.Screen name="Elegance" component={Elegance}/>
                <Stack.Screen name="HomeForAdmain" component={HomeForAdmain}/>
                <Stack.Screen name="Settings" component={Settings}/>
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
      backgroundColor:'#fdf5e6',
    },
    });