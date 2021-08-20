
import React from 'react';
import { useFonts } from 'expo-font'
import AppLoading from 'expo-app-loading';
import MainNavigator from './navigation'
import { Provider } from 'react-redux';
import store from './store';

export default function App() {
  const [fontsLoaded] = useFonts({
    'poppins-regular': require('./assets/fonts/Poppins-Regular.ttf'),
    'poppins-semi-bold':require('./assets/fonts/Poppins-SemiBold.ttf')
  })

  if(!fontsLoaded) return <AppLoading/>

  return (
    <Provider store={store}>
      <MainNavigator/>
    </Provider>

  );
}


