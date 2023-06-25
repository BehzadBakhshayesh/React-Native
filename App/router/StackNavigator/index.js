import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigator from '@app/router/TabNavigator';
import SignInScreen from '@app/screens/SignInScreen';
import { isAuth } from '@app/tools/isAuth';
import Authorization from '@app/screens/Authorization';

const StackNavigator = () => {
  const Stack = createNativeStackNavigator();
  const screenOptions = {
    //  headerTitle: (props) => <LogoTitle {...props} /> }
    title: '',
    headerStyle: {
      backgroundColor: '#FAFAFA',
    },
    headerTintColor: '#262626',
    // headerTitleStyle: {
    //   fontWeight: 'bold',
    // },
  };

  return (
    <Stack.Navigator screenOptions={screenOptions}>
      {isAuth() ? (
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
