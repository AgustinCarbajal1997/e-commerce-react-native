import React from "react";
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from "react-native"
import { useSelector, useDispatch } from "react-redux";
import { AntDesign } from "@expo/vector-icons";
import { addQuantity, deleteQuantity } from "../store/actions/cart.action";
import BuyCartButton from "../components/BuyCartButton";
const CartScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart.productsCart);
    
    
    const total = cart.map(item => item.quantity * item.price).reduce((a,b) => a + b, 0);

    const renderItem = ({ item }) => (
        <TouchableOpacity 
            style={styles.containerItem}
            activeOpacity={0.8}
            onPress={()=> navigation.navigate("details", { id:item.id })}
            >
                <View style={styles.containerImage}>
                    <Image source={{ uri:item.image }} style={styles.tinyImage}/>
                </View>
                <View style={styles.productdata}>
                    <Text style={styles.title}>{item.title}</Text>
                    <View style={styles.containerQuantityPrice}>
                        <View style={styles.quantityButtons}>
                            <TouchableOpacity
                                onPress={() => dispatch(addQuantity(item.id))}
                                activeOpacity={0.8}
                            >
                                <AntDesign name="pluscircleo" size={24} color="#353535" />
                            </TouchableOpacity>
                            <Text style={styles.quantityText}>{item.quantity}</Text>
                            <TouchableOpacity
                                onPress={()=> dispatch(deleteQuantity(item.id))}
                                activeOpacity={0.8}
                            >
                                <AntDesign name="minuscircleo" size={24} color="#353535" />
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.price}>$ {item.price}</Text>
                    </View>
                </View>
        </TouchableOpacity>
    )


    return (
        <View style={styles.container}>
            
            <FlatList
                data={cart}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
                ListFooterComponent={
                    
                        cart.length > 0 
                        ? (<View style={styles.totalContainer}>
                            <Text style={styles.total}>Total compra: $ {total}</Text>
                            <BuyCartButton total={total.toString()}/>
                            </View>)
                        
                        : (<View style={styles.totalContainer}>
                            <Text style={styles.total}> No hay productos</Text>
                            </View>)
                    
                }
            />
        </View>

    )
}

export default CartScreen

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#ffffff",
        flex:1
    },
    containerItem:{
        width:"100%",
        flexDirection:"row",
        borderBottomColor:"#f1f1f1",
        borderBottomWidth:2,
        alignItems:"center",
        justifyContent:"center",
        paddingTop:10,
        paddingBottom:10
        
    },
    containerImage:{
        width:"30%",
        alignItems:"center",
        justifyContent:"center"
    },
    tinyImage:{
        width:100,
        height:100
    },
    productdata:{
        width:"70%",
        
    },
    title:{
        fontFamily:"poppins-regular",
        paddingBottom:10,
        color:"#353535"
    },
    containerQuantityPrice:{
        flexDirection:"row",
        justifyContent:"space-around",
        
    },
    quantityButtons:{
        flexDirection:"row"
    },
    quantityText:{
        paddingLeft:10,
        paddingRight:10,
        fontFamily:"poppins-regular",
        color:"#353535"
    },
    price:{
        fontFamily:"poppins-semi-bold",
        color:"#353535"
    },
    totalContainer:{
        margin:20
    },
    total:{
        color:"#353535",
        fontFamily:"poppins-regular",
        fontSize:20,
        textAlign:"center"
    }


})