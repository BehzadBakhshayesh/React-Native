import React, { Fragment } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { tabScreensList } from './tabScreensList';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const screenOptions = { headerShown: false, tabBarShowLabel: false };

  return (
    <Tab.Navigator screenOptions={screenOptions}>
      {tabScreensList?.map((item) => (
        <Fragment key={item?.key}>
          <Tab.Screen {...item} />
        </Fragment>
      ))}
    </Tab.Navigator>
  );
};

export default TabNavigator;
