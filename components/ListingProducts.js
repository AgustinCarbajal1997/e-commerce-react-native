import React from "react"
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from "react-native"
import { useSelector } from "react-redux"

const Item = ({ id, images, title, price, navigation }) => {
    const onHandlerPress = () => {
        navigation.navigate("details",{
            id:id
        })
    }
    
    return(
    <TouchableOpacity onPress={onHandlerPress} activeOpacity={0.8}>
        <View style={styles.containerListingProduct}>
            <View style={styles.containerImage}>
                <Image 
                    style={styles.tinyImage}
                    source={{
                        uri: images[0]
                    }}
                />
            </View>
            <View style={styles.containerProductaData}>
                <Text style={styles.containerProductaDataTitle}>{title}</Text>
                <Text style={styles.containerProductaDataPrice}>$ {price}</Text>
            </View>
        </View>
    </TouchableOpacity>
    )
}



                


const ListingProducts = ({ article, navigation }) => {
    const products = useSelector(state => state.products.products);
    const filteredProducts = products.filter(item =>  item.article === article);
    

    const renderItem = ({ item }) => (
        <Item 
            id={item.id}
            images={item.images} 
            title={item.title} 
            price={item.price} 
            navigation={navigation}

        />
    )

    return (
        <View>
            <FlatList
                data={filteredProducts}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
            />
        </View>
    )
}

export default ListingProducts

const styles = StyleSheet.create({
    containerListingProduct:{
        flexDirection:"row",
        width:"100%",
        backgroundColor:"#ffffff",
        borderTopColor:"#f1f1f1",
        borderTopWidth:2
    },
    containerImage:{
        width:"40%",
        justifyContent:"center",
        alignItems:"center"
    },
    tinyImage:{
        width:120,
        height:120
    },
    containerProductaData:{
        width:"60%",
        justifyContent:"center",
        alignItems:"flex-start"
    },
    containerProductaDataTitle:{
        fontFamily:'poppins-regular'
    },
    containerProductaDataPrice:{
        fontFamily:'poppins-semi-bold',
        
    }
})
