import React from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';
import propTypes from 'prop-types';

function DirectScreen({ navigation }) {
  return (
    <View style={styles?.wrapper}>
      <Text>Direct Screen</Text>
      <Button
        onPress={() => {
          navigation?.navigate('HomeScreen');
        }}
        title="Home"
      />
    </View>
  );
}
DirectScreen.propTypes = {
  navigation: propTypes.object,
};
export default DirectScreen;

const styles = StyleSheet.create({
  wrapper: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});
