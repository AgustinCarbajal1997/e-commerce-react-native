import React from "react";
import { View, Text, StyleSheet } from "react-native"

const SettingsScreen = () => {
    return (
        <View>
            <Text style={styles.text}>Settings</Text>
        </View>
    )
}

export default SettingsScreen
const styles = StyleSheet.create({
    text:{
        fontFamily:'poppins-regular'
    }
})