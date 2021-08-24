import React from "react"
import { View, TouchableOpacity, Text, StyleSheet } from "react-native"
import { useSelector, useDispatch } from "react-redux"
import { buyProductsOfCart } from "../store/actions/cart.action";
const BuyCartButton = ({ total }) => {
    const dispatch = useDispatch();
    const userId = useSelector(state => state.auth.user);
    
    const onBuyProductsHandler = () => {
        dispatch(buyProductsOfCart({ 
            total,
            userId
         }))
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.button}
                activeOpacity={0.8}
                onPress={onBuyProductsHandler}
            >
                <Text style={styles.text}>Finalizar compra</Text>
            </TouchableOpacity>
        </View>
    )
}

export default BuyCartButton

const styles = StyleSheet.create({
    container:{
        width:"100%",
        justifyContent:"center",
        alignItems:"center",
        marginTop:20
    },
    button:{
        backgroundColor:"#681740",
        paddingTop: 5,
        paddingBottom:5,
        paddingLeft:15,
        paddingRight:15,
        borderRadius:3
    },
    text:{
        fontFamily:"poppins-semi-bold",
        fontSize:20,
        color:"#ffd08e"
    }
})