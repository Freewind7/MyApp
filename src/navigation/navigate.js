import React from "react";
import Login from "../screens/Login"
import Register from "../screens/Register";
import HomeScreen from "../screens/Homescreen";
import List from "../screens/List";
import Info from "../screens/Info"
import Profile from "../screens/Profile"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator ();

export default function navigate () {

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                    name="Login" 
                    component ={Login} 
                    options ={{
                        headerShown: false
                    }}
                />   
                <Stack.Screen 
                    name="Home" 
                    component={HomeScreen} 
                    options ={{ 
                        title : "Новини", 
                        headerShown: false,    
                    }}
                />
                <Stack.Screen 
                    name="Register" 
                    component={Register} 
                    options ={{
                        headerShown: false
                    }}
                />
                <Stack.Screen 
                    name="List" 
                    component={List} 
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen 
                    name="Info" 
                    component={Info} 
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name="Profile"
                    component={Profile}
                    options={{
                        headerShown: false
                    }}
                />    
            </Stack.Navigator>
        </NavigationContainer>
    )
}

