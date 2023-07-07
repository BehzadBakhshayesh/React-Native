import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import propTypes from 'prop-types';

const Story = () => {
  return (
    <View style={styles?.story}>
      <Text>story</Text>
    </View>
  );
};
Story.propTypes = {
  navigation: propTypes.object,
};
export default Story;

const styles = StyleSheet.create({
  story: {
    width: 70,
    height: 70,
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 50,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
