import React from "react";
import { View, Text, StyleSheet } from "react-native"

const CartScreen = () => {
    return (
        <View>
            <Text style={styles.text}>Cart</Text>
        </View>
    )
}

export default CartScreen

const styles = StyleSheet.create({
    text:{
        fontFamily:'poppins-regular'
    }
})