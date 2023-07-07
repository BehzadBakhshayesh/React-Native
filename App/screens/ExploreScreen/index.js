import React from 'react';
import { Text, View } from 'react-native';
import propTypes from 'prop-types';

function ExploreScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>ExploreScreen</Text>
    </View>
  );
}
ExploreScreen.propTypes = {
  navigation: propTypes.object,
};
export default ExploreScreen;
