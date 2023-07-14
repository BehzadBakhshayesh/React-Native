import React from 'react';
import { Text, View, Dimensions, StyleSheet } from 'react-native';
import propTypes from 'prop-types';

const windowWidth = Dimensions.get('window').width;

const Post = () => {
  return (
    <View style={styles?.post}>
      <Text style={styles?.text}>Post</Text>
    </View>
  );
};
Post.propTypes = {
  navigation: propTypes.object,
};
export default Post;

const styles = StyleSheet.create({
  post: {
    width: windowWidth,
    height: windowWidth,
    borderColor: '#FFF',
    borderWidth: 1,
    backgroundColor: '#CCC',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: { color: '#fff' },
});
