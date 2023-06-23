import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { isAuth } from '../../tools/isAuth';
import SignInScreen from '../../screens/SignInScreen';
import TabNavigator from '../TabNavigator';

const StackNavigator = () => {
  const Stack = createNativeStackNavigator();
 const screenOptions ={
  headerShown: false
}
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      {
        !isAuth() ?
          <>
            <Stack.Screen name="Home" component={TabNavigator} />
            {/* <Stack.Screen name="Direct" component={DirectScreen} /> */}
          </> :
          <>
            <Stack.Screen name="SignInScreen" component={SignInScreen} />
            {/* <Stack.Screen name="LoginScreen" component={LoginScreen} /> */}
          </>
      }
    </Stack.Navigator>
  );

}

export default StackNavigator

