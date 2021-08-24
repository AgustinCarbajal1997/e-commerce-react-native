import React from "react";
import { View, Text, StyleSheet } from "react-native"
import DataUserButton from "../components/DataUserButton";
import LogOutButton from "../components/LogOutButton";
const SettingsScreen = ({ navigation }) => {
    
    return (
        <View style={styles.container}>
            <DataUserButton 
                navigation={navigation}
                navigate="history"
                text="Historial"
            />
            <DataUserButton 
                navigation={navigation} 
                navigate="dataUsers" 
                text="Datos del usuario"
            />
            <LogOutButton navigation={navigation}/>

        </View>
    )
}

export default SettingsScreen
const styles = StyleSheet.create({
    container:{
        backgroundColor:"white",
        flex:1
    },
    text:{
        fontFamily:'poppins-regular'
    }
})