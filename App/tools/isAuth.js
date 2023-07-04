import { getStorage } from './storage';

export const isAuth = async () => {
  const token = await getStorage({ key: 'token', isJson: false });
  return !!token;
};
