import React from 'react';
import { Button, Text, View } from 'react-native';
import propTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { logOut } from '@app/redux/actions/AuthenticationActions';

function HomeScreen() {
  const dispatch = useDispatch();
  const logout = async () => {
    dispatch(logOut());
  };
  return (
    <View style={styles?.home}>
      <Text>Home</Text>
      <Button onPress={logout} title="logout" />
    </View>
  );
}
HomeScreen.propTypes = {
  navigation: propTypes.object,
};
export default HomeScreen;

const styles = StyleSheet.create({
  home: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});
