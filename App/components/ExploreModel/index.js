import React from 'react';
import { Text, View, Dimensions, StyleSheet } from 'react-native';

const windowWidth = Dimensions.get('window').width;

const ExploreModel = () => {
  return (
    <View style={styles?.wrapper}>
      <View style={{ ...styles?.item, height: (2 / 3) * windowWidth }}>
        <Text>1</Text>
      </View>
      <View style={styles?.item}>
        <Text>2</Text>
      </View>
      <View style={styles?.item}>
        <Text>3</Text>
      </View>
      <View style={styles?.item}>
        <Text>4</Text>
      </View>
      <View style={styles?.item}>
        <Text>5</Text>
      </View>
      <View style={styles?.item}>
        <Text>6</Text>
      </View>
      <View style={styles?.item}>
        <Text>7</Text>
      </View>
      <View style={styles?.item}>
        <Text>8</Text>
      </View>
    </View>
  );
};

export default ExploreModel;

const styles = StyleSheet.create({
  wrapper: {
    width: windowWidth,
    height: windowWidth,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  item: {
    width: windowWidth / 3,
    height: windowWidth / 3,
    backgroundColor: '#ccc',
    borderColor: '#fff',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
