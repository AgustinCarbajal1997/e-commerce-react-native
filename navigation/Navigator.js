import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { AntDesign } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import CartScreen from "../screens/CartScreen";
import FavScreen from "../screens/FavScreen";
import SettingsScreen from "../screens/SettingsScreen";

const HomeStack = createStackNavigator();
const HomeStackScreen = () => {
    return(
        <HomeStack.Navigator>
            <HomeStack.Screen 
            name="Home" 
            component={HomeScreen}
            options={{
                title:"Inicio",
                headerTitleStyle:{
                    fontFamily:'poppins-semi-bold',
                    
                }
            }}/>
        </HomeStack.Navigator>
    )
}


const CartStack = createStackNavigator();
const CartStackScreen = () => {
    return(
        <CartStack.Navigator>
            <CartStack.Screen 
            name="Cart" 
            component={CartScreen}
            options={{
                title:"Mi carrito",
                headerTitleStyle:{
                    fontFamily:'poppins-semi-bold',
                    
                }
            }}/>
            
        </CartStack.Navigator>
    )
}


const FavStack = createStackNavigator();
const FavStackScreen = () => {
    return(
        <FavStack.Navigator>
            <FavStack.Screen 
            name="Fav" 
            component={FavScreen}
            options={{
                title:"Mis favoritos",
                headerTitleStyle:{
                    fontFamily:'poppins-semi-bold',
                    
                }
            }}/>
        </FavStack.Navigator>
    )
}

const SettingsStack = createStackNavigator();
const SettingsStackScreen = () => {
    return(
        <SettingsStack.Navigator>
            <SettingsStack.Screen 
            name="Setings" 
            component={SettingsScreen}
            options={{
                title:"Configuración",
                headerTitleStyle:{
                    fontFamily:'poppins-semi-bold',
                    
                }
            }}/>
            
        </SettingsStack.Navigator>
    )
}


const Tab = createBottomTabNavigator();
const Navigator = () => {
    return(
        <NavigationContainer>
            <Tab.Navigator 
            initialRouteName="Home"
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                  let iconName;
      
                  if (route.name === 'Inicio') {
                    iconName = focused
                      ? 'home'
                      : 'home';
                  } else if (route.name === 'Carrito') {
                    iconName = focused ? 'shoppingcart' : 'shoppingcart';
                  }else if (route.name === 'Favoritos') {
                    iconName = focused ? 'hearto' : 'hearto';
                  }else if (route.name === 'Configuracion') {
                    iconName = focused ? 'setting' : 'setting';
                  }
      
                  
                  return <AntDesign name={iconName} size={size} color={color} />;
                },
              })}
            tabBarOptions={{
                activeTintColor:"tomato",
                inactiveTintColor:"gray"
            }}
            >
                <Tab.Screen name="Inicio" component={HomeStackScreen}/>
                <Tab.Screen name="Carrito" component={CartStackScreen}/>
                <Tab.Screen name="Favoritos" component={FavStackScreen}/>
                <Tab.Screen name="Configuracion" component={SettingsStackScreen}/>
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default Navigator;