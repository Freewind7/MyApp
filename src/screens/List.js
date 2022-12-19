import React from "react";
import { StyleSheet, Text, View, TextInput, Button, ImageBackground } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons'; 



export default function List ({navigation}) {
  const LoadHome = () => {
    navigation.navigate ('Home');
  }  
    
      return (
        <View style={styles.container}>
           <View style={styles.header}>
           <ImageBackground source={ImageBack} resizeMode="cover" style={styles.ImageBack}>
            <Text style={styles.textHeader}>
              Доступні дії
            </Text>
            </ImageBackground>
        </View>
        <View style={styles.menuContainer}>
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
            <Text style={styles.description}>
              <FontAwesome name="history" size={24} color="white" /> 
                Перегляд історії обслуговування
            </Text>
            <Text style={styles.description}>
              <AntDesign name="car" size={24} color="white" /> 
                Виклик підмінного автомобіля
            </Text>
            <Text style={styles.description}>
              <AntDesign name="calendar" size={24} color="white" /> 
                Запис на сервіс
            </Text>
            <Text style={styles.description}>
              <Octicons name="device-camera-video" size={24} color="white" /> 
                Камери спостереження
            </Text>
            <Text style={styles.description}>
              <FontAwesome name="gears" size={24} color="white" /> 
                Замовлення автозапчастин
            </Text>
            <Text style={styles.description}>
              <Feather name="percent" size={24} color="white" />
                Акції та скидки
            </Text>
            <Text style={styles.description} onPress={LoadHome}>
              <FontAwesome name="home" size={24} color="white" /> 
                Головне меню
            </Text>
            </ImageBackground>
          </View>
        </View>
  
      );
    }

    const ImageBack = {uri: "https://oir.mobi/uploads/posts/2021-03/1616974365_17-p-serii-fon-tekstura-18.jpg"}
    const image = {uri: "https://img.freepik.com/premium-photo/auto-repair-service-station-blurred-background_293060-4493.jpg?w=740"}

    const styles = StyleSheet.create({

container : {
flex : 1,
position : "absolute",
width : "100%",
height : "100%",

},

description : {
fontSize : 21,
color : "white",
borderWidth : 1,
borderRadius : 10,
margin : 25,
textAlign : "center",
width : "90%",
backgroundColor : "black",
overflow : "hidden",
},


header: {
  height: "15%",
  backgroundColor: "#2474DB",
  borderRadius : 10,
  overflow : "hidden",
},

textHeader: {
  flex : 1,
  top : "35%",
  color: "white",
  textAlign : "center",
  fontSize: 30,
},

ImageBack : {
  width: "100%",
  height : "100%",
  borderRadius : 10,
},

menuContainer : {
  flex : 1,
  flexDirection : "column",
  flexWrap : "nowrap",
},

image : {
  width: "100%",
  height : "100%",
}
});