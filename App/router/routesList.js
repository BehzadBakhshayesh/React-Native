import Authorization from '@app/screens/Authorization';
import { HomeScreen } from './screens/HomeScreen';
import { SignInScreen } from './screens/SignInScreen';
import TabNavigator from './TabNavigator';

export const stackRoutesList = [
  {
    id: 1,
    name: 'Authorization',
    component: Authorization,
  },
  {
    id: 2,
    name: 'SignInScreen',
    component: SignInScreen,
  },
  {
    id: 3,
    name: 'Root',
    component: TabNavigator,
  },
];
export const tabRoutesList = [
  {
    id: 1,
    name: 'Home',
    component: HomeScreen,
  },
  {
    id: 1,
    name: 'Profile',
    component: '',
  },
];
