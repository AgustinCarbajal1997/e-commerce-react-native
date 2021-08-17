import React from "react"
import { View, StyleSheet, Text, FlatList } from "react-native"
import ListingProducts from "../../components/ListingProducts"

const FridgeArticles = ({ navigation }) => {

    return (
        <View>
                 <ListingProducts 
                 article="fridge"
                 navigation={navigation}                 />      
        </View>
    )
}

export default FridgeArticles