import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import propTypes from 'prop-types';

function AddToStoryScreeen({ navigation }) {
  return (
    <View style={styles?.AddToStory}>
      <Text>AddToStoryScreeen</Text>
    </View>
  );
}
AddToStoryScreeen.propTypes = {
  navigation: propTypes.object,
};
export default AddToStoryScreeen;

const styles = StyleSheet.create({
  AddToStory: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});
