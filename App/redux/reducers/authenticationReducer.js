import AsyncStorage from '@react-native-async-storage/async-storage';

export const authenticationReducer = (state = false, action) => {
  switch (action.type) {
    case 'IS_LOGIN':
      return !!action.payload;
    case 'LOGOUT':
      async () => {
        await AsyncStorage.removeItem('token');
        await AsyncStorage.clear();
        return false;
      };
      break;
    default:
      return state;
  }
};
