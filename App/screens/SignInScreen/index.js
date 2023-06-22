import React from 'react';
import { TextInput, View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useMutation } from 'react-query';
import { login } from '../../service/service';
import PropTypes from 'prop-types';
import { setStorage } from '../../tools/storage';

function SignInScreen({ navigation }) {
  // const { username, password } = useField();
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const mutation = useMutation(login, {
    onSuccess: (res) => {
      console.log('data', res.data);
      res.status === '200' && setStorage({ value: res.data, key: 'token' });
      navigation.navigate('Root', { screen: 'Home' });
    },
  });
  return (
    <View style={styles?.wrapper}>
      <Text style={styles.title}>Instagram</Text>
      <TextInput
        placeholder="Username"
        style={styles.input}
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        placeholder="Password"
        style={styles.input}
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
      />

      <TouchableOpacity>
        <Text style={styles.forgotText}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.loginBtn}
        onPress={() => {
          mutation.mutate({
            username,
            password,
          });
        }}
      >
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
