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
  const LoadAutoparts = () => {
    navigation.navigate ('Autoparts');
  }
  const LoadCamera = () => {
    navigation.navigate ('Camera');
  }
  const LoadChangeCar = () => {
    navigation.navigate ('ChangeCar');
  }
  const LoadDiscount = () => {
    navigation.navigate ('Percent');
  }
  const LoadHistory = () => {
    navigation.navigate ('History');
  }
  const LoadService = () => {
    navigation.navigate ('Service');
  }  
      return (
        <View style={styles.container}>
          <ImageBackground source={image} resizeMode="cover" style={styles.image}>
          <View style={styles.header}>
            <ImageBackground source={ImageBack} resizeMode="cover" style={styles.ImageBack}>
              <Text style={styles.textHeader}>
                Доступні дії
              </Text>
            </ImageBackground>
          </View>
        <View style={styles.menuContainer}>
            <View style={styles.description}>
            <FontAwesome name="history" size={24} color="white" style={styles.right} /> 
            <Text style={styles.iconList} onPress={LoadHistory}>
                 Історія обслуговування
            </Text>
            </View>
            <View style={styles.description}>
            <AntDesign name="car" size={24} color="white" style={styles.right} /> 
            <Text style={styles.iconList} onPress={LoadChangeCar}>
                 Підмінний автомобіль
            </Text>
            </View>
            <View style={styles.description}>
            <AntDesign name="calendar" size={24} color="white" style={styles.right} /> 
            <Text style={styles.iconList} onPress={LoadService} >
                Запис на сервіс
            </Text>
            </View>
            <View style={styles.description}>
            <Octicons name="device-camera-video" size={24} color="white" style={styles.right} /> 
            <Text style={styles.iconList} onPress={LoadCamera}>
              Спостерігати за авто 
            </Text>
            </View>
            <View style={styles.description}>
            <FontAwesome name="gears" size={24} color="white" style={styles.right} />
            <Text style={styles.iconList} onPress={LoadAutoparts}> 
                 Автозапчастини
            </Text>
            </View>
            <View style={styles.description}>
            <Feather name="percent" size={24} color="white" style={styles.right} />
            <Text style={styles.iconList} onPress={LoadDiscount}>
                Акції та скидки
            </Text>
            </View>
            <View style={styles.description}>
            <FontAwesome name="home" size={24} color="white" style={styles.right}/> 
            <Text style={styles.iconList} onPress={LoadHome}>
                Головне меню
            </Text>
            </View>
          </View>
          </ImageBackground>
        </View>
  
      );
    }

    const ImageBack = {uri: "https://oir.mobi/uploads/posts/2021-03/1616974365_17-p-serii-fon-tekstura-18.jpg"}
    const image = {uri: "https://img.freepik.com/premium-photo/auto-repair-service-station-blurred-background_293060-4493.jpg?w=740"}

    const styles = StyleSheet.create({

container : {
flex : 1,
flexWrap : "wrap",
position : "absolute",
width : "100%",
height : "100%",

},

description : {
flex : 1,
flexWrap: "wrap",
fontSize : 20,
color : "white",
borderWidth : 1,
borderRadius : 10,
margin : 10,
textAlign : "center",
width : "90%",
backgroundColor : "black",
overflow : "hidden",
},


header: {
  height: "15%",
  borderRadius : 10,
  overflow : "hidden",
},

textHeader: {
  flex : 1,
  top : "35%",
  color: "white",
  textAlign : "center",
  fontSize: 30,
  overflow : "hidden",
},

ImageBack : {
  width: "100%",
  height : "100%",
  borderRadius : 10,
  overflow: "hidden",
},

menuContainer : {
  flex : 1,
  flexDirection : "column",
  flexWrap : "wrap",
  alignContent : "center",
},

image : {
  width: "100%",
  height : "100%",
  overflow: "hidden",
},

iconList: {
  color :"white",
  fontSize : 21,
  margin : "5%",
},

right : {
  top : "25%",
  marginRight : "10%",
  marginLeft : "3%"
}
});