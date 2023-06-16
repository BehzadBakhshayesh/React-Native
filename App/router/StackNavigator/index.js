import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { isAuth } from '../../tools/isAuth';
import SignInScreen from '../../screens/SignInScreen';
import TabNavigator from '../TabNavigator';


const StackNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      {
        !isAuth() ?
          <>
            <Stack.Screen name="Home" component={TabNavigator} />
          </> :
          <>
            <Stack.Screen name="Home" component={SignInScreen} />
          </>
      }
    </Stack.Navigator>
  );

}

export default StackNavigator

