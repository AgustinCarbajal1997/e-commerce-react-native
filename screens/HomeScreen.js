import React from "react";
import { View, Text, StyleSheet } from "react-native"

const HomeScreen = () => {
    return (
        <View>
            <Text style={styles.text}>Home</Text>
        </View>
    )
}

export default HomeScreen
const styles = StyleSheet.create({
    text:{
        fontFamily:'poppins-regular'
    }
})
