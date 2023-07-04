export const loginReducer = (state = false, action) => {
  switch (action.type) {
    case 'IS_LOGIN':
      return !!action.payload;
    case 'LOGOUT':
      return false;
    default:
      return state;
  }
};
