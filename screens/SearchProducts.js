import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import SearchingProducts from '../components/SearchingProducts'

const SearchProducts = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <SearchingProducts navigation={navigation}/>
        </View>
    )
}

export default SearchProducts

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#ffffff"
    }
})
