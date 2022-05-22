import { View,StyleSheet,FlatList,Image,Dimensions,Button ,Text} from "react-native";
import { useEffect, useState } from "react";
import {getUserUId} from "../db/auth/auth";
import {getUserById} from "../db/User";
import * as React from "react";
import InCard from "../Components/InCard";
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export default function Payment({navigation}) {
  let [clothes, setClothes] = useState([]);

  React.useEffect(() => {
    getUserUId().then((id) => {
        console.log(id);
        getUserById(id).then((user)=>{
          setClothes(user[0].buy)
           console.log(user[0].buy);
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
        <View style={{ margin: 5 }}> 
            <Image
                style={{
                  width: width / 2.3 -30,
                  height:  height / 2,
                    borderRadius: 10,
                    borderWidth: 1,
                    margin: 3,
                    reSizeMode : 'contain'
                }}
                source={{
                    uri: `${itemData.item}`,
                }}
            />
             <View> 
           <InCard /> 
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
  
  