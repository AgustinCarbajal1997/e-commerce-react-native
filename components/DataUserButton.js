import React from "react"
import { Text, TouchableOpacity, StyleSheet } from "react-native"


const DataUserButton = ({ navigation, navigate, text }) => {
    

    return (
        <TouchableOpacity 
            style={styles.touchable}
            onPress={()=> navigation.navigate(`${navigate}`)}
        >
            <Text style={styles.text}>{`${text}`}</Text>
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
        color:"#353535"
    }
})
