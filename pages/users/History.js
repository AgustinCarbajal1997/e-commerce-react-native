import React, { useState, useEffect } from "react"
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native"
import { fetchHistory } from "../../db"

// hago la consulta asincrona a la base de datos y corroboro si hay elementos en el historial

const History = ({ navigation }) => {
    const [historyProducts, setHistoryProducts] = useState([])
    useEffect(() => {
        (async ()=>{
            const result = await fetchHistory();
            setHistoryProducts(result.rows._array.reverse())
            
        })()
    }, [])

    
    
    const renderItem = ({ item }) => (
        <TouchableOpacity
            style={styles.tochable}
            activeOpacity={0.8}
            onPress={()=> navigation.navigate("details",{ id:item.idProduct })}
        >
            <View style={styles.itemContainer}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.date}>{item.date}</Text>
            </View>
        </TouchableOpacity>
    )



    return (
        <View style={styles.container}>
            <FlatList
                data={historyProducts}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
            />
        </View>
    )
}

export default History
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#ffffff"
    },
    itemContainer:{
        flexDirection:"row",
        paddingTop:10,
        paddingBottom:10,
        paddingLeft:10,
        paddingRight:10,
        borderTopColor:"#f5f5f5",
        borderTopWidth:2
    },
    name:{
        width:"70%",
        fontFamily:"poppins-regular",
        color:"#353535"
    },
    date:{
        width:"30%",
        fontFamily:"poppins-regular",
        textAlign:"right",
        color:"#353535"
    }
})
