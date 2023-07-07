import React from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';
import propTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { logOut } from '@app/redux/actions/authenticationActions';

function ReelsScreen() {
  return (
    <View style={styles?.reels}>
      <Text>ReelsScreen</Text>
    </View>
  );
}
ReelsScreen.propTypes = {
  navigation: propTypes.object,
};
export default ReelsScreen;

const styles = StyleSheet.create({
  reels: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});
