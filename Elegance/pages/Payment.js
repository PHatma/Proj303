import { View,StyleSheet,FlatList,Image,Dimensions } from "react-native";
import { useEffect, useState } from "react";
import {getClothes} from "../db/clothes/clothes";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export default function Payment({navigation}) {
  const [clothes, setClothes] = useState([]);
  //const [id, setId] = useState('');
  const getPaymentList = async () => {
    const c = await getClothes();
    setClothes(c);
    console.log("clothes", c);
  };
 // React.useEffect(() => {
  //   getClotheId().then((id) => {
  //       console.log(id);
  //       getClotheById(id).then((user)=>{
  //          setClothes(user[0].clothes);
  //           setId(user[0].id);
  //       })
  //   });
  //   }, []);
  useEffect(() => {
    getPaymentList();
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
                  width: width / 2,
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
  });
  
  