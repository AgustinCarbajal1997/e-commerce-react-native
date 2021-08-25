import React, { useEffect, useState } from "react";
import { AntDesign, FontAwesome5 } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useDispatch, useSelector } from "react-redux";
import { getDataUser } from "../store/actions/dataUser.action";
import { getProducts } from "../store/actions/products.action";
import * as Location from 'expo-location'
import { getLogation } from "../store/actions/location.action";
import { Alert } from "react-native";

import { CartStackScreen, FavStackScreen, HomeStackScreen, SearchStackScreen, SettingsStackScreen } from "./StackNavigators";


// BOTTOM TAB NAVIGATOR:se exporta al index.
// con la inicializacion del tab, se traen los productos de firebase y se obtiene la data del usuario. Ademas se obtiene la ubicacion del usuario.
const Tab = createBottomTabNavigator();
export const Navigator = () => {
    const userId = useSelector(state => state.auth.user);
    const cartLength = useSelector(state => state.cart.productsCart);
    const dispatch = useDispatch();
    const [location, setLocation] = useState(null);
    const [pickedLocation, setPickedLocation] = useState(null)

    // useEffect para manejar los permisos al comienzo de la aplicación
  useEffect(() => {
    (async ()=> {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if(status !== 'granted'){
        Alert.alert(
          'Servicio de envíos.',
          'Necesita otorgar permisos para localizar el lugar de envio.',
          [{ text:'Ok' }]
        );
        return;
      }
      setLocation(true)
    })();
  }, [])

    // si se brindaron los permisos se ejecuta el useeffect para obtener coords  
  useEffect(() => {
    if(!location) return;
    (async()=>{
        try {
            const location = await Location.getLastKnownPositionAsync({})
              
              setPickedLocation({
                lat:location.coords.latitude,
                lng:location.coords.longitude
              }); 
        } catch (error) {
            Alert.alert(
                'Ha ocurrido un error',
                'No se pudo obtener la localización',
                [{text:'Ok'}]
              );
            console.log(error.message)
        }


    })()  
    }, [location])
      
    // si picked location trae coordenadas se ejecuta el dispatch
    useEffect(() => {
        if(pickedLocation) dispatch(getLogation(pickedLocation))
    }, [pickedLocation, dispatch])

    
    
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
                <Tab.Screen 
                    name="Carrito" 
                    component={CartStackScreen}
                    options={{
                        tabBarBadge:cartLength.length,
                        tabBarBadgeStyle:{
                            backgroundColor:"#b83253"
                        }
                    }}
                    />
                <Tab.Screen 
                    name="Guardados" 
                    component={FavStackScreen}
                    options={{
                        tabBarIcon: ({ focused, size }) => (
                            <FontAwesome5 name="bookmark" size={size} color={focused ?"#b83253":"#fc666f"} />
                        ),
                    }}
                    />
                <Tab.Screen name="Usuario" component={SettingsStackScreen}/>
            </Tab.Navigator>
        
    )
}

