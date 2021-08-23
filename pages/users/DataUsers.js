import React from "react"
import { View, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import DataUserDescription from "../../components/DataUserDescription";
import DataUserForm from "../../components/DataUserForm";
const DataUsers = () => {
    const dataUser = useSelector(state => state.dataUser);
    const isEmptyObject = Object.keys(dataUser).length=== 0;
    console.log(isEmptyObject);

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
