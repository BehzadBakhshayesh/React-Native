import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { isAuth } from '../../tools/isAuth';
import HomeScreen from '../../screens/HomeScreen';
import TabNavigator from '../TabNavigator';


const StackNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      {
        !isAuth() ?
          <><Stack.Screen name="Home" component={TabNavigator} /></> :
          <><Stack.Screen name="Home" component={HomeScreen} /></>
      }
    </Stack.Navigator>
  );

}

export default StackNavigator

