import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { collection, getDocs } from "firebase/firestore"; 
import { db } from '../../db/Config';

const Clothes = () => {
    getDocs(collection(db, "clothes")).then(
        querySnapshot=>
    querySnapshot.forEach((doc) => {
      console.log(doc.id,doc.data());
    })
    );
  return (
    <View>
      <Text>Clothes</Text>
    </View>
  )
}

export default Clothes

const styles = StyleSheet.create({})