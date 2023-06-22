import React from 'react';
import { Button, Text, View } from 'react-native';
// import { setStorage } from '../../tools/storage';
import propTypes from 'prop-types';

function HomeScreen({ navigation }) {
  const logout = () => {
    // setStorage({ value: null, key: 'token' });
    navigation.navigate('SignInScreen', { screen: 'SignInScreen' });
  };
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home</Text>
      <Button onPress={logout} title="logout" />
    </View>
  );
}
HomeScreen.propTypes = {
  navigation: propTypes.object,
};
export default HomeScreen;
