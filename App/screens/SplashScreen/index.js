import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SplashScreen = () => {
  return (
    <View style={styles.splash}>
      <Text>SplashScreen</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  splash: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});
