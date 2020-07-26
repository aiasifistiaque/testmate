/** @format */

import React from 'react';
import 'react-native-gesture-handler';
import ExamComponent from '../../components/ExamComponent';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const BrowseStackScreen = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: 'gray',
        headerBackTitleVisible: false,
        cardOverlayEnabled: false,
      }}>
      <Stack.Screen
        name='ExamComponent'
        component={ExamComponent}
        options={{
          title: 'Exam Type',
        }}
      />
    </Stack.Navigator>
  );
};

export default BrowseStackScreen;
