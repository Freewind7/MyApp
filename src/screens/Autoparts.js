import React from "react";
import { StyleSheet, Text, View, TextInput, Button, ImageBackground } from "react-native";

export default function Autoparts () {
    return (
        <View>
            <Text style={styles.description}>
                 Cкрін  автозапчастини
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