import React from 'react';
import { TextInput, View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import useField from '@app/hooks/useField';
import { login } from '@app/redux/actions/authenticationActions';

function SignInScreen() {
  const dispatch = useDispatch();
  const email = useField('charles.morris@reqres.in');
  const password = useField('123');

  const disabled = !email?.value || !password?.value;
  const onPress = () => {
    dispatch(login({ email: email?.value, password: password?.value }));
  };

  return (
    <View style={styles?.wrapper}>
      <Text style={styles.title}>Instagram</Text>
      <TextInput placeholder="Username" style={styles.input} {...email} />
      <TextInput placeholder="Password" style={styles.input} {...password} secureTextEntry />
      <TouchableOpacity>
        <Text style={styles.forgotText}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginBtn} disabled={disabled} onPress={onPress}>
        <Text style={styles.loginText}>LOGIN </Text>
      </TouchableOpacity>
    </View>
  );
}
SignInScreen.propTypes = {
  navigation: PropTypes.object,
};
export default SignInScreen;

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
