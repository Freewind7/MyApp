import {createStackNavigator} from "@react-navigation/stack";
import {createAppContainer} from "react-navigation";
import {login} from  "./screens/login";
import {register} from "./screens/register";

const stackNavigatorOptions = {
    headerShows : false
}

const AppNavigator = createStackNavigator ({
    login : {screen:login},
    register: {screen:register},
},

{
    defaultNavigationOptions : stackNavigatorOptions
}
);
 
export default createAppContainer(AppNavigator);