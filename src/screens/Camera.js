import React from "react";
import { StyleSheet, Text, View, TextInput, Button, ImageBackground } from "react-native";

export default function Camera () {
    return (
        <View>
            <Text style={styles.description}>
            Скрін спостереження
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