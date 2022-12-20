import React from "react";
import { StyleSheet, Text, View, TextInput, Button, ImageBackground, Image } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons'; 
import { ScrollView } from "react-native-gesture-handler";




export default function HomeScreen ({navigation}) {
  const LoadList = () => {
    navigation.navigate ('List');
  }
  LoadList.navigationOptions  = {
    headerLeft: () => {
      return null;
    }
  }
  const LoadProfile = () => {
    navigation.navigate ('Profile');
  } 
    return (
      <View style={styles.container}>
        <ImageBackground source={ImageBack} resizeMode="cover" style={styles.ImageBack}>
        <View style={styles.header}>
        <ImageBackground source={HeaderBack} resizeMode="cover" style={styles.ImageBack}>
          <Ionicons style={styles.icon}
            name="people" 
            size={40} 
            color="white"
            onPress={LoadProfile} 
          />
          <Text style={styles.textHeader}>
            Новини
          </Text>
          <FontAwesome 
            style={styles.bars}
            name="bars" 
            size={40} 
            color="white" 
            onPress={LoadList}
          />
          </ImageBackground>
        </View>
        <View style={styles.containerNews}>
          <ScrollView style={styles.ScrollView}>
          <View style={styles.News}>
            <Image source={image} style={styles.image}></Image>
            <Text style={styles.containerText}>
              Назва новини
            </Text>
            <Text style={styles.TextAbout}>
              Короткий опис новини
            </Text>
          </View>
          <View style={styles.News}>
          <Image source={imageOne} style={styles.image}></Image>
            <Text style={styles.containerText}>
               Назва новини
            </Text>
            <Text style={styles.TextAbout}>
              Короткий опис новини
            </Text>
          </View>
          <View style={styles.News}>
          <Image source={imageTwo} style={styles.image}></Image>
            <Text style={styles.containerText}>
              Назва  новини
            </Text>
            <Text style={styles.TextAbout}>
              Короткий опис новини
            </Text>
          </View>  
            <View style={styles.News}>
            <Image source={imageThree} style={styles.image}></Image>
              <Text style={styles.containerText}>
                Назва новини
              </Text>
              <Text style={styles.TextAbout}>
              Короткий опис новини
            </Text>
            </View>
            <View style={styles.News}>
            <Image source={imageFour} style={styles.image}></Image>
              <Text style={styles.containerText}>
                Назва новини
              </Text>
              <Text style={styles.TextAbout}>
              Короткий опис новини
            </Text>
          </View>
          </ScrollView>
        </View>
        </ImageBackground>  
      </View>
    );
  }

  const image = { uri: "https://pro-sensys.com/upload/iblock/d15/d151cc8bfa2f848ee64ad0c574377b6e.jpg" }
  const imageOne = { uri: "https://formulamotors.ru/upload/resize_cache/iblock/6f4/800_320_2/6f4f28e260390baff47ff6293da938bd.jpg"}
  const imageTwo = {uri: "https://s1.stc.all.kpcdn.net/putevoditel/projectid_406014/images/tild6536-3938-4230-b865-643131353562__20160810_gaf_u40_940.jpg"}
  const imageThree = {uri: "https://i.work.ua/career_guide/50_b.png"}
  const imageFour = {uri: "http://diplomy-goznak.com/images/dyplom-avtomekhanyka.jpg"}
  const ImageBack = {uri:"https://img.freepik.com/premium-photo/auto-repair-service-station-blurred-background_293060-4493.jpg?w=740"}
  const HeaderBack = {uri:"https://oir.mobi/uploads/posts/2021-03/1616974365_17-p-serii-fon-tekstura-18.jpg"}

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
  width : "50%",
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

  bars: {
    top: -50,
    left: "87%"
  },

  image : {
    flex : 1,
    width : "100%",
    borderRadius : 10,
  },

  header: {
    height: "15%",
    backgroundColor: "#2474DB",
    borderRadius : 10,
    overflow : "hidden",
  },

  textHeader: {
    color: "white",
    left: "38%",
    fontSize: 30,
    width: "50%",
    height: "50%"
  },

  icon : {
    top: "40%",
    left: "5%"
  },

  containerNews : {
    width : "100%",
    height : "100%",
  },

  TextAbout : {
    flex : 1,
    textAlign : "center",
    borderWidth : 1,
    borderRadius : 10,
    margin : "2%",
    overflow : "hidden",
    backgroundColor : "white",
  },

  containerText : {
    textAlign : "center",
    fontSize : 30,
    color: "white",
    },

  News : {
    flex : 1,
    borderWidth : 1,
    borderRadius : 10,
    flexDirection : "column",
    marginTop : "10%",
    width : "100%",
    height : 350,
    overflow : "hidden",
    backgroundColor : "black",
  },

  ScrollView : {
    paddingLeft : "2%",
    paddingRight : "2%",
    flex : 1,
    flexDirection : "column",
  },

  ImageBack : {
    width: "100%",
    height : "100%"
  },

});