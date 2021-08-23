import React from "react"
import { Text, TouchableOpacity, StyleSheet } from "react-native"
import { useDispatch } from "react-redux";
import { logout } from "../store/actions/auth.action";

const LogOutButton = ({ navigation }) => {
    const dispatch = useDispatch();
    
    const navigateHome = () => navigation.navigate("Inicio");

    const onLogOutHandler = () => {
        navigateHome();
        dispatch(logout())
    }

    

    

    return (
        <TouchableOpacity 
            style={styles.touchable}
            onPress={onLogOutHandler}
        >
            <Text style={styles.text}>Cerrar sesión</Text>
        </TouchableOpacity>
    )
}

export default LogOutButton

const styles = StyleSheet.create({
    touchable:{
        borderColor:"#ffffff",
        borderWidth:2,
        backgroundColor:"#ffffff",
        width:"100%",
        justifyContent:"center",
        alignItems:"center"
    },
    text:{
        fontFamily:"poppins-semi-bold",
        justifyContent:"center",
        alignItems:"center",
        fontSize:20,
        color:"#252151"
    }
})
