import React from "react"
import { View, StyleSheet, Text, FlatList } from "react-native"
import ListingProducts from "../../components/ListingProducts"

const SmartwatchArticles = ({ navigation }) => {

    return (
        <View>
                 <ListingProducts 
                 article="smartwatch"
                 navigation={navigation} 
                 />      
        </View>
    )
}

export default SmartwatchArticles