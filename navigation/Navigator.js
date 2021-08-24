import React, { useEffect } from "react";
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
import DataUsers from "../pages/users/DataUsers";
import { useDispatch, useSelector } from "react-redux";
import { getDataUser } from "../store/actions/dataUser.action";
import { getProducts } from "../store/actions/products.action";
import History from "../pages/users/History";


const HomeStack = createStackNavigator();
const HomeStackScreen = () => {
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
const SearchStackScreen = () => {
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
const CartStackScreen = () => {
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
const FavStackScreen = () => {
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
const SettingsStackScreen = () => {
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

const AuthStack = createStackNavigator();
export const AuthStackScreen = () => {
    return (
        
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
        

    )
}



const Tab = createBottomTabNavigator();
export const Navigator = () => {
    const userId = useSelector(state => state.auth.user) 
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProducts())
        dispatch(getDataUser(userId))
    }, [dispatch])


    return(
        
            <Tab.Navigator 
            initialRouteName="Inicio"
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
                  }else if (route.name === 'Usuario') {
                    iconName = focused ? 'user' : 'user';
                  }
      
                  
                  return <AntDesign name={iconName} size={size} color={focused ?"#b83253":"#fc666f"} />;
                },
              })}
            tabBarOptions={{
                activeTintColor:"#b83253",
                inactiveTintColor:"#fc666f"
            }}
            >
                <Tab.Screen name="Inicio" component={HomeStackScreen}/>
                <Tab.Screen name="Búsqueda" component={SearchStackScreen}/>
                <Tab.Screen name="Carrito" component={CartStackScreen}/>
                <Tab.Screen name="Guardados" component={FavStackScreen}/>
                <Tab.Screen name="Usuario" component={SettingsStackScreen}/>
            </Tab.Navigator>
        
    )
}

