import { fetchClient } from '@app/service/fetchClient';

export const loginAction = (payload) => {
  console.log({ payload });
  return {
    type: 'IS_LOGIN',
    payload,
  };
};
export const logOut = () => ({
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
      })
      .catch(() => {
        dispatch(logOut());
      });
  };
};
