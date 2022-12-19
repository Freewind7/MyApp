import React from "react";
import { StyleSheet, Text, View, TextInput, Button, ImageBackground } from "react-native";

export default function Info () {
    return (
        <View>
            <Text style={styles.description}>
            Тут буде список найчастіших питань
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({

description : {
fontSize : 20,
top : 300,
left : "5%",
color : "black",
        
},

})