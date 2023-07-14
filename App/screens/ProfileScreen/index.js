import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import propTypes from 'prop-types';
import { useDispatch } from 'react-redux';

function ProfileScreen() {
  const dispatch = useDispatch();
  return (
    <View style={styles?.profile}>
      <Text>Profile Screen</Text>
    </View>
  );
}
ProfileScreen.propTypes = {
  navigation: propTypes.object,
};
export default ProfileScreen;

const styles = StyleSheet.create({
  profile: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});
