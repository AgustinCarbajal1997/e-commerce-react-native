import React, { useState, useEffect } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";
import { useSelector } from "react-redux";

// componente de busqueda de productos. El usuario ingresa el producto a buscar, se hace un pequeña validacion y luego se filtra usando el metodo includes de los strings tomando como base la lista de productos almacenadas en el estado del reducer de products.

const SearchingProducts = ({ navigation }) => {
  const [text, setText] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const products = useSelector((state) => state.products.products);

  // si vienen datos en el input, se realiza el filtrado de datos
  useEffect(() => {
    if (!text) return setFilteredProducts([]); //solucionar barra espaciadora
    const filteringProducts = products.filter((item) =>
      item.title.toLowerCase().includes(text.toLocaleLowerCase())
    );
    setFilteredProducts(filteringProducts);
  }, [text]);


  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.containerProductItem}
      activeOpacity={0.8}
      onPress={() => navigation.navigate("details", { id: item.id })}
    >
      <View style={styles.containerImage}>
        <Image style={styles.tinyImage} source={{ uri: item.images[0] }} />
      </View>

      <Text style={styles.textItem}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={
          <TextInput
            style={styles.textInput}
            onChangeText={(text) => setText(text.trimStart())}
            placeholder="¿Qué estás buscando?"
            value={text}
          />
        }
        data={filteredProducts}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default SearchingProducts;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
  },
  textInput: {
    height: 40,
    margin: 12,
    textAlign: "center",
    fontFamily: "poppins-regular",
    backgroundColor: "#f5f5f5",
    borderRadius: 10,
  },
  containerProductItem: {
    flexDirection: "row",
    alignItems: "center",
    borderTopColor: "#f1f1f1",
    borderTopWidth: 2,
    // paddingLeft:5,
    // paddingRight:5
    padding: 6,
  },
  containerImage: {
    width: "20%",
  },
  tinyImage: {
    width: 50,
    height: 50,
  },
  textItem: {
    width: "80%",
    fontFamily: "poppins-regular",
    textAlign: "left",
    flexWrap: "wrap",
  },
});
