import React from "react";
import { StyleSheet, Text, View, TextInput, Button, ImageBackground } from "react-native";

export default function Info () {
    return (
        <View>
            <Text style={styles.description}>
               Найчастіші запитання
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