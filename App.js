/** @format */

import 'react-native-gesture-handler';
import React from 'react';
import store from './store';
import { Provider } from 'react-redux';
import { Provider as PaperProvider } from 'react-native-paper';
import { StatusBar } from 'react-native';
import * as Font from 'expo-font';
import RootNavigator from './navigation';

const App = () => {
  React.useEffect(() => {
    Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
    });
  }, []);

  return (
    <Provider store={store}>
      <PaperProvider>
        <StatusBar barStyle='dark-content' backgroundColor='white' />
        <RootNavigator />
      </PaperProvider>
    </Provider>
  );
};

export default App;
