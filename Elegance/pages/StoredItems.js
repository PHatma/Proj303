import { View,StyleSheet,FlatList, Button,Text ,Image,Dimensions} from "react-native";
import { useEffect, useState } from "react";
import {getClotheId,getClothes,subscribe
} from "../db/clothes/clothes";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export default function StoredItems({navigation}) {
  const [clothes, setClothes] = useState([]);
  //const [id, setId] = useState('');
  const getFavList = async () => {
    const c = await getClothes();
    setClothes(c);
    console.log("clothes", c);
  };

  useEffect(() => {
    getFavList();
  }, []);
  // React.useEffect(() => {
  //   getClotheId().then((id) => {
  //       console.log(id);
  //       getClotheById(id).then((user)=>{
  //          setClothes(user[0].clothes);
  //           setId(user[0].id);
  //       })
  //   });
  //   }, []);
  return (
    <View style={styles.container}>   
    <FlatList
      data={clothes}
      numColumns={2}
      keyExtractor={item => item.id}
      renderItem={(itemData) => (
        <View style={styles.container}>
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
            <View style={styles.btStyleContainer}>
            <View>
           <Text style={styles.textStyle} >{itemData.item.name}</Text>
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
              </View>
          </View>
      )}
    />
   
  </View>
);
}

const styles = StyleSheet.create({
container: {
  flex:1,
   backgroundColor :`#000000`,
},
textStyle:{
  fontSize:18,
  color:'white',
  fontWeight:'bold',
  textAlign: 'center',
  margin :10,
},
buttonStyleContainer: {
  flexDirection: 'row',
  marginHorizontal: 2,
   marginTop: 1,
   justifyContent:"center",
   alignItems:"center"
 },
 btStyleContainer: {
  flexDirection: 'colmun',
    justifyContent:"center",
   alignItems:"center",
   margin :10,
 },
buttonStyle: {
  marginHorizontal: 20,
  marginTop: 5,
   width : 100,
   height :20,
}
});

