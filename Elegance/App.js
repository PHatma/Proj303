import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Payment from "./pages/Payment";
import StoredItems from "./pages/StoredItems";

export default function App() {
    return (
        <NavigationContainer  >
            <Tab.Navigator >
            <Tab.Screen name="Home" component={Home} />
             <Tab.Screen name="Payment" component={Payment} />
             <Tab.Screen name="StoredItems" component={StoredItems}/>
             <Tab.Screen name="Profile" component={Profile}/>
             </Tab.Navigator>
          
        </NavigationContainer>
    );
}
const styles = StyleSheet.create({
    
 });
 