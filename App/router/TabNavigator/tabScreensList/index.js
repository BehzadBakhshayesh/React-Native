import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from '@app/screens/HomeScreen';
import ExploreScreen from '@app/screens/ExploreScreen';
import AddToStoryScreeen from '@app/screens/AddToStoryScreeen';
import ReelsScreen from '@app/screens/ReelsScreen';
import ProfileScreen from '@app/screens/ProfileScreen';

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
    name: 'ExploreScreen',
    component: ExploreScreen,
    options: {
      tabBarIcon: ({ color, size }) => (
        <MaterialCommunityIcons name="instagram" color={color} size={size} />
      ),
    },
  },
  {
    key: 0,
    name: 'AddToStoryScreeen',
    component: AddToStoryScreeen,
    options: {
      tabBarIcon: ({ color, size }) => (
        <MaterialCommunityIcons name="plus" color={color} size={size} />
      ),
    },
  },
  {
    key: 0,
    name: 'ReelsScreen',
    component: ReelsScreen,
    options: {
      tabBarIcon: ({ color, size }) => (
        <MaterialCommunityIcons name="instagram" color={color} size={size} />
      ),
    },
  },
  {
    key: 0,
    name: 'ProfileScreen',
    component: ProfileScreen,
    options: {
      tabBarIcon: ({ color, size }) => (
        <MaterialCommunityIcons name="face-man" color={color} size={size} />
      ),
    },
  },
];
