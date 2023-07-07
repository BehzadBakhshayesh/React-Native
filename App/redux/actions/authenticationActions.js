import { fetchClient } from '@app/service/fetchClient';
import { setStorage } from '@app/tools/storage';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const loginAction = (payload) => ({
  type: 'IS_LOGIN',
  payload,
});
export const logOutAction = () => ({
  type: 'LOGOUT',
});

export const login = (data) => {
  return (dispatch) => {
    fetchClient({
      method: 'post',
      url: 'login',
      data,
    })
      .then((res) => {
        dispatch(loginAction(res?.data?.token));
        setStorage({ key: 'token', value: res?.data?.token });
      })
      .catch(() => {
        dispatch(logOutAction());
      })
      .finally(() => {});
  };
};

export const logOut = () => {
  return (dispatch) => {
    AsyncStorage.removeItem('token').then(() => {
      dispatch(logOutAction());
      AsyncStorage.clear();
    });
  };
};
