import React,{ useState } from "react";
import { View, TextInput, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { postDataUser } from "../store/actions/dataUser.action";



const DataUserForm = () => {
    const userId = useSelector(state => state.auth.user);
    const dispatch = useDispatch();
    const [form, setForm] = useState({
        name:"",
        phone:"",
        age:"",
        userId:userId
    })

    const onChangeTextHandle = (text, item) => {
        setForm({
            ...form,
            [item]:text
        })
    }

    





    return (
        <View style={styles.container}>
            <Text style={styles.title}>Complete sus datos</Text>
            
            <Text style={styles.text}>Nombre</Text>
            <TextInput 
                style={styles.textInput} 
                onChangeText={(text) => onChangeTextHandle(text,"name")}
            />

            <Text style={styles.text}>Teléfono</Text>
            <TextInput 
                style={styles.textInput}
                onChangeText={(text) => onChangeTextHandle(text,"phone")}    
            />
            
            <Text style={styles.text}>Edad</Text>
            <TextInput 
                style={styles.textInput}
                onChangeText={(text) => onChangeTextHandle(text,"age")}
            />
            <View style={styles.viewSubmit}>
                <TouchableOpacity 
                    style={styles.touchable}
                    onPress={()=> dispatch(postDataUser(form))}
                    >
                    <Text style={styles.textButton}>Enviar datos</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default DataUserForm
const styles = StyleSheet.create({
    container:{
        flex:1,
        margin:20,
        justifyContent:"center",
        // alignItems:"center"
    },
    title:{
        fontFamily:"poppins-semi-bold",
        fontSize:25,
        color:"#252151"
    },
    text:{
        fontFamily:"poppins-semi-bold",
        color:"#252151"
    },
    textInput:{
        height:40,
        
        margin:12,
        textAlign:"center",
        fontFamily:"poppins-regular",
        backgroundColor:"#f5f5f5",
        borderRadius:10
    },
    viewSubmit:{
        justifyContent:"center",
        alignItems:"center",
        marginTop:40
    },
    touchable:{
        backgroundColor:"#252151",
        paddingTop:5,
        paddingBottom:5,
        paddingLeft:15,
        paddingRight:15,
        borderRadius:10
    },
    textButton:{
        color:"#ffffff",
        fontFamily:"poppins-semi-bold",
        fontSize:20
    }
})
