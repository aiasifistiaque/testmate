/** @format */

import React from 'react';
import { Icon } from 'native-base';
import 'react-native-gesture-handler';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProfileStackScreen from '../screens/ProfileStackScreen';
import BrowseStackScreen from '../screens/BrowseStackScreen';
import SettingsStackScreen from '../screens/SettingsStackScreen';
import HomeStackScreen from '../screens/HomeStackScreen';
import PracticeStackScreen from '../screens/PracticeStackScreen';

const Tab = createBottomTabNavigator();

const HomeTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color = 'slateblue', size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'ios-globe' : 'ios-globe';
          } else if (route.name === 'Browse') {
            iconName = focused ? 'ios-search' : 'ios-search';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'md-person' : 'md-person';
          } else if (route.name === 'Practice') {
            iconName = focused ? 'md-book' : 'md-book';
          } else if (route.name === 'Options') {
            iconName = focused ? 'ios-options' : 'ios-options';
          }
          return (
            <Icon
              name={iconName}
              size={size}
              color={color}
              style={{ color: color }}
            />
          );
        },
      })}
      tabBarOptions={{
        activeTintColor: 'slateblue',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen
        name='Home'
        component={HomeStackScreen}
        //options={{tabBarVisible: false}}
      />
      <Tab.Screen name='Browse' component={BrowseStackScreen} />
      <Tab.Screen name='Practice' component={PracticeStackScreen} />
      <Tab.Screen name='Profile' component={ProfileStackScreen} />
      <Tab.Screen name='Options' component={SettingsStackScreen} />
    </Tab.Navigator>
  );
};

export default HomeTabs;
