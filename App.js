import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font'
import AppLoading from 'expo-app-loading';
import Navigator from './navigation/Navigator';

export default function App() {
  const [fontsLoaded] = useFonts({
    'poppins-regular': require('./assets/fonts/Poppins-Regular.ttf'),
    'poppins-semi-bold':require('./assets/fonts/Poppins-SemiBold.ttf')
  })

  if(!fontsLoaded) return <AppLoading/>

  return (
    <Navigator/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    fontFamily:'poppins-semi-bold',
    fontWeight:'bold'
  }
});
