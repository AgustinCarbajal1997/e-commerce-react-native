import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import { useSelector } from "react-redux";
import ShippingMessage from "./ShippingMessage";

// este es el Item que se va a ejecutar en el renderItem
const Item = ({ id, images, title, price, navigation }) => {
  // message location solo se muestra si se pudo localizar el movil, sino permanece en null y no se muestra
  const messageLocation = useSelector(
    (state) => state.location.messageLocation
  );
  const onHandlerPress = () => {
    navigation.navigate("details", {
      id: id,
    });
  };

  return (
    <TouchableOpacity onPress={onHandlerPress} activeOpacity={0.8}>
      <View style={styles.containerListingProduct}>
        <View style={styles.containerImage}>
          <Image
            style={styles.tinyImage}
            source={{
              uri: images[0],
            }}
          />
        </View>
        <View style={styles.containerProductaData}>
          <Text style={styles.containerProductaDataTitle}>{title}</Text>
          {messageLocation && <ShippingMessage />}

          <Text style={styles.containerProductaDataPrice}>$ {price}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

// el siguiente es el componente para listar los productos
const ListingProducts = ({ article, navigation }) => {
  const products = useSelector((state) => state.products.products);
  const filteredProducts = products.filter((item) => item.article === article);

  const renderItem = ({ item }) => (
    <Item
      id={item.id}
      images={item.images}
      title={item.title}
      price={item.price}
      navigation={navigation}
    />
  );

  return (
    <View>
      <FlatList
        data={filteredProducts}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default ListingProducts;

const styles = StyleSheet.create({
  containerListingProduct: {
    flexDirection: "row",
    width: "100%",
    backgroundColor: "#ffffff",
    borderTopColor: "#f1f1f1",
    borderTopWidth: 2,
  },
  containerImage: {
    width: "40%",
    justifyContent: "center",
    alignItems: "center",
  },
  tinyImage: {
    width: 120,
    height: 120,
  },
  containerProductaData: {
    width: "60%",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  containerProductaDataTitle: {
    fontFamily: "poppins-regular",
    color: "#353535",
  },
  containerProductaDataPrice: {
    fontFamily: "poppins-semi-bold",
    color: "#353535",
  },
});
