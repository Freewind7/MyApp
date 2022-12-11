import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput, Button, ImageBackground } from "react-native";
import { AntDesign } from '@expo/vector-icons';

export default class login extends React.Component {
    
  render() {

    const {navigate} = this.props.navigation
    return (
      <View style={styles.container}>
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <Text style={styles.description}>
          Будь ласка введіть свої облікові данні
        </Text>
        <View style={styles.input}>
        <AntDesign style={styles.email}
           name="mail" 
           size={30} 
           color="white" 
          />
        <TextInput         //Поля вводу данних  
          placeholder ="Пошта"
          placeholderTextColor= "black"
        />
        </View>
        <View style={styles.input}>
        <AntDesign style={styles.lock} 
          name="lock" 
          size={34} 
          color="white" 
          />
        <TextInput 
            secureTextEntry = "true" 
            placeholder ="Пароль"
            placeholderTextColor= "black" 
        />
        </View>
        <View style={styles.LogIn}>  
          <Button                           // кнопки вхід та реєстрація
            onPress = {() =>navigate("Homescreen")}
            title = "Вхід"
            color = "Black"
          />
        </View>
        <View style={styles.singIn}>
          <Button
            onPress = {() =>navigate("register")}
            title = "Реєстрація"
            color= "Black"
          />
        </View>
        
        <View style={styles.info}> 
          <AntDesign style={styles.infoCircle} //Іконки інфо,телефон, замок 
          name="infocirlce" 
          size={30} 
          color="white" 
          />
        </View>
        </ImageBackground>  
      </View>
    );
  }
}

const image = { uri: "https://c4.wallpaperflare.com/wallpaper/210/603/584/nissan-skyline-gt-r-r34-nissan-gtr-r34-nissan-skyline-gt-r-r34-nismo-nissan-skyline-r34-car-speed-hunters-wallpaper-preview.jpg" };
                                              // Стилі
const styles = StyleSheet.create({
                                              //Основний контейнер 
  container : {
    flex : 1,
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
   // backgroundColor : "white",
    color : "white",
    
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
                                              // Кнопка Вхід
  LogIn: {
  position : "absolute",
  top : "60%",
  left: "10%",  
  width : "37%",
  borderWidth : 1,
  borderRadius : 10,
  backgroundColor : "white",
  },
                                              // Кнопка Реєстрації
  singIn: {
    position : "absolute",
    top : "60%",
    left : "55%",  
    width : "37%",
    borderWidth : 1,
    borderRadius : 10,
    backgroundColor : "white",
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
  email : {
    top : "24%",
    left : "17%",
  },
                                                  //Картинка замку
  lock : {
    top : "29%",
    left : "17%",
  },

  image : {
    flex : 1,
    justifyContent : "center",
    width : "100%",
    height : "100%",
  },

});

