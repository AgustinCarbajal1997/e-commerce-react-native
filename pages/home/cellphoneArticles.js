import React from "react"
import { View, StyleSheet, Text, FlatList } from "react-native"
import ListingProducts from "../../components/ListingProducts"

const CellphoneArticles = ({ navigation }) => {

    return (
        <View>
                 <ListingProducts 
                    article="cellphone"
                    navigation={navigation}    
                />      
        </View>
    )
}

export default CellphoneArticles
