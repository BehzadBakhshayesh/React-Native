import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigator from '@app/router/TabNavigator';
import SignInScreen from '@app/screens/SignInScreen';
import Authorization from '@app/screens/Authorization';
import SplashScreen from '@app/screens/SplashScreen';
import DirectScreen from '@app/screens/DirectScreen';
import { useAuth } from '@app/hooks/useAuth';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  const { isAuth, hasSplash } = useAuth();

  if (hasSplash) return <SplashScreen />;
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {isAuth ? (
        <>
          <Stack.Screen name="Root" component={TabNavigator} />
          <Stack.Screen name="DirectScreen" component={DirectScreen} />
        </>
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
