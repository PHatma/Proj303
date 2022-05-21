import { StatusBar } from "expo-status-bar";
import {Button, ScrollView,StyleSheet,View,Text, TextInput,Icon,TouchableOpacity,Image} from "react-native";

import { getUsers } from "../db/User";
import { getUserUId } from "../db/auth/auth";
import { getUserById } from "../db/User";
import { useState } from "react";
import { isSignedIn, logout } from "../db/auth/auth";
import { AuthContext } from "../pages/Utils";
import HomeForAdmain from "../pages/HomeForAdmain";
import Settings from "../pages/Settings";


import * as React from "react";

export default function Profile({ navigation }) {
  const [email, setEmail] = useState("");
  const [fullname, setFullname] = useState("");
  const [nationaliynumber, setNationaliynumber] = useState("");
  const [money, setMoney] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [password, setPassword] = useState("");
  const [id, setId] = useState("");

  React.useEffect(() => {
    getUserUId().then((id) => {
      console.log(id);
      getUserById(id).then((user) => {
        setEmail(user[0].email);
        setPassword(user[0].password);
        setFullname(user[0].fullname);
        setId(user[0].id);
        setNationaliynumber(user[0].nationaliynumber);
        setMoney(user[0].money);
        setPhonenumber(user[0].phonenumber);
      });
    });
  }, []);
  

  return (
    <ScrollView>
        <View >
        <TouchableOpacity
          style={styles.buttonFacebookStyle}
          activeOpacity={0.5}  onPress={() => navigation.navigate("Settings")}>
          <Image
            source={{
              uri:"https://th.bing.com/th/id/OIP.OGddDrWtd7ozwxqHOKny2gHaHZ?pid=ImgDet&w=626&h=625&rs=1",
            }}
            style={styles.buttonImageIconStylee}
          />
          <View style={styles.buttonIconSeparatorStyle} />
          <Text style={styles.buttonTextStyle}>Settings</Text>
        </TouchableOpacity>
   </View>  
      <View style={styles.container}>
        <Image
          source={{
            uri: "https://th.bing.com/th/id/R.3ff5dbee7bf69cb6e2fc8d7ed58ae36a?rik=GYI4klp%2fZsAMSw&pid=ImgRaw&r=0",
          }}
          style={styles.buttonImageIconStyle}
        />
      </View>
      <View>
      <Text style={styles.F} >Fullname: </Text>
     <Text style={styles.f} >{fullname}</Text>
      </View>

      <View>
      <Text style={styles.F} >Email:</Text>
        <Text style={styles.f}>{email}</Text>
      </View>

      <View>
      <Text style={styles.F} >Password:</Text>
        <Text style={styles.f}> {password}</Text>
      </View>

      <View>
      <Text style={styles.F}>Id:</Text>
        <Text style={styles.f}>{id}</Text>
      </View>

      <View>
      <Text style={styles.F} >Nationaliynumber:</Text>
        <Text style={styles.f} >{nationaliynumber}</Text>
      </View>

      <View>
      <Text style={styles.F} >Phonenumber: </Text>
        <Text style={styles.f} >{phonenumber}</Text>
      </View>
      <StatusBar style="auto" />
    </ScrollView>
    
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 1,
    padding: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonImageIconStyle: {
    padding: 10,
    margin: 5,
    height: 200,
    width: 200,
    //  resizeMode: '',
  },
  f:
  {
        color: "black",
            fontSize: 26,
            justifyContent: "space-between",
            alignItems: "center",
            textAlign:'center',
    },
    F:
    {
        fontWeight: "bold",
        color: "black",
            fontSize: 26,
            justifyContent: "space-between",
            alignItems: "center",
            textAlign:'center',
    },
      buttonFacebookStyle: 
      {
        flexDirection: 'row',
        alignItems: 'center',
      //  backgroundColor: '#000000',
        borderWidth: 0.5,
        borderColor: '#000000',
        height: 40,
        borderRadius: 5,
        margin: 5,
      },
      buttonImageIconStylee: {
        padding: 10,
        margin: 5,
        height: 25,
        width: 25,
        resizeMode: 'stretch',
      },
      buttonTextStyle: {
        fontWeight: "bold",
        fontSize: 25,
        marginBottom: 4,
        marginLeft: 10,
      },
      buttonIconSeparatorStyle: {
        backgroundColor: '#000000',
        width: 1,
        height: 40,
      },
 
});