import React from 'react';
import 'react-native-gesture-handler';
import StudyTabPage from '../../pages/StudyTabPage';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const PracticeStackScreen = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: 'gray',
        headerBackTitleVisible: false,
        cardOverlayEnabled: false,
      }}
    >
      <Stack.Screen
        name="StudyTabPage"
        component={StudyTabPage}
        options={{title: 'Study/Pratice'}}
      />
    </Stack.Navigator>
  );
};

export default PracticeStackScreen;
