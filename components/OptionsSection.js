import React from "react"
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { OPTIONS_LIST } from "../constants/optionsList"



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
        width:"100%"
    },
    touchablItem:{
        justifyContent:"center",
        alignItems:"center",
        width:"33%",
        marginTop:15,
        
    },
    tinyImage:{
        width:100,
        height:100,
        backgroundColor:"#ffffff",
        borderRadius:50
    },
    touchableTitle:{
        fontFamily:"poppins-regular",
        fontSize:10
    }
})
