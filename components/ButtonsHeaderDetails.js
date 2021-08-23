import React, { useState } from "react"
import { View, TouchableOpacity, StyleSheet } from "react-native"
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons"
import { useSelector, useDispatch } from "react-redux"
import { addToCart } from "../store/actions/cart.action"
import { addFav } from "../store/actions/fav.action"

const ButtonsHeaderDetails = ({ route }) => {
    const dispatch = useDispatch();
    const { id } = route.params;
    // chequeo si ya existe en guardados el producto para marcar con color el icono
    const favs = useSelector(state => state.favs.productsFavs);
    const existFav = favs.find(item => item.id === parseInt(id));

    
    // filtro por id el producto, para luego poder pasar los datos como objeto al carrito
    // const products = useSelector(state => state.products.products);
    
    const products = useSelector(state => state.products.products);
    let productData;

    if(products.length > 0){
        const selectItem = products.find(item => item.id === parseInt(id));
        productData = {
            id:selectItem.id,
            image:selectItem.images[0],
            quantity:1,
            title:selectItem.title,
            price: selectItem.price
        }
    }
        

    

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.button}
                onPress={()=> dispatch(addToCart(productData))}
                
            >
                
                <MaterialCommunityIcons name="cart-plus" size={30} color="#d93175" />
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={()=> dispatch(addFav(productData))}
                
            >
                { existFav 
                    ? <MaterialIcons name="bookmark" size={30} color="#d93175" />
                    :<MaterialIcons name="bookmark-border" size={30} color="#d93175" />
                }
                     
            </TouchableOpacity>
        </View>
    )
}

export default ButtonsHeaderDetails

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        marginRight:10
    },
    button:{
        marginRight:10
    }
})
