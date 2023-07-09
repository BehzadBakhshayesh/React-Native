import AsyncStorage from '@react-native-async-storage/async-storage';

export const setStorage = ({ key, value }) => {
  let val;
  if (typeof value === 'object') {
    val = JSON.stringify(value);
  } else {
    val = value;
  }
  AsyncStorage.setItem(key, val);
};

// export const getStorage = async ({ key, isJson }) => {
//   try {
//     const value = await AsyncStorage.getItem(key);

//     if (value !== null) {
//       return isJson ? JSON.parse(value) : value;
//     }
//     return null;
//   } catch (e) {
//     console.log('getStorageError: ', e);
//   }
// };
