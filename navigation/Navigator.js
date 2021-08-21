import React from "react";
import { Button, TouchableOpacity, Text, View } from "react-native";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { AntDesign } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import CartScreen from "../screens/CartScreen";
import FavScreen from "../screens/FavScreen";
import SettingsScreen from "../screens/SettingsScreen";
import { STACK_PAGES } from "../pages/home/StackPages";
import Details from "../pages/home/Details";
import SearchProducts from "../screens/SearchProducts";
import AuthScreen from "../screens/AuthScreen";
import ButtonsHeaderDetails from "../components/ButtonsHeaderDetails";

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
            { STACK_PAGES.map(item => (
                <HomeStack.Screen
                    key={item.id}
                    name={item.name}
                    component={item.component}
                    options={{
                        title:item.title,
                        headerTitleStyle:{
                            fontFamily:'poppins-semi-bold',
                            
                        }
                    }}
                />
            )) }
            <HomeStack.Screen 
                name="details" 
                component={Details} 
                options={({ navigation, route }) => ({
                    title:"Detalles",
                    headerTitleStyle:{
                        fontFamily:'poppins-semi-bold',
                        
                    },
                    headerRight: () => (
                        <ButtonsHeaderDetails route={route}/>
                    )
                })}
            />
            
        </HomeStack.Navigator>
    )
}



const SearchStack = createStackNavigator();
const SearchStackScreen = () => {
    return(
        <SearchStack.Navigator>
            <SearchStack.Screen
                name="Search"
                component={SearchProducts}
                options={{
                    title:"Búsqueda",
                    headerTitleStyle:{
                        fontFamily:'poppins-semi-bold',
                        
                    }
                }}
            />
            <SearchStack.Screen 
                name="details" 
                component={Details} 
                options={({ navigation, route }) => ({
                    title:"Detalles",
                    headerTitleStyle:{
                        fontFamily:'poppins-semi-bold',
                        
                    },
                    headerRight: () => (
                        <ButtonsHeaderDetails route={route}/>
                    )
                })}
                />
        </SearchStack.Navigator>
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
            <CartStack.Screen 
                name="details" 
                component={Details} 
                options={({ navigation, route }) => ({
                    title:"Detalles",
                    headerTitleStyle:{
                        fontFamily:'poppins-semi-bold',
                        
                    },
                    headerRight: () => (
                        <ButtonsHeaderDetails route={route}/>
                    )
                })}
            />
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
                title:"Guardados",
                headerTitleStyle:{
                    fontFamily:'poppins-semi-bold',
                    
                }
            }}/>
            <FavStack.Screen 
                name="details" 
                component={Details} 
                options={({ navigation, route }) => ({
                    title:"Detalles",
                    headerTitleStyle:{
                        fontFamily:'poppins-semi-bold',
                        
                    },
                    headerRight: () => (
                        <ButtonsHeaderDetails route={route}/>
                    )
                })}
            />
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

const AuthStack = createStackNavigator();
export const AuthStackScreen = () => {
    return (
        // <NavigationContainer>
            <AuthStack.Navigator>
                <AuthStack.Screen 
                name="Auth" 
                component={AuthScreen}
                options={{
                    title:"Autenticación",
                    headerStyle:{
                        backgroundColor:"#3e299c"
                    },
                    headerTitleStyle:{
                        fontFamily:'poppins-semi-bold',
                        color:"#ffffff"
                        
                    }
                }}
                />
            </AuthStack.Navigator>
        // </NavigationContainer>

    )
}



const Tab = createBottomTabNavigator();
export const Navigator = () => {
    return(
        // <NavigationContainer>
            <Tab.Navigator 
            initialRouteName="Home"
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                  let iconName;
      
                  if (route.name === 'Inicio') {
                    iconName = focused
                      ? 'home'
                      : 'home';
                  } else if(route.name === "Búsqueda") {
                    iconName = focused ? 'search1' : 'search1';
                  } else if (route.name === 'Carrito') {
                    iconName = focused ? 'shoppingcart' : 'shoppingcart';
                  }else if (route.name === 'Guardados') {
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
                <Tab.Screen name="Búsqueda" component={SearchStackScreen}/>
                <Tab.Screen name="Carrito" component={CartStackScreen}/>
                <Tab.Screen name="Guardados" component={FavStackScreen}/>
                <Tab.Screen name="Configuracion" component={SettingsStackScreen}/>
            </Tab.Navigator>
        // </NavigationContainer>
    )
}

