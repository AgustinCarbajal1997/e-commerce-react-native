import React from "react"
import { View, TouchableOpacity, StyleSheet } from "react-native"
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons"
import { useSelector, useDispatch } from "react-redux"
import { addToCart } from "../store/actions/cart.action"
import { addFav } from "../store/actions/fav.action"

const ButtonsHeaderDetails = ({ route }) => {
    const dispatch = useDispatch();
    const { id } = route.params;
    const favs = useSelector(state => state.favs.productsFavs);
    const products = useSelector(state => state.products.products);
    const selectItem = products.find(item => item.id === parseInt(id));
    const existFav = favs.find(item => item.id === selectItem.id);
    const productData = {
        id:selectItem.id,
        image:selectItem.images[0],
        quantity:1,
        title:selectItem.title,
        price: selectItem.price
    }


    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.button}
                onPress={()=> dispatch(addToCart(productData))}
                activeOpacity={0.8}
            >
                
                <MaterialCommunityIcons name="cart-plus" size={30} color="#460099" />
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={()=> dispatch(addFav(productData))}
                
            >
                { existFav 
                    ? <MaterialIcons name="bookmark" size={30} color="#460099" />
                    :<MaterialIcons name="bookmark-border" size={30} color="#460099" />
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
