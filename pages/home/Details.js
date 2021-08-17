import React from 'react';
import { View, Text} from 'react-native';
import { useSelector } from 'react-redux';

const Details = ({ route }) => {
    const { id } = route.params;
    const products = useSelector(state => state.products.products);
    const selectedProduct = products.find(item => item.id === parseInt(id));


    return (
        <View>
            <Text>{selectedProduct.title}</Text>
        </View>
    )
}

export default Details
