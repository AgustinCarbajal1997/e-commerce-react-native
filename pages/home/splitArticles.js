import React from "react"
import { View, StyleSheet, Text, FlatList } from "react-native"
import ListingProducts from "../../components/ListingProducts"

const SplitArticles = ({ navigation }) => {

    return (
        <View>
                 <ListingProducts 
                 article="split"
                 navigation={navigation} 
                 />      
        </View>
    )
}

export default SplitArticles