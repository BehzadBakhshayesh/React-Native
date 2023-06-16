import { HomeScreen } from './screens/HomeScreen';
import { SignInScreen } from './screens/SignInScreen';

export const stackRoutesList = [
    {
        id: 1,
        name: 'SignIn',
        component: SignInScreen
    },
    {
        id: 2,
        name: 'tabNavigation',
        component: ''
    },
]
export const tabRoutesList = [
    {
        id: 1,
        name: 'Home',
        component: HomeScreen
    },
    {
        id: 1,
        name: 'Profile',
        component: ""
    },
]