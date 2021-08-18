import React from 'react';
import { ScrollView, View, Text, FlatList, StyleSheet, Image} from 'react-native';
import { useSelector } from 'react-redux';

const Details = ({ route }) => {
    const { id } = route.params;
    const products = useSelector(state => state.products.products);
    const selectedProduct = products.find(item => item.id === parseInt(id));

    const renderItem = ({ item }) => (
        <View>
            <Image 
                    style={styles.images}
                    source={{
                        uri: item
                    }}
            />
        </View>
    )

    const IMAGES_CAROUSEL = selectedProduct.images.map(item => item)
    // console.log(imagesCarousel)



    return (
        <ScrollView style={styles.container}>
            <FlatList 
                horizontal={true}
                data={IMAGES_CAROUSEL}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
            />
            <Text style={styles.mainTitle}>{selectedProduct.title}</Text>
            <Text style={styles.price}>$ {selectedProduct.price}</Text>
            <View style={styles.descriptionItemsContainer}>
                <Text style={styles.description}>Descripción</Text>
            {selectedProduct.description.map((item, index) =>(
                <View key={index} >
                    <Text style={styles.descriptionTitle}>{item.title}</Text>
                    <Text style={styles.descriptionParagraph}>{item.paragraph}</Text>
                </View>
            ))}
            </View>
        </ScrollView>
    )
}

export default Details


const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingLeft:15,
        paddingRight:15,
        backgroundColor:"#ffffff",
        
    },
    images:{
        width:300,
        height:300
    },
    mainTitle:{
        fontFamily:'poppins-semi-bold',
        fontSize:17
    },
    price:{
        fontFamily:'poppins-regular',
        fontSize:25
    },
    description:{
        fontFamily:'poppins-semi-bold',
        fontSize:15
    },
    descriptionItemsContainer:{
        // paddingLeft:15
    },
    descriptionTitle:{
        fontFamily:'poppins-semi-bold',
        fontSize:13,
        marginTop:15,
        marginBottom:12
    },
    descriptionParagraph:{
        fontFamily:'poppins-regular',
        fontSize:13,
        lineHeight:24
    }

})