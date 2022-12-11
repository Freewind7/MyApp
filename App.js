import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { AntDesign } from '@expo/vector-icons';



export default class App extends Component {
  render() {
    const handlePress = () => false
    return (
      <View style={styles.container}>
        <Text style={styles.description}>
          Будь ласка введіть свої облікові данні
        </Text>
        <TextInput style={styles.input}          //Поля вводу данних
          keyboardType = "phone-pad"  
          placeholder ="Номер телефону"
        />
        <TextInput style={styles.input}
            secureTextEntry = "true" 
            placeholder ="Пароль" 
        />
        
        <View style={styles.LogIn}>  
          <Button                           // кнопки вхід та реєстрація
            onPress = {handlePress}
            title = "Вхід"
            color = "red"
          />
        </View>
        <View style={styles.singIn}>
          <Button
            onPress = {handlePress}
            title = "Реєстрація"
            color= "Gray"
          />
        </View>
        
        <View style={styles.info}> 
          <AntDesign style={styles.infoCircle} //Іконки інфо,телефон, замок 
          name="infocirlce" 
          size={30} 
          color="black" 
          />
          <AntDesign style={styles.phone}
           name="phone" 
           size={30} 
           color="black" 
          />
          <AntDesign style={styles.lock} 
          name="lock" 
          size={34} 
          color="black" 
          />
        </View>  
      </View>
    );
  }
}


                                              // Стилі
const styles = StyleSheet.create({
                                              //Основний контейнер 
  container : {
    backgroundColor : "#97a4ba",
    position : "absolute",
    width : "100%",
    height : "100%", 
  },
                                             // Текст над полями
  description : {
    position : "absolute",
    fontSize : 20,
    top : "35%",
    left : "4%",
  },
                                             //Поля вводу
  input: {
  backgroundColor: "#656970",
  width :"50%",
  top : "40%",
  left : "25%",
  borderWidth : 1,
  borderRadius : 10,
  padding : 10,
  margin : 10,
  },
                                              // Кнопка Вхід
  LogIn: {
  position : "absolute",
  top : "60%",
  left: "10%",  
  width : "37%",
  borderWidth : 1,
  borderRadius : 10,
  backgroundColor : "#656970",
  },
                                              // Кнопка Реєстрації
  singIn: {
    position : "absolute",
    top : "60%",
    left : "55%",  
    width : "37%",
    borderWidth : 1,
    borderRadius : 10,
    backgroundColor : "#656970",
  },
                                                //Контейнер картинок
    info : {
    flex : 1,
    width : "100%",
    height : "100%",
  },
                                               //Картинка інфо
  infoCircle : {
    top : "40%",
    left: "80%"
  },
                                                // Картинка телефона
  phone : {
    top : "24%",
    left : "17%",
  },
                                                  //Картинка замку
  lock : {
    top : "29%",
    left : "17%",
  },

});


