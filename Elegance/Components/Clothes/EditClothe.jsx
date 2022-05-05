import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { useState } from "react";
import { editClothe } from "../../db/clothes/clothes";

const EditClothe = ({ clothe: clotheToEdit, onSave }) => {
  const [clotheToEditName, setClotheToEditName] = useState(clotheToEdit.name);

  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 2,
        }}
      >
        <TextInput
          onChangeText={setClotheToEditName}
          defaultValue={clotheToEditName}
          style={{ flex: 2, borderColor: "black", borderWidth: 2 }}
        />
        <Button
          title="Save clothe"
          onPress={() => {
            editClothe({ ...clotheToEdit, name: clotheToEditName })
              .then((d) => {
                onSave();
                console.log(clotheToEditName);
              })
              .catch((e) => console.log(e));
          }}
        />
      </View>
    </View>
  );
};

export default EditClothe;

const styles = StyleSheet.create({});
