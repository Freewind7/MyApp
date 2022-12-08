import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";



export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.description}>Будь ласка введіть свої облікові данні</Text>
        <TextInput style={styles.input} keyboardType = "phone-pad"  placeholder ="Номер телефону"/>
        <TextInput style={styles.input} secureTextEntry = "true" placeholder ="Пароль" />
      </View>
    );
  }
}


// Стилі
const styles = StyleSheet.create({
  //Основний контейнер 
  container : {
    backgroundColor : "lightblue",
    position : "absolute",
    width : "100%",
    height : "100%", 
  },
  // Текст над полями
  description : {
    position : "absolute",
    top : "35%",
    left : "20%",
  },
  //Поля вводу
  input: {
  backgroundColor: "white",
  width :"50%",
  top : "40%",
  left : "25%",
  borderWidth : 1,
  borderRadius : 10,
  padding : 10,
  margin : 10,
  },
});

// Функції


