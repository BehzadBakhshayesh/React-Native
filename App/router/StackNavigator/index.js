import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { isAuth } from './tools/isAuth';


const StackNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      {
        !isAuth() ?
          <Stack.Screen name="Home" component={HomeScreen} /> :
          <Stack.Screen name="Home" component={HomeScreen} />
      }
    </Stack.Navigator>
  );

}

export default StackNavigator

