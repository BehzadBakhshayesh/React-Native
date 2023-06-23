import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigator from '@app/router/TabNavigator';
import SignInScreen from '@app/screens/SignInScreen';
import { isAuth } from '@app/tools/isAuth';

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

