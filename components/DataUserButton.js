import React from "react"
import { Text, TouchableOpacity, StyleSheet } from "react-native"


const DataUserButton = ({ navigation }) => {
    

    return (
        <TouchableOpacity 
            style={styles.touchable}
            onPress={()=> navigation.navigate("dataUsers")}
        >
            <Text style={styles.text}>Datos del usuario</Text>
        </TouchableOpacity>
    )
}

export default DataUserButton

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
