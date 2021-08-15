import React,{ useEffect } from "react";
import { View, Text, StyleSheet } from "react-native"
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../store/actions/products.action";

const HomeScreen = () => {
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
        </View>
    )
}

export default HomeScreen
const styles = StyleSheet.create({
    text:{
        fontFamily:'poppins-regular'
    }
})
