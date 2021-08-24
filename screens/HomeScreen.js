import React from "react";
import { ScrollView } from "react-native"
import OptionsSection from "../components/OptionsSection";

const HomeScreen = ({ navigation }) => {
    
    return (
        <ScrollView>
            
            <OptionsSection navigation={navigation}/>
        </ScrollView>
    )
}

export default HomeScreen

