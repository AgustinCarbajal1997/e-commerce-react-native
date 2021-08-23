import React from "react";
import { View, Text, StyleSheet } from "react-native"
import DataUserButton from "../components/DataUserButton";
import LogOutButton from "../components/LogOutButton";
import { useSelector } from "react-redux";
const SettingsScreen = ({ navigation }) => {
    
    return (
        <View style={styles.container}>
            
            <DataUserButton navigation={navigation}/>
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