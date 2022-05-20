import { View,StyleSheet,FlatList,Image,Dimensions,Button ,Text} from "react-native";
import { useEffect, useState } from "react";
import {getClothes,getClotheById,subscribe} from "../db/clothes/clothes";
import {getUsers,editUser
  // ,subscribeUser
} from "../db/User";
import InCard from "../Components/InCard";
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export default function Payment({navigation}) {
  const [clothes, setClothes] = useState([]);
  const [users, setUsers] = useState([]);
   const [user, setUser] = useState([]);
  //  let temp =useState([]);

  const getPaymentList = async () => {
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
//   setitem(arr)
// }, [users,item]);
  useEffect(() => {
    getPaymentList();
  }, []);
  
  useEffect(() => {
    const unsubscribe = subscribe(({ change, snapshot }) => {
     
      if (change.type === "added") {
        console.log("New clothe: ", change.doc.data());
        getPaymentList();
      }
      if (change.type === "modified") {
        console.log("Modified clothe: ", change.doc.data());
        getPaymentList();
      }
      if (change.type === "removed") {
        console.log("Removed clothe: ", change.doc.data());
        getPaymentList();
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
        <View style={{ margin: 5 }}> 
            <Image
                style={{
                  width: width / 2.1 -30,
                  height:  height / 1.5,
                    borderRadius: 10,
                    borderWidth: 1,
                    margin: 3,
                    reSizeMode : 'contain'
                }}
                source={{
                    uri: `${itemData.item.url}`,
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
  },
  });
  
  