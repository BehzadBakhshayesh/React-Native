import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { logOutAction, loginAction } from '@app/redux/actions/authenticationActions';
import { splashAction } from '@app/redux/actions/splashAction';

export const useAuth = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(splashAction(true));
    (async () => {
      try {
        const token = await AsyncStorage.getItem('token');
        dispatch(loginAction(token));
      } catch (e) {
        dispatch(logOutAction());
      } finally {
        dispatch(splashAction(false));
      }
    })();
  }, []);
  const { isAuth, hasSplash } = useSelector((state) => ({
    isAuth: state?.authenticationReducer,
    hasSplash: state?.splashReducer,
  }));
  return { isAuth, hasSplash };
};
