import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground, Alert, TextInput} from 'react-native'
import Input from '../components/Input'
import imageBg from '../assets/backgroud-image-sign-up.jpg'
import { useDispatch } from 'react-redux'
import { signup, login } from '../store/actions/auth.action'

const INITIAL_STATE = {
    user:"",
    pass:""
}

const AuthScreen = () => {
    const dispatch = useDispatch()

    const [input, setInput] = useState(INITIAL_STATE)
    const [isEmailValid, setIsEmailValid] = useState({
        touched:false,
        isValid:false
    });
    const [isPassValid, setIsPassValid] = useState({
        touched:false,
        isValid:false
    })

    
    

    const onHandleValidationEmail = () => {
        const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let isValid = true;
        if(!emailRegex.test(input.user.toLowerCase())) isValid = false;
        setIsEmailValid({
            touched:true,
            isValid:isValid
        });
    }
        
    const onHandleValidationPassword = () => {
        const passRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        let isValid = true;
        if(!passRegex.test(input.pass.toLowerCase())) isValid = false;
        setIsPassValid({
            touched:true,
            isValid:isValid
        });
    }


    const onSignUpHandler = () => {
        
        if(!isEmailValid.isValid || !isPassValid.isValid){
            Alert.alert(
                'No ha completado sus datos',
                'Por favor introduzca correo y contraseña',
                [{text:'Ok'}]
              );
              return;
        }
        
        try {
            dispatch(signup(input.user,input.pass))
        } catch (error) {
            console.log(error.message)
        }
    }

    const onLogInHandler = () => {
        
        if(!isEmailValid.isValid || !isPassValid.isValid){
            Alert.alert(
                'No ha completado sus datos',
                'Por favor introduzca correo y contraseña',
                [{text:'Ok'}]
              );
              return;
        }
        
        try {
            dispatch(login(input.user,input.pass))
        } catch (error) {
            console.log(error)
        }
    }

        
        




    

    
    return (
        <View style={styles.container}>
            
            <ImageBackground source={imageBg} resizeMode="cover" style={styles.image}>
                <View style={styles.containerTitle}>
                    <Text style={styles.title}>Bienvenido a Market Tech</Text>
                </View>
                <View style={styles.containerInput}>
                    <Text style={styles.label}>Usuario</Text>
                    <Input 
                        id="user"
                        label="Usuario"
                        setInput={setInput}
                        input={input}
                        
                        onSelectionChange={onHandleValidationEmail}
                        
                    />
                    { isEmailValid.touched && !isEmailValid.isValid && <Text style={styles.inputErrors}>Introduzca email valido</Text> }
                    
                </View>
                <View  style={styles.containerInput}>
                    <Text style={styles.label}>Contraseña</Text>
                    <Input 
                        id="pass"
                        label="Clave"
                        
                        minLength={8}
                        secureTextEntry
                        setInput={setInput}
                        input={input}
                        
                        onSelectionChange={onHandleValidationPassword}
                        
                    />
                    { isPassValid.touched && !isPassValid.isValid && <Text style={styles.inputErrors}>Mínimo 8 caracteres, mayúsculas y minúsculas</Text> }
                    
                </View>
                <View style={styles.buttons}>
                    <TouchableOpacity 
                        style={styles.buttonAuth} 
                        activeOpacity={0.8}
                        onPress={onLogInHandler}
                        
                        >
                        <Text style={styles.buttonText}>Iniciar sesión</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={styles.buttonAuth} 
                        activeOpacity={0.8}
                        onPress={onSignUpHandler}
                        >
                        <Text style={styles.buttonText}>Registrarse</Text>
                    </TouchableOpacity>           

                </View>
            </ImageBackground>
        </View>
    )
}

export default AuthScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        
        backgroundColor:"#651b40"
    },
    image:{
        flex: 1,
        justifyContent: "flex-start",
        
    },
    containerTitle:{
        alignItems:"flex-start",
        margin:20
    },
    title:{
        fontFamily:"poppins-semi-bold",
        color:"#ffffff",
        fontSize:35
    },
    containerInput:{
        margin:15,
        
    },
    label:{
        fontFamily:"poppins-regular",
        color:"#ffffff",
        fontSize:17
    },
    buttons:{
        justifyContent:"space-around",
        alignItems:"center",
        flexDirection:"row"
    },
    buttonAuth:{
        backgroundColor:"#c0424e",
        width:"40%",
        justifyContent:"center",
        alignItems:"center",
        marginTop:20,
        borderRadius:40,
        padding:10
    },
    buttonText:{
        fontFamily:'poppins-regular',
        color:"#ffffff",
    },
    inputErrors:{
        color:"red",
        textAlign:"center"
    }
})
