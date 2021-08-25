import React from "react";
import { StyleSheet, View } from "react-native"
import OptionsSection from "../components/OptionsSection";

// screen del home con las categorias de productos
const HomeScreen = ({ navigation }) => {
    
    return (
        <View style={styles.container}>
            <View>
                <OptionsSection navigation={navigation}/>
            </View>

        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center"
    },
    
})

