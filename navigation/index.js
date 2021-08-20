import React from "react";
import { AuthStackScreen, Navigator } from "./Navigator";
import { NavigationContainer } from "@react-navigation/native";
import { useSelector } from "react-redux";

export default () => {
    const loggedIn = useSelector(state => state.auth.token);
    return(
        <NavigationContainer>
            { loggedIn ? 
             (<Navigator/>) 
             : (<AuthStackScreen/>) 
             }
        </NavigationContainer>

    )
}
