import React from "react"
import { View, StyleSheet, Text, FlatList } from "react-native"
import ListingProducts from "../../components/ListingProducts"

const NotebookArticles = ({ navigation }) => {

    return (
        <View>
                 <ListingProducts 
                 article="notebook"
                 navigation={navigation} 
                 />      
        </View>
    )
}

export default NotebookArticles