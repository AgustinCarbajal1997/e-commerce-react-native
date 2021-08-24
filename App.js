
import React from 'react';
import { useFonts } from 'expo-font'
import AppLoading from 'expo-app-loading';
import MainNavigator from './navigation'
import { Provider } from 'react-redux';
import { persistor, store } from './store';
import { PersistGate } from 'redux-persist/lib/integration/react';

import { init } from './db';

init()
  .then(() => console.log('Database initialized'))
  .catch((err) => {
    console.log('Database failed to connect');
    console.log(err.message)
});



export default function App() {
  const [fontsLoaded] = useFonts({
    'poppins-regular': require('./assets/fonts/Poppins-Regular.ttf'),
    'poppins-semi-bold':require('./assets/fonts/Poppins-SemiBold.ttf')
  })

  if(!fontsLoaded) return <AppLoading/>

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}> 
        <MainNavigator/>
      </PersistGate>
    </Provider>

    
    

  );
}


