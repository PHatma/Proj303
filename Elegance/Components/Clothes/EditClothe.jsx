import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { useState } from "react";
import { editClothe } from "../../db/clothes/clothes";

const EditClothe = ({ clothe: clotheToEdit, onSave }) => {
  const [clotheToEditName, setClotheToEditName] = useState(clotheToEdit.name);
  const [clotheToEditId, setClotheToEditId] = useState(clotheToEdit.id);
  const [clotheToEditPrice, setClotheToEditPrice] = useState(clotheToEdit.price);
  const [clotheToEditUrl, setClotheToEditUrl] = useState(clotheToEdit.url);

  return (
    <View>
      <View>
        <TextInput
         placeholder=" Id"
          onChangeText={setClotheToEditId}
          defaultValue={clotheToEditId}
          style={{ flex: 2, borderColor: "black", borderWidth: 2 }}
        />
        <TextInput
         placeholder=" Name"
          onChangeText={setClotheToEditName}
          defaultValue={clotheToEditName}
          style={{ flex: 2, borderColor: "black", borderWidth: 2 }}
        />
         <TextInput
         placeholder=" Price"
          onChangeText={setClotheToEditPrice}
          defaultValue={clotheToEditPrice}
          style={{ flex: 2, borderColor: "black", borderWidth: 2 }}
        />
         <TextInput
         placeholder=" Url "
          onChangeText={setClotheToEditUrl}
          defaultValue={clotheToEditUrl}
          style={{ flex: 2, borderColor: "black", borderWidth: 2 }}
        />
        <Button
          title="Save clothe"
          color={`#8a2be2`}
          onPress={() => {
            editClothe({ 
            ...clotheToEdit,
               name: clotheToEditName 
              ,id: clotheToEditId , price: clotheToEditPrice ,
              url: clotheToEditUrl } , onSave())
               .catch((e) => console.log(e));
          }}
        />
      </View>
    </View>
  );
};

export default EditClothe;

const styles = StyleSheet.create({});
