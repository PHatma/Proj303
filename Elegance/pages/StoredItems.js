import { View,StyleSheet,FlatList, Button,Text ,Image,Dimensions} from "react-native";
import { useEffect, useState } from "react";
import {getUserUId} from "../db/auth/auth";
import {getUserById} from "../db/User";
import {editUser
  // ,subscribeUser
} from "../db/User";
import * as React from "react";
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export default function StoredItems({navigation}) {
  let [clothes, setClothes] = useState([]);

  React.useEffect(() => {
    getUserUId().then((id) => {
        console.log(id);
        getUserById(id).then((user)=>{
          setClothes(user[0].fav)
           console.log(user[0].fav);
          })  
    })
    ;
}, []);
  return (
    <View style={styles.container}>   
    <FlatList
      data={clothes}
      numColumns={2}
      keyExtractor={item => item.id}
      renderItem={(itemData) => (
        <View style={{ margin: 10 }}>
            <Image
                style={{
                  width: width / 2.3 -30,
                  height:  height / 2,
                    borderRadius: 10,
                    borderWidth: 1,
                    margin: 5,
                    reSizeMode : 'contain'
                }}
                source={{
                    uri: `${itemData.item}`,
                }}
            />
          <View>
          <Button title="Buy"
            color={`#8a2be2`}
            onPress={() =>{
              editUser({
                ...user,
              buy: [...user.buy,itemData.item.url]
              })
              
            }}
             />
            <Button title="Not Love" 
            color={`#ff0000`}
            onPress={() =>{
              editUser({
                ...user,
              buy: [...user.fav,itemData.item.url]
              })
              
            }}
           />
            </View>
        </View>
      )}
    />
   
  </View>
);
}

const styles = StyleSheet.create({
container: {
  flexGrow: 1,
   flex: 1,
  backgroundColor:' #fdf5e6',
  justifyContent: 'center',
    alignItems:'center'
},

});

