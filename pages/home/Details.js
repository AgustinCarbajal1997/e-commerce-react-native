import React, { useEffect } from 'react';
import { ScrollView, View, Text, FlatList, StyleSheet, Image, Dimensions} from 'react-native';
import { useSelector } from 'react-redux';
import { List } from 'react-native-paper';
import { insertHistory } from '../../db';

//cada producto de la lista es un boton que redirige a la pestaña details, esta pestaña recibe un route params con el id del producto, a partir de ese id, se filtra el producto desde la lista que viene del state global de redux con los productos. Por otro lado, cada vez que se inicializa el componente details (es decir se ingresa a la pagina), se activa un useeffect de dependencia de array vacio que llama a inserhistory y crea un historial de registros en la base de datos sqlite. 

const Details = ({ route }) => {
    const { id } = route.params;
    const products = useSelector(state => state.products.products);
    const selectedProduct = products.find(item => item.id === parseInt(id));

    // useeffect inserta en el historial
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
        
    console.log(Dimensions.get('window').width)


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
        // obtengo dimension de pantalla para que ocupe todo el ancho y resto padding
        width:(Dimensions.get('window').width)-30,
        height:(Dimensions.get('window').width)-30
    },
    mainTitle:{
        fontFamily:'poppins-semi-bold',
        fontSize:17,
        color:"#353535",
        marginTop:20
    },
    price:{
        fontFamily:'poppins-regular',
        fontSize:25,
        marginTop:25,
        color:"#353535"
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