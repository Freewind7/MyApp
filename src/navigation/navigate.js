import React from "react";
import Login from "../screens/Login"
import Register from "../screens/Register";
import HomeScreen from "../screens/Homescreen";
import List from "../screens/List";
import Info from "../screens/Info"
import Profile from "../screens/Profile"
import Autoparts from "../screens/Autoparts";
import Camera from "../screens/Camera";
import ChangeCar from "../screens/ChangeCar";
import Percent from "../screens/Percent";
import History from "../screens/History"
import Service from "../screens/Service";
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
                <Stack.Screen
                    name= "Autoparts"
                    component={Autoparts}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name= "Camera"
                    component={Camera}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name= "ChangeCar"
                    component={ChangeCar}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name= "Percent"
                    component={Percent}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name= "History"
                    component={History}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name= "Service"
                    component={Service}
                    options={{
                        headerShown: false
                    }}
                />         
            </Stack.Navigator>
        </NavigationContainer>
    )
}

