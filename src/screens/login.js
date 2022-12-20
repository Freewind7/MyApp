import React, {useState} from "react";
import { StyleSheet, Text, View, TextInput, Button, ImageBackground } from "react-native";
import { AntDesign } from '@expo/vector-icons';


export default function Login ({navigation}) {
  const LoadHome = () => {
    navigation.navigate ('Home');
  }  
  const LoadScene = () => {
    navigation.navigate ('Register');
  }
  const LoadInfo = () => {
    navigation.navigate ('Info');
   }
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); 
    return (
      <View style={styles.container}>
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <Text style={styles.description}>
          Будь ласка введіть свої облікові данні 
        </Text>
        <View style={styles.input}>
        <AntDesign style={styles.email}
           name="mail" 
           size={24} 
           color="black" 
          />
        <TextInput         //Поля вводу данних  
          placeholder ="Пошта"
          placeholderTextColor= "black"
          style={styles.TextInputStyle}
          onChangeText={(email) => setEmail(email)} 
        />
        </View>
        <View style={styles.input}>
        <AntDesign style={styles.lock} 
          name="lock" 
          size={30} 
          color="black" 
        />
        <TextInput 
            secureTextEntry = "true" 
            placeholder ="Пароль"
            placeholderTextColor= "black"
            style={styles.TextInputStyle}
            onChangeText={(password) => setPassword(password)}  
        />
        </View>
        <View style={styles.LogIn}> 
          <Button
            onPress = {LoadHome}
            title = "Вхід"                           // кнопки вхід та реєстрація
            color = "Black"
          />
        </View>
        <View style={styles.singIn}>
          <Button
            onPress = {LoadScene}
            title = "Реєстрація"
            color= "Black"
          />
        </View>
        
        <View style={styles.info}> 
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
  TextInputStyle : {
     bottom: "25%",
     left : "5%"
  }, 
                                                                                    //Поля вводу
  input: {  
  backgroundColor: "white",
  width :"50%",
  top : "1%",
  left : "25%",
  borderWidth : 1,
  borderRadius : 10,
  padding : 1,
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
                                             
  infoCircle : {                                //Картинка інфо
    top : "-135%",
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
  },

});


/*export default class App extends React.Component {

  /*state = { 
    isFontLoaded : false
  }
  async componentDidMount () {
    await Font.loadAsync ({
      Outfit : require ("./src/fonts/Outfit-Thin.ttf"),
      ZenKakuGothicNew : require ("./src/fonts/ZenKakuGothicNew-Light.ttf"),
    });

  this.setState({isFontLoaded:true});

  }*/
  /*
  render () {
    return <Stack/>; 
  }
}*/
