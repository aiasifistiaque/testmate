/** @format */

import React from 'react';
import 'react-native-gesture-handler';
import MenuPage from '../../pages/MenuPage';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const SettingsStackScreen = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: 'gray',
        headerBackTitleVisible: false,
        cardOverlayEnabled: false,
      }}>
      <Stack.Screen
        name='MenuPage'
        component={MenuPage}
        options={{ title: 'Menu', headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default SettingsStackScreen;
