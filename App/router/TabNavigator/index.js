import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const TabNavigator = () => {
    const Tab = createBottomTabNavigator()
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} />
        </Tab.Navigator>
    );

}

export default TabNavigator
