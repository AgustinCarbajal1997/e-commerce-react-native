import React from "react"
import { Text, StyleSheet } from "react-native"
import { useSelector } from "react-redux"
const ShippingMessage = () => {
    const messageLoc = useSelector(state => state.location.messageLocation);
    return (
        <Text style={styles.text}>{messageLoc}</Text>
    )
}

export default ShippingMessage
const styles = StyleSheet.create({
    text:{
        fontFamily:"poppins-regular",
        fontSize:11,
        backgroundColor:"#c1eeb0",
        borderRadius:5,
        paddingLeft:5,
        paddingRight:5,
        color:"#114b43",
        marginTop:7,
        marginBottom:7
    }
})
