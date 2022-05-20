import { View, Text, Button, TextInput ,ScrollView} from "react-native";
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
  const [clotheName, setClotheName] = useState("");
  const [clotheToEdit, setClotheToEdit] = useState(undefined);

  return clotheToEdit ? (
    <EditClothe clothe={clotheToEdit} onSave={()=>setClotheToEdit(undefined)} />
  ) : (
    <ScrollView>
    <View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 2,
        }}
      >
        <TextInput
          onChangeText={setClotheName}
          style={{ flex: 2, borderColor: "black", borderWidth: 2 }}
        />
        <Button
          title="Add clothe"
          onPress={() =>
            addClothe({ name: clotheName || "new clothe" + clothes.length })
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
          <Text
            onPress={() => {
              setClotheToEdit(c);
              console.log('clotheToEdit', c);
            }}
          >
            {c.name}
          </Text>
          <Button title="Delete" onPress={() => deleteClothe(c.id)} />
        </View>
      ))}
    </View>
    </ScrollView>
  );
};

export default ClothesList;
