import { View,StyleSheet,ScrollView,FlatList, Button,Text ,Image,Dimensions} from "react-native";
import { useEffect, useState } from "react";
import {getClothes,subscribe
} from "../db/clothes/clothes";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const buy = false;
export default function StoredItems({navigation}) {
  const getFavList = async () => {
    const c = await getClothes();
    setClothes(c);
    console.log("clothes", c);
  };

  useEffect(() => {
    getFavList();
  }, []);
  const [clothes, setClothes] = useState([]);
  const [name, setName] = useState([""]);
  return (
    <View style={styles.container}>   
    <FlatList
      data={clothes}
      numColumns={2}
      keyExtractor={item => item.id}
      renderItem={(itemData) => (
          itemData.item.fav?(<View style={{ margin: 10,flexDirection:"row",width:width }}> 
            <Image
                style={{
                  width: width / 2.09 -30,
                  height:  height / 1.01,
                    borderRadius: 10,
                    borderWidth: 1,
                    margin: 5,
                    reSizeMode : 'contain'
                }}
                source={{
                    uri: `${itemData.item.url}`,
                }}
            />
            <View style={styles.textStyleContainer}>
           <Text style={styles.textStyle}>{itemData.item.name}</Text>
          <Text style={styles.textStyle}>{itemData.item.price}</Text>
          </View>
          <View style={styles.buttonStyleContainer}>
            <View style={styles.buttonStyle}>
            <Button title="Buy"
              color={`#8a2be2`}
              onPress={() =>{buy == true}}
               />
               </View>
               <View style={styles.buttonStyle}>
              <Button title=" Not Love" 
              color={`#ff0000`}
               onPress={() =>{itemData.item.fav == true}}
             />
              </View>
              </View>
          </View>):(null)
        
      )}
    />
   
  </View>
);
}

const styles = StyleSheet.create({
container: {
   flex: 1,
   backgroundColor :`#000000`,
},
textStyle:{
  fontSize:18,
  color:'white',
  fontWeight:'bold',
  textAlign: 'center',
},
// textStyleContainer: {
//  },
buttonStyleContainer: {
  flex: 1,
  flexDirection: 'row',
  marginHorizontal: 2,
   marginTop: 1,
   justifyContent:"center",
   alignItems:"center"
 },
buttonStyle: {
  marginHorizontal: 20,
  marginTop: 5,
  width : 200,
  height :20,
}
});

