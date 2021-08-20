import React, { useState } from 'react'
import { View, TextInput, StyleSheet } from 'react-native'

const Input = (props) => {
    const { id, input, setInput } = props;

    const onHandleChangeText = (text,id) => {
        setInput({
            ...input,
            [id]:text
        })
    }

    
    
    return (
        <View>
            <TextInput
                { ...props }
                style={styles.input}
                onChangeText={text => onHandleChangeText(text, id)}
                
            />
            
        </View>
    )
}

export default Input

const styles = StyleSheet.create({
    input:{
        height:40,
        borderBottomWidth:2,
        borderBottomColor:"#ffffff",
        textAlign:"center",
        fontFamily:"poppins-regular",
        color:"#ffffff"
    }
})
