import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

// eslint-disable-next-line no-undef
const source = require('@app/assets/images/splash.png');

const SplashScreen = () => {
  return (
    <View style={styles.splash}>
      <Image style={styles.icon} source={source} />
      <Text>Instagram</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  splash: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  icon: { width: 100, height: 100 },
});
