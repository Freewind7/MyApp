import React from "react";
import { StyleSheet, Text, View, TextInput, Button, ImageBackground } from "react-native";
import { Feather } from '@expo/vector-icons'; 


export default function Profile () {
    return (
        <View style={styles.container}>
            <Text style={styles.description}>
              Скрін профіля
            </Text>
        </View>
    )
}
 
const styles = StyleSheet.create({

description : {
textAlign : "center",
fontSize : 20,
top : 300,
color : "black",        
},

header : {
  height : "60%",
  width: "100%",
},

profile: {
  backgroundColor : "red",
  height: "50%",
  left : "50%",
  borderWidth : 1,
}
})