import { View,StyleSheet,FlatList, Button,Text ,Image,Dimensions} from "react-native";
import { useEffect, useState } from "react";
import {getClotheById,getClothes,subscribe
} from "../db/clothes/clothes";
import {getUsers,editUser
  // ,subscribeUser
} from "../db/User";
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export default function StoredItems({navigation}) {
  const [clothes, setClothes] = useState([]);
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState([]);
 //  const [item,setitem]=useState([])
  const getFavList = async () => {
    const c = await getClothes();
    setClothes(c);
    console.log("clothes", c);
  };
//  React.useEffect(() => {
//     getClotheById().then((id) => {
//         console.log(id);
//         getClotheById(id).then((user)=>{
//            setClothes(user[0].clothes);
//             setId(user[0].id);
//         })
//     });
//     }, []);
//----------------------------------------------------
// useEffect(() => {
//   if (!users?.length) return;
//   if (!user.buy?.length) return;
// const arr=[];
//   const item = user.buy;
//    item.map((e)=>{
// arr.push(e)
//   })
  useEffect(() => {
    getFavList();
  }, []);
  useEffect(() => {
    const unsubscribe = subscribe(({ change, snapshot }) => {
     
      if (change.type === "added") {
        console.log("New clothe: ", change.doc.data());
        getFavList();
      }
      if (change.type === "modified") {
        console.log("Modified clothe: ", change.doc.data());
        getFavList();
      }
      if (change.type === "removed") {
        console.log("Removed clothe: ", change.doc.data());
        getFavList();
      }
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
                  height:  height / 2.5,
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
            <Button title="Not Love" 
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
  flexGrow: 1,
   flex: 1,
  backgroundColor:' #fdf5e6',
},
textStyle:{
  fontSize:18,
  color:'black',
  fontWeight:'bold',
  textAlign: 'center',
},

});

