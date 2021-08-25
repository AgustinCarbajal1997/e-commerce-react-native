import React from "react"
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { OPTIONS_LIST } from "../constants/optionsList"

// Sección de opciones del homeScreen, cada opcion esta rodeada de un boton que redirige a las pestaña de todos los productos de la respectiva categoria

const OptionsSection = ({ navigation }) => {
    return (
        <View style={styles.container}>
            { OPTIONS_LIST.map((item)=>(
                <TouchableOpacity 
                    key={item.id} 
                    style={styles.touchablItem} 
                    activeOpacity={0.8}
                    onPress={()=> navigation.navigate(item.navigate)}
                    >
                        <Image source={item.image} style={styles.tinyImage}/>
                        <Text style={styles.touchableTitle}>{item.title}</Text>
                </TouchableOpacity>
            )) }
        </View>
    )
}

export default OptionsSection

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        flexWrap:"wrap",
        width:"100%",
        alignItems:"center",
        justifyContent:"center",
        
    },
    touchablItem:{
        justifyContent:"center",
        alignItems:"center",
        width:"50%",
        marginTop:15,
        
    },
    tinyImage:{
        width:120,
        height:120,
        backgroundColor:"#ffffff",
        borderRadius:50
    },
    touchableTitle:{
        fontFamily:"poppins-regular",
        fontSize:10
    }
})
