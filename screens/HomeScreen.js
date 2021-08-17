import React,{ useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../store/actions/products.action";

const HomeScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const listProducts = useSelector(state => state.products.products)
    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])
    
    const ids = listProducts.map(item => item.id);
    console.log(ids);

    return (
        <View>
            <Text style={styles.text}>Home</Text>
            <TouchableOpacity onPress={()=> navigation.navigate("cellphone")}><Text>Celulares</Text></TouchableOpacity>
            <TouchableOpacity onPress={()=> navigation.navigate("fridge")}><Text>Celulares</Text></TouchableOpacity>
            <TouchableOpacity onPress={()=> navigation.navigate("notebook")}><Text>Celulares</Text></TouchableOpacity>
            <TouchableOpacity onPress={()=> navigation.navigate("smartwatch")}><Text>Celulares</Text></TouchableOpacity>
            <TouchableOpacity onPress={()=> navigation.navigate("split")}><Text>Celulares</Text></TouchableOpacity>
            <TouchableOpacity onPress={()=> navigation.navigate("tv")}><Text>Celulares</Text></TouchableOpacity>
        </View>
    )
}

export default HomeScreen
const styles = StyleSheet.create({
    text:{
        fontFamily:'poppins-regular'
    }
})
