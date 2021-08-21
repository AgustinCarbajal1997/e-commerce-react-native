import React from "react";
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from "react-native"
import { useSelector, useDispatch } from "react-redux";
const FavScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const favs = useSelector(state => state.favs.productsFavs);


    const renderItem = ({ item }) => (
        <TouchableOpacity 
            style={styles.containerItem}
            activeOpacity={0.8}
            onPress={()=> navigation.navigate("details",{ id:item.id })}
            >
        
                <View style={styles.containerImage}>
                    <Image source={{ uri:item.image }} style={styles.tinyImage}/>
                </View>
                <View style={styles.productdata}>
                    <Text style={styles.title}>{item.title}</Text>
                </View>
        </TouchableOpacity>
    )



    return (
        <View style={styles.container}>
            <FlatList 
                data={favs}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
            />
        </View>
    )
}

export default FavScreen
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
        paddingBottom:10
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
        fontFamily:"poppins-regular"
    },
    price:{
        fontFamily:"poppins-semi-bold"
    }


})