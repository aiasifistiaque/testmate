import React from 'react';
import 'react-native-gesture-handler';
import Profile from '../../components/Profile';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const ProfileStackScreen = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: 'gray',
        headerBackTitleVisible: false,
        cardOverlayEnabled: false,
      }}
    >
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{title: 'Profile'}}
      />
    </Stack.Navigator>
  );
};

export default ProfileStackScreen;
