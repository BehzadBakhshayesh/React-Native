import React, { useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigator from '@app/router/TabNavigator';
import SignInScreen from '@app/screens/SignInScreen';
import Authorization from '@app/screens/Authorization';
import { useSelector } from 'react-redux';

const StackNavigator = () => {
  const Stack = createNativeStackNavigator();
  const isLogin = useSelector((state) => state?.loginReducer);

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {isLogin ? (
        <Stack.Screen name="Root" component={TabNavigator} />
      ) : (
        <>
          <Stack.Screen name="Authorization" component={Authorization} />
          <Stack.Screen name="SignInScreen" component={SignInScreen} />
        </>
      )}
    </Stack.Navigator>
  );
};

export default StackNavigator;
