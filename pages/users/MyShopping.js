import React, {useEffect, useState} from "react"
import { View, Text, FlatList, StyleSheet } from "react-native"
import { useSelector } from "react-redux"
import { URL_BUY_PRODUCTS } from "../../constants/db"

const MyShopping = () => {
    const userId = useSelector(state => state.auth.user);
    const [myShopping, setMyShopping] = useState([])
    useEffect(() => {
        (async()=>{
            try {
                const response = await fetch(URL_BUY_PRODUCTS);
                const data = await response.json();
                const items = [];
                Object.keys(data).forEach(key => items.push({ ...data[key] }));
                
                const filterItems = items.filter(item => item.userId === userId);

                setMyShopping(filterItems);
            } catch (error) {
                console.log(error)
            }
        })()
    }, [])

    const renderItem = ({ item }) => (
        <View style={styles.containerMyShop}>
            <Text style={styles.total}>Monto compra: $ {item.total}</Text>
            <Text style={styles.date}>{item.date.replace(/\:/g,'/')}</Text>
        </View>
    )



    return (
        <View style={styles.container}>
            { myShopping.length === 0
            
                ? (<View style={styles.withoutProductsContainer}>
                    <Text style={styles.withoutProducts}>No hay compras realizadas</Text>
                  </View>)
                : (<FlatList
                    data={myShopping.reverse()}
                    renderItem={renderItem}
                    keyExtractor={(item, index)=> index.toString()}
                    />)
            }

        </View>
            
    )
}

export default MyShopping

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#ffffff",
        
    },
    containerMyShop:{
        flexDirection:"row",
        borderTopColor:"#f5f5f5",
        borderTopWidth:2,
        marginLeft:20,
        marginRight:20
    },
    total:{
        width:"70%",
        color:"#353535",
        fontFamily:"poppins-regular",
        fontSize:15
    },
    date:{
        width:"30%",
        color:"#353535",
        textAlign:"right"
    },
    withoutProductsContainer:{
        margin:20
    },
    withoutProducts:{
        fontFamily:"poppins-regular",
        fontSize:20,
        color:"#353535",
        textAlign:"center"
    }
})