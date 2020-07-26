/** @format */

import React from 'react';
import 'react-native-gesture-handler';
import RadioButton from '../../components/RadioButton';
import RandomQuestions from '../../components/RandomQuestions';
import Profile from '../../components/Profile';
import { createStackNavigator } from '@react-navigation/stack';
import homePage from '../../pages/homePage';
import ExamComponent from '../../components/ExamComponent';

const Stack = createStackNavigator();

const HomeStackScreen = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: 'gray',
        headerBackTitleVisible: false,
        cardOverlayEnabled: false,
      }}>
      <Stack.Screen
        name='ACEHome'
        component={homePage}
        options={{
          title: 'home',
          headerLeft: null,
          headerHideBackButton: true,
          gestureEnabled: false,
        }}
      />
      <Stack.Screen
        name='Profile'
        component={Profile}
        options={{ title: 'Profile' }}
      />

      <Stack.Screen
        name='ExamComponent'
        component={ExamComponent}
        options={{
          title: 'Exam Type',
        }}
      />

      <Stack.Screen
        name='RadioButton'
        component={RadioButton}
        options={{ title: 'RadioButton' }}
      />

      <Stack.Screen
        name='RandomQuestions'
        component={RandomQuestions}
        options={{
          title: 'Random Questions',
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeStackScreen;
