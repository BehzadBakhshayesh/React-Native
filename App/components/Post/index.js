import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import propTypes from 'prop-types';

const Post = () => {
  return (
    <View style={styles?.post}>
      <Text>post</Text>
    </View>
  );
};
Post.propTypes = {
  navigation: propTypes.object,
};
export default Post;

const styles = StyleSheet.create({
  post: {
    width: '100%',
    height: 300,
    borderColor: '#000',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
