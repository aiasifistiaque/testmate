import React from 'react';
import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import ResultComponent from '../../components/ResultComponent';
import SolveExam from '../../components/SolveExam';
import startUpPage from '../../pages/startUpPage';
import loginPage from '../../pages/loginPage';
import signUpPage from '../../pages/signUpPage';
import HomeTabs from '../tabs/HomeTabs';

const Stack = createStackNavigator();

const RootStackScreen = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: 'gray',
        headerBackTitleVisible: false,
        cardOverlayEnabled: false,
        headerShown: true,
      }}
    >
      <Stack.Screen
        name="startUpPage"
        component={startUpPage}
        options={{
          title: 'A.C.E',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="login"
        component={loginPage}
        options={{title: 'log in'}}
      />
      <Stack.Screen
        name="signup"
        component={signUpPage}
        options={{
          title: 'register',
        }}
      />
      <Stack.Screen
        name="Home"
        component={HomeTabs}
        options={{
          title: 'home',
          headerLeft: null,
          headerShown: false,
          headerHideBackButton: true,
          gestureEnabled: false,
        }}
      />
      <Stack.Screen
        name="SolveExam"
        component={SolveExam}
        options={{
          title: 'Solve',
          headerShown: true,
          headerLeft: null,
          headerHideBackButton: true,
          gestureEnabled: false,
          headerStyle: {
            backgroundColor: 'whitesmoke',
          },
        }}
      />
      <Stack.Screen
        name="ResultComponent"
        component={ResultComponent}
        options={{
          title: 'Result',
          headerShown: true,
          gestureEnabled: false,
          headerHideBackButton: true,
          headerLeft: null,
          headerStyle: {
            backgroundColor: 'white',
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default RootStackScreen;
