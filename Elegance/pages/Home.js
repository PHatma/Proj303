import { View,StyleSheet,FlatList, Button,Text ,Image,Dimensions} from "react-native";
import { useEffect, useState } from "react";
import {getClothes,subscribe} from "../db/clothes/clothes";
import {getUsers,editUser
  // ,subscribeUser
} from "../db/User";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
export default function Home({navigation}) {
  const [clothes, setClothes] = useState([]);
  const [users, setUsers] = useState([]);
   const [user, setUser] = useState([]);

  const getClotheList = async () => {
    const c = await getClothes();
    setClothes(c);
    console.log("clothes", c);
  };
  useEffect(() => {
    getClotheList();
  }, []);
  
  useEffect(() => {
    const unsubscribe = subscribe(({ change, snapshot }) => {
     
      if (change.type === "added") {
        console.log("New clothe: ", change.doc.data());
        getClotheList();
      }
      if (change.type === "modified") {
        console.log("Modified clothe: ", change.doc.data());
        getClotheList();
      }
      if (change.type === "removed") {
        console.log("Removed clothe: ", change.doc.data());
        getClotheList();
      }
      // }
    });

    return () => {
      unsubscribe();
    };
  }, []
  );

  const getUserss = async () => {
    const arr = await getUsers();
    setUsers(arr);
    console.log(user,"user");
  };
   
     useEffect(() => {
    getUserss();
  }, []);

  // useEffect(() => {
  //   const unsubscribe = subscribeUser(({ change, snapshot }) => {
     
  //     if (change.type === "added") {
  //       getUserss();
  //     }
  //     if (change.type === "modified") {
  //       getUserss();
  //     }
  //     if (change.type === "removed") {
  //       getUserss();
  //     }
  //   });

  //   return () => {
  //     unsubscribe();
  //   };
  // }, []
  // );
  // useEffect(() => {
  //   if (!users?.length) return;
  //  const user = users.find((e) => e.email == auth.currentUser.email);
   
  //  setUser(user);

  // })
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
                width: width / 2.1 -30,
                height:  height / 1.3,
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
          <View>
          <Button title="Buy"
            color={`#8a2be2`}
            onPress={() =>{
              editUser({
                ...user,
              buy: [...user.buy,itemData.item.id]
              })
              
            }}
             />
            <Button title="Love" 
            color={`#ff0000`}
            onPress={() =>{
              editUser({
                ...user,
              buy: [...user.fav,itemData.item.id]
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
   flex: 1,
   backgroundColor :`#000000`,
},
textStyle:{
  fontSize:18,
  color:'white',
  fontWeight:'bold',
  textAlign: 'center',
},
});




