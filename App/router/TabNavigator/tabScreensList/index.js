import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from '@app/screens/HomeScreen';
import HomeScreen2 from '@app/screens/HomeScreen2';

export const tabScreensList = [
  {
    key: 0,
    name: 'HomeScreen',
    component: HomeScreen,
    options: {
      tabBarIcon: ({ color, size }) => (
        <MaterialCommunityIcons name="home" color={color} size={size} />
      ),
    },
  },
  {
    key: 0,
    name: 'HomeScreen2',
    component: HomeScreen2,
    options: {
      tabBarIcon: ({ color, size }) => (
        <MaterialCommunityIcons name="home" color={color} size={size} />
      ),
    },
  },
];
