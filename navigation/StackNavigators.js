import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import CartScreen from "../screens/CartScreen";
import FavScreen from "../screens/FavScreen";
import SettingsScreen from "../screens/SettingsScreen";
import { STACK_PAGES } from "../pages/home/StackPages";
import Details from "../pages/home/Details";
import SearchProducts from "../screens/SearchProducts";
import AuthScreen from "../screens/AuthScreen";
import ButtonsHeaderDetails from "../components/ButtonsHeaderDetails";
import DataUsers from "../pages/users/DataUsers";
import History from "../pages/users/History";
import MyShopping from "../pages/users/MyShopping";

// SE CREAN Y EXPORTAN TODOS LOS STACK NAVIGATORS QUE SE VAN A USAR EN LA APP

const HomeStack = createStackNavigator();
export const HomeStackScreen = () => {
    return(
        <HomeStack.Navigator
        initialRouteName="Home"
            screenOptions={{
                headerTitleStyle:{
                    fontFamily:'poppins-semi-bold',
                    
                },
                headerTintColor:"#f6bb93",
                headerStyle:{
                    // borderBottomColor:"#d93175",
                    // borderBottomWidth:2,
                    backgroundColor:"#651B40"
                    
                }
                
            }}
        >
            <HomeStack.Screen 
            name="Home" 
            component={HomeScreen}
            options={{
                title:"Tech Market",
            }}/>
            { STACK_PAGES.map(item => (
                <HomeStack.Screen
                    key={item.id}
                    name={item.name}
                    component={item.component}
                    options={{
                        title:item.title,
                    }}
                />
            )) }
            <HomeStack.Screen 
                name="details" 
                component={Details} 
                options={({ navigation, route }) => ({
                    title:"Detalles",
                    headerRight: () => (
                        <ButtonsHeaderDetails route={route}/>
                    )
                })}
            />
            
        </HomeStack.Navigator>
    )
}



const SearchStack = createStackNavigator();
export const SearchStackScreen = () => {
    return(
        <SearchStack.Navigator
            screenOptions={{
                headerTitleStyle:{
                    fontFamily:'poppins-semi-bold',
                },
                headerTintColor:"#f6bb93",
                headerStyle:{
                    backgroundColor:"#651B40"
                    
                }
            }}
        >
                    
            <SearchStack.Screen
                name="Search"
                component={SearchProducts}
                options={{ title:"Búsqueda" }}
            />
            <SearchStack.Screen 
                name="details" 
                component={Details} 
                options={({ navigation, route }) => ({
                    title:"Detalles",
                    headerRight: () => (
                        <ButtonsHeaderDetails route={route}/>
                    )
                })}
                />
        </SearchStack.Navigator>
    )
}




const CartStack = createStackNavigator();
export const CartStackScreen = () => {
    return(
        <CartStack.Navigator
            screenOptions={{
                headerTitleStyle:{
                    fontFamily:'poppins-semi-bold',
                },
                headerTintColor:"#f6bb93",
                headerStyle:{
                    backgroundColor:"#651B40"
                    
                }
                    
            }}
        >
            <CartStack.Screen 
            name="Cart" 
            component={CartScreen}
            options={{
                title:"Mi carrito"
            }}/>
            <CartStack.Screen 
                name="details" 
                component={Details} 
                options={({ navigation, route }) => ({
                    title:"Detalles",
                    headerRight: () => (
                        <ButtonsHeaderDetails route={route}/>
                    )
                })}
            />
                
        </CartStack.Navigator>
    )
}


const FavStack = createStackNavigator();
export const FavStackScreen = () => {
    return(
        <FavStack.Navigator
            screenOptions={{
                headerTitleStyle:{
                    fontFamily:'poppins-semi-bold',
                },
                headerTintColor:"#f6bb93",
                headerStyle:{
                    backgroundColor:"#651B40"
                    
                }
            }}
        >
                    
            <FavStack.Screen 
            name="Fav" 
            component={FavScreen}
            options={{
                title:"Guardados",
                
            }}/>
            <FavStack.Screen 
                name="details" 
                component={Details} 
                options={({ navigation, route }) => ({
                    title:"Detalles",
                    headerRight: () => (
                        <ButtonsHeaderDetails route={route}/>
                    )
                })}
            />
        </FavStack.Navigator>
    )
}
                    

const SettingsStack = createStackNavigator();
export const SettingsStackScreen = () => {
    return(
        <SettingsStack.Navigator
            screenOptions={{
                headerTitleStyle:{
                    fontFamily:'poppins-semi-bold',
                },
                headerTintColor:"#f6bb93",
                headerStyle:{
                    backgroundColor:"#651B40"
                    
                }
            }}
        >
                    
            <SettingsStack.Screen 
            name="Setings" 
            component={SettingsScreen}
            options={{
                title:"Usuario",
            }}/>
            <SettingsStack.Screen 
            name="dataUsers" 
            component={DataUsers}
            options={{
                title:"Datos de usuario",
            }}/>
            <SettingsStack.Screen
                name="history" 
                component={History}
                options={{
                    title:"Historial",
            }}/>
            <SettingsStack.Screen
                name="myShopping" 
                component={MyShopping}
                options={{
                    title:"Mis compras",
            }}/>
            <SettingsStack.Screen 
                name="details" 
                component={Details} 
                options={({ navigation, route }) => ({
                    title:"Detalles",
                    headerRight: () => (
                        <ButtonsHeaderDetails route={route}/>
                    )
                })}
            />
        </SettingsStack.Navigator>
    )
}

// Auth navigator: se exporta al index.

const AuthStack = createStackNavigator();
export const AuthStackScreen = () => {
    return (
        
            <AuthStack.Navigator>
                <AuthStack.Screen 
                name="Auth" 
                component={AuthScreen}
                options={{
                    title:"",
                    headerStyle:{
                        backgroundColor:"#4a0905"
                    },
                    headerTitleStyle:{
                        fontFamily:'poppins-semi-bold',
                        color:"#ffffff"
                        
                    }
                }}
                />
            </AuthStack.Navigator>
        

    )
}