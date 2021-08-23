import React,{ useEffect } from "react";
import { ScrollView, StyleSheet } from "react-native"
import { useDispatch, useSelector } from "react-redux";
import OptionsSection from "../components/OptionsSection";
import { getDataUser } from "../store/actions/dataUser.action";
import { getProducts } from "../store/actions/products.action";

const HomeScreen = ({ navigation }) => {
    // const userId = useSelector(state => state.auth.user)
    // const dispatch = useDispatch();
    const listProducts = useSelector(state => state.products.products)
    // useEffect(() => {
    //     dispatch(getProducts())
    //     dispatch(getDataUser(userId))
    // }, [dispatch])
    
    const ids = listProducts.map(item => item.id);
    console.log(ids);

    return (
        <ScrollView>
            
            <OptionsSection navigation={navigation}/>
        </ScrollView>
    )
}

export default HomeScreen
const styles = StyleSheet.create({
    text:{
        fontFamily:'poppins-regular'
    }
})
