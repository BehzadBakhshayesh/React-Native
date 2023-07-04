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
    // setTimeout(() => {
    //   dispatch(loginAction('ttookkeenn'));
    // }, 300);

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
