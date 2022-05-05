import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
// import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// const Stack = createNativeStackNavigator();
// const Tab = createBottomTabNavigator();

// import Home from "./pages/Home";
// import Profile from "./pages/Profile";
// import Payment from "./pages/Payment";
// import StoredItems from "./pages/StoredItems";

// import SignIn from "./pages/SignIn";
// //import SignUp from "./pages/SignUp";

// // function Menu() {
  
// //     return (
// //         <Tab.Navigator>
// //             <Tab.Screen name="home" component={home}/>
// //             <Tab.Screen name="StoredItems" component={StoredItems}/>
// //             <Tab.Screen name="Profile" component={Profile}/>
// //         </Tab.Navigator>
// //     );
// // }


// export default function App() {
//     return (
//         <NavigationContainer  >
//             <Tab.Navigator >
//             <Tab.Screen name="Home" component={Home} />
//              <Tab.Screen name="Payment" component={Payment} />
//              <Tab.Screen name="StoredItems" component={StoredItems}/>
//              <Tab.Screen name="Profile" component={Profile}/>
//              </Tab.Navigator>


//              {/* { <Stack.Navigator initialRouteName="SignIn">
//                 <Stack.Screen name="Menu" component={Menu}/>
//               <Stack.Screen name="SignIn" component={SignIn}/>
//                <Stack.Screen name="SignUp" component={SignUp}/>
//             </Stack.Navigator> }  */}
          
//         </NavigationContainer>
//     );
// }
// const styles = StyleSheet.create({
    
//  });
 