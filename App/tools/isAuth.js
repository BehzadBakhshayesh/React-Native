import { getStorage } from './storage';

export async function isAuth() {
  const token = await getStorage({ key: 'token', isJson: false });
  return !!token;
}
