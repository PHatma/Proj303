import {StyleSheet , Button, Text, View} from 'react-native';
import { useState } from "react";
export default function Item({iconScr, text}) {
    const [count,setCount]=useState(1);
   const increase = () => setCount(prevCount =>prevCount + 1)
   const decrease = () => setCount(prevCount =>prevCount - 1) 
    return (
        <View style={styles.btStyleContainer}>
        <View style={styles.buttonStyle}>
          <Button title="-"
        color={`#ff0000`}
        onPress={decrease}
         />
         </View>
          <View>
         <Text style={styles.textStyle}>{count}</Text>
         </View>
         <View style={styles.buttonStyle}>
        <Button title="+" 
        color={`#ff0000`}
         onPress={increase}
       />
        </View>
        </View>
    );
}
const styles = StyleSheet.create({
    btStyleContainer: {
      flexDirection: 'row',
      marginHorizontal: 2,
       marginTop: 1,
       justifyContent:"center",
       alignItems:"center"
     },
     textStyle:{
      fontSize:18,
      color:'black',
      fontWeight:'bold',
      margin :3,
    },
     buttonStyle: {
      marginHorizontal: 5,
      marginTop: 3,
       width : 90,
       height :30,
    }
    });