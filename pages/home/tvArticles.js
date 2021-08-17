import React from "react"
import { View, StyleSheet, Text, FlatList } from "react-native"
import ListingProducts from "../../components/ListingProducts"

const TvArticles = ({ navigation }) => {

    return (
        <View>
                 <ListingProducts 
                 article="tv"
                 navigation={navigation}
                 />      
        </View>
    )
}

export default TvArticles