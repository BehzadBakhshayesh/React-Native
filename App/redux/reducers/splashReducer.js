export const splashReducer = (state = false, action) => {
  switch (action.type) {
    case 'HAS_SPLSH':
      return action?.payload;
    default:
      return state;
  }
};
