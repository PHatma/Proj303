import { View,StyleSheet,FlatList,Image,Dimensions } from "react-native";
import { useEffect, useState } from "react";
import {getClothes,editClothe,subscribe
} from "../db/clothes/clothes";
import { ScrollView } from "react-native-web";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
export default function Payment({navigation}) {
  
  const getPaymentList = async () => {
    const c = await getClothes();
    setClothes(c);
    console.log("clothes", c);
  };

  useEffect(() => {
    getPaymentList();
  }, []);
  const [clothes, setClothes] = useState([]);
  return (
    <View style={styles.container}>   
    <FlatList
      data={clothes}
      numColumns={2}
      keyExtractor={item => item.id}
      renderItem={(itemData) => (
          itemData.item.buy?(<View style={{ margin: 10 }}> 
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
  });
  
  