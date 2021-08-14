import React from "react";
import { View, Text, StyleSheet } from "react-native"

const FavScreen = () => {
    return (
        <View>
            <Text style={styles.text}>Favourites</Text>
        </View>
    )
}

export default FavScreen
const styles = StyleSheet.create({
    text:{
        fontFamily:'poppins-regular'
    }
})