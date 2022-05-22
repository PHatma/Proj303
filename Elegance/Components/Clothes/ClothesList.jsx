import { View, Text, Button, TextInput ,ScrollView,StyleSheet} from "react-native";
import { useEffect, useState } from "react";
import {getClothes,addClothe,deleteClothe,subscribe
} from "../../db/clothes/clothes";
import EditClothe from "./EditClothe";

const ClothesList = () => {
  const getClothesList = async () => {
    const c = await getClothes();
    setClothes(c);
    console.log("clothes", c);
  };

  useEffect(() => {
    getClothesList();
  }, []);

  useEffect(() => {
    const unsubscribe = subscribe(({ change, snapshot }) => {
      
      if (change.type === "added") {
        console.log("New clothe: ", change.doc.data());
        getClothesList();
      }
      if (change.type === "modified") {
        console.log("Modified clothe: ", change.doc.data());
        getClothesList();
      }
      if (change.type === "removed") {
        console.log("Removed clothe: ", change.doc.data());
        getClothesList();
      }
      // }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const [clothes, setClothes] = useState([]);
  const [clotheId, setClotheId] = useState();
  const [clotheName, setClotheName] = useState("");
  const [clothePrice, setClothePrice] = useState("");
  const [clotheUrl, setClotheUrl] = useState("");
  const [clotheToEdit, setClotheToEdit] = useState(undefined);

  return clotheToEdit ? (
    <EditClothe clothe={clotheToEdit} onSave={()=>setClotheToEdit(undefined)} />
  ) : (
    <ScrollView>
    <View>
      <View>
      <TextInput
      placeholder=" Id"
       onChangeText={setClotheId}
       style={{ 
          borderColor: "black", borderWidth: 2 }}
     />
        <TextInput
         placeholder=" Name "
          onChangeText={setClotheName}
          style={{ 
            // flex: 2,
             borderColor: "black", borderWidth: 2 }}
        />
        <TextInput
      placeholder=" Price"
       onChangeText={setClothePrice}
       style={{ 
          borderColor: "black", borderWidth: 2 }}
     />
       <TextInput
      placeholder=" Url of image "
       onChangeText={setClotheUrl}
       style={{ 
          borderColor: "black", borderWidth: 2 }}
     />
       <Button
          title="Add clothe"
          color={`#8a2be2`}
          onPress={() =>
            addClothe({ name: clotheName , id: clotheId ,price: clothePrice ,
              url: clotheUrl || "new clothe" + clothes.length}
              )
          }
        />
      </View>
      {clothes.map((c) => (
        <View
          key={c.id}
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 2,
          }}
        >
           <View >
           <Text style={styles.textStyle}>
           Id: {c.id}
          </Text>
          <Text style={styles.textStyle} >
           Name:  {c.name}
          </Text>
          </View>
          <View>
         <Button title="Update" color={`#ff0000`}  onPress={() =>setClotheToEdit(c)} />
          <Button title="Delete" color={`#8a2be2`} onPress={() => deleteClothe(c.id)} />
          </View>
        </View>

      ))}
    </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  textStyle:{
    fontSize:18,
    color:'black',
    fontWeight:'bold',
  },
  });
export default ClothesList;
