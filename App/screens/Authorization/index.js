import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

function Authorization({ navigation }) {
  return (
    <View style={styles?.wrapper}>
      <Text style={styles.title}>Instagram</Text>
      <TouchableOpacity style={styles.loginBtn} onPress={() => {}}>
        <Text style={styles.loginText}>LOGIN </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('SignInScreen', { screen: 'SignInScreen' });
        }}
      >
        <Text style={styles.forgotText}>Swith Accounts</Text>
      </TouchableOpacity>
    </View>
  );
}
Authorization.propTypes = {
  navigation: PropTypes.object,
};
export default Authorization;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#FAFAFA',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 50,
    color: '#262626',
    marginBottom: 40,
  },
  input: {
    width: '80%',
    backgroundColor: '#f2f2f2',
    borderRadius: 5,
    height: 44,
    marginBottom: 20,
    justifyContent: 'center',
    paddingHorizontal: 10,
    paddingVertical: 0,
    borderColor: 'rgba(0, 0, 0, 5)',
  },
  forgotText: {
    color: '#3797EF',
    fontSize: 11,
  },
  loginBtn: {
    width: '80%',
    backgroundColor: '#3797EF',
    borderRadius: 5,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 10,
  },
  loginText: {
    color: '#fff',
    fontSize: 11,
  },
});
