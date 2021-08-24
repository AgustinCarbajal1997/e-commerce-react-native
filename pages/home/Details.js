import React, { useEffect } from 'react';
import { ScrollView, View, Text, FlatList, StyleSheet, Image} from 'react-native';
import { useSelector } from 'react-redux';
import { List } from 'react-native-paper';
import { insertHistory } from '../../db';

const Details = ({ route }) => {
    const { id } = route.params;
    const products = useSelector(state => state.products.products);
    const selectedProduct = products.find(item => item.id === parseInt(id));

    useEffect(() => {
        (async()=>{
            try {
                const date = new Date()
                const localDate = date.toLocaleDateString();
                const result = await insertHistory(selectedProduct.id.toString(),selectedProduct.title,localDate);
                
            } catch (error) {
                console.log(error)    
            }
        })()
    }, [])
        



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

    const IMAGES_CAROUSEL = selectedProduct.images.map(item => item);
    const SPECIFICATIONS_ACC = selectedProduct.especifications.map(item => item);




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

            <View style={styles.specificationsItemsContainer}>
                <Text style={styles.description}>Especifaciones técnicas</Text>
                <List.Section style={styles.accordion}>
                    {SPECIFICATIONS_ACC.map((item, index)=>(
                        <List.Accordion 
                        title={item.title} 
                        key={index} 
                        style={styles.accordionItem} 
                        titleStyle={{
                            fontFamily:'poppins-semi-bold',
                            fontSize:13
                        }}>
                            
                            
                            <List.Item 
                            title={item.especifications1} 
                            style={styles.accordionDescription} 
                            titleStyle={{
                                fontFamily:'poppins-regular', 
                                fontSize:13}}/>

                            <List.Item 
                            title={item.especifications2} 
                            style={styles.accordionDescription}
                            titleNumberOfLines={3} 
                            titleStyle={{
                                fontFamily:'poppins-regular', 
                                fontSize:13}}/>
                        </List.Accordion>
                    ))}
                </List.Section>
            </View>




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
        fontSize:25,
        marginTop:25,
    },
    specificationsItemsContainer:{
        marginTop:25,
        marginBottom:25,
    },
    accordion:{
        backgroundColor:"#ffffff"
    },
    accordionItem:{
        backgroundColor:"#ffffff",
        borderTopColor:"#f1f1f1",
        borderTopWidth:2,
        fontFamily:'poppins-regular',
        fontWeight:'bold'
    },
    accordionDescription:{
        paddingLeft:20,
        
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