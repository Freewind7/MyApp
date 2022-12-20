import React from "react";
import { StyleSheet, Text, View, TextInput, Button, ImageBackground } from "react-native";

export default function ChangeCar () {
    return (
        <View>
            <Text style={styles.description}>
                Скрін підмінний автомобіль 
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({

description : {
fontSize : 20,
top : 300,
textAlign : "center",
color : "black",
        
},

})