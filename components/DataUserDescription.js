import React from "react"
import { View, Text, StyleSheet } from "react-native"
const DataUserDescription = ({ dataUser }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>Nombre</Text>
            <Text style={styles.text}>{dataUser.name}</Text>
            
            <Text style={styles.label}>Teléfono</Text>
            <Text style={styles.text}>{dataUser.phone}</Text>
            
            <Text style={styles.label}>Edad</Text>
            <Text style={styles.text}>{dataUser.age}</Text>
            
            <Text style={styles.label}>Id usuario</Text>
            <Text style={styles.text}>{dataUser.userId}</Text>
        </View>
    )
}

export default DataUserDescription
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        marginLeft:20
    },
    label:{
        fontFamily:"poppins-semi-bold",
        fontSize:20,
        color:"#353535",
        marginTop:20
    },
    text:{
        fontFamily:"poppins-regular",
        fontSize:15,
        color:"#353535",
        
    }
})
