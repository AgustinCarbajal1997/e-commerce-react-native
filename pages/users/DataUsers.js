import React from "react"
import { View, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import DataUserDescription from "../../components/DataUserDescription";
import DataUserForm from "../../components/DataUserForm";

// Pagina de datos del usuario: si el usuario ya cargo sus datos, se muestra la pantalla con los mismos, sino se debe llenar el formulario con los datos, que se envia a firebase y luego se muestran en pantalla

const DataUsers = () => {
    const dataUser = useSelector(state => state.dataUser);
    const isEmptyObject = Object.keys(dataUser).length=== 0;
    

    return (
        <View style={styles.container}>
            { isEmptyObject
                ?   <DataUserForm/>
                : <DataUserDescription dataUser={dataUser} />
            }
        </View>
    )
}
                  
            

export default DataUsers
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#ffffff"
    }
})
