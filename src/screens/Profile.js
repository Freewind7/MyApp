import React from "react";
import { StyleSheet, Text, View, TextInput, Button, ImageBackground } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons'; 




export default function Profile () {

    return (
      <View style={styles.container}>
        <Text >Тут профіль</Text>
      </View>
    );
  }


                                              // Стилі
const styles = StyleSheet.create({
                                              //Основний контейнер 
  container : {
    flex : 1,
    position : "absolute",
    width : "100%",
    height : "100%",
    color : "black" 
  },
 
});