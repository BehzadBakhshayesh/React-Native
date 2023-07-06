import React, { useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigator from '@app/router/TabNavigator';
import SignInScreen from '@app/screens/SignInScreen';
import Authorization from '@app/screens/Authorization';
import { useSelector, useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { loginAction } from '@app/redux/actions/authenticationActions';
import { loading } from '@app/redux/actions/loadingActions';
import SplashScreen from '@app/screens/SplashScreen';

const StackNavigator = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      try {
        const token = await AsyncStorage.getItem('token');
        dispatch(loginAction(token));
        dispatch(loading(true));
      } finally {
        dispatch(loading(false));
      }
    })();
  }, []);

  const Stack = createNativeStackNavigator();
  const { isAuth, isLoading } = useSelector((state) => ({
    isAuth: state?.authenticationReducer,
    isLoading: state?.loadinReducer,
  }));

  if (isLoading) {
    return <SplashScreen />;
  }

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {isAuth ? (
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
