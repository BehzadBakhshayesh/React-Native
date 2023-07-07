import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '@app/screens/HomeScreen';
import HomeScreen2 from '@app/screens/HomeScreen2';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="Home2" component={HomeScreen2} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
