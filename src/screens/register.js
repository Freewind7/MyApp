import React from "react";
import { StyleSheet, Text, View, TextInput, Button, ImageBackground } from "react-native";
import { AntDesign } from '@expo/vector-icons';

export default function Register ({navigation}) {
  const LoadHome = () => {
    navigation.navigate ('Home');
  }
  LoadHome.navigationOptions  = {
    headerLeft: () => {
      return null;
    }
  }  
   const LoadInfo = () => {
    navigation.navigate ('Info');
   } 
  
    return (
      <View style={styles.container}>
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <Text style={styles.description}>
          Введіть свою пошту та паролі
        </Text>
        <View style={styles.input}>
        <AntDesign style={styles.email}
           name="mail" 
           size={21} 
           color="black" 
          />
        <TextInput         //Поля вводу данних  
          placeholder ="Пошта"
          placeholderTextColor= "black"
          style={styles.TextInputStyle} 
        />
        </View>
        <View style={styles.input}>
        <AntDesign style={styles.lock} 
          name="lock" 
          size={24} 
          color="black" 
          />
        <TextInput 
            secureTextEntry = "true" 
            placeholder ="Пароль"
            placeholderTextColor= "black"
            style={styles.TextInputStyle}  
        />
        </View>
        <View style={styles.input}>
        <AntDesign style={styles.lock} 
          name="lock" 
          size={24} 
          color="black" 
          />
        <TextInput 
            secureTextEntry = "true" 
            placeholder ="Пароль ще раз"
            placeholderTextColor= "black"
            style={styles.TextInputStyle}  
        />
        </View>
        <View style={styles.LogIn}>  
          <Button                           // кнопки вхід та реєстрація
            onPress = {LoadHome}
            title = "Зареєструватись"
            color = "Black"
          />
        </View>
        <View> 
          <AntDesign style={styles.infoCircle} //Іконки інфо,телефон, замок 
          name="infocirlce" 
          size={30} 
          color="white"
          onPress={LoadInfo} 
          />
        </View>
        </ImageBackground>  
      </View>
    );
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
    left : "15%",
    color : "white",
    
  },
                                                                                    //Поля вводу
  input: {
  backgroundColor: "white",
  width :"50%",
  top : "10%",
  left : "25%",
  borderWidth : 1,
  borderRadius : 10,
  margin : 10,
  },
                                              // Кнопка Вхід
  LogIn: {
  top : "12%",
  left: "27%",  
  width : "51%",
  borderWidth : 1,
  borderRadius : 10,
  backgroundColor : "white",
  },

  TextInputStyle : {
    bottom: "25%",
    left : "5%",
    opacity : 90,

 },   
                                               //Картинка інфо
  infoCircle : {
    top : "150%",
    left: "80%"
  },
                                                // Картинка телефона
  email : {
    top : "24%",
    left : "80%",
  },
                                                  //Картинка замку
  lock : {
    top : "29%",
    left : "80%",
  },

  image : {
    flex : 1,
    justifyContent : "center",
    width : "100%",
    height : "100%",
  },

});