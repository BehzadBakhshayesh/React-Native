import { useState } from 'react';

const useField = (init = '') => {
  const [value, onChangeText] = useState(init);
  return { value, onChangeText };
};
export default useField;
