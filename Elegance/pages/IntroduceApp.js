// import {StatusBar} from 'expo-status-bar';
// import {Button, ScrollView, StyleSheet, Text, View,Image,ImageBackground} from 'react-native';
// import back from "../assets/back.png"
// import Blank from "../assets/Blank.png"
// import b2 from "../assets/b2.png"
// import Item from "../components/Item"
// import { useEffect, useState } from "react";


// export default function IntroduceApp({navigation}) {
//     const data = [
//     {text: "", iconScr: back},
//          {text: "", iconScr: b2},
//          {text: "", iconScr: Blank}

//         ];
//     return ( 
      
//        < ScrollView >
//         <View style={styles.multiButtonContainer}>  
//                     <Button  
//                         onPress={() => navigation.navigate('SignUp')}  
//                         title="Sign Up"  
//                         color="#000000"
                        
                        
//                     />  
//                     <Button  
//                          onPress={() => navigation.navigate('SignIn')}  
//                         title="Sign In"  
//                         color="#000000"  
                       
//                     />  
//                 </View> 
        
//           <View style={styles.container} >
//                 {data.map((e, index) => (<Item text={e.text} iconScr={e.iconScr} key={index}/>))}
//             </View>
           
       
         
//     <StatusBar style="auto"></StatusBar>
//     </ScrollView>
  
//     );
//  }
//  const styles = StyleSheet.create({
 
//   multiButtonContainer: {  
//     marginHorizontal: 20,
//     marginTop: 5,
//     margin: 10,  
//     flexDirection: 'row'  ,
//     justifyContent: 'space-between'  
// }  
  
// });
