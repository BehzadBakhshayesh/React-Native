import React from 'react';
import { Text, View } from 'react-native';
import propTypes from 'prop-types';

function HomeScreen2({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>HomeScreen2</Text>
    </View>
  );
}
HomeScreen2.propTypes = {
  navigation: propTypes.object,
};
export default HomeScreen2;
