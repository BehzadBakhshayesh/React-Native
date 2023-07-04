import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '@app/screens/HomeScreen';
import HomeScreen2 from '@app/screens/HomeScreen2';

const TabNavigator = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Home2" component={HomeScreen2} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
