import React from 'react';
import { Text, View, Dimensions, StyleSheet } from 'react-native';

const windowWidth = Dimensions.get('window').width;

const ExploreModel = ({ data }) => {
  const isOdd = data?.item & 1;
  const itemStyle = styles?.item;
  const reelsStyle = { ...itemStyle, height: (2 / 3) * windowWidth };

  return (
    <View style={styles?.wrapper}>
      <View style={isOdd ? itemStyle : reelsStyle}></View>
      <View style={itemStyle}></View>
      <View style={itemStyle}></View>
      <View style={itemStyle}></View>
      <View style={itemStyle}></View>
      <View style={itemStyle}></View>
      <View style={isOdd ? reelsStyle : itemStyle}></View>
      <View style={itemStyle}></View>
    </View>
  );
};

export default ExploreModel;

const styles = StyleSheet.create({
  wrapper: {
    width: windowWidth,
    height: windowWidth,
    display: 'flex',
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
