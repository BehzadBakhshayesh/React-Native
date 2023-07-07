import React, { Fragment } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { tabScreensList } from './tabScreensList';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      {tabScreensList?.map((item) => (
        <Fragment key={item?.key}>
          <Tab.Screen {...item} />
        </Fragment>
      ))}
    </Tab.Navigator>
  );
};

export default TabNavigator;
