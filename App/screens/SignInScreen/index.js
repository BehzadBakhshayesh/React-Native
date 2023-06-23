import React from 'react';
import { Button, TextInput, View, StyleSheet } from 'react-native';
import useField from "../../hooks/useField"

function SignInScreen() {
  const username = useField()
  const password = useField()

  return (
    <View style={styles?.wrapper}>
      <TextInput
        placeholder="Username"
        style={styles.input}
        {...username} />
      <TextInput
        placeholder="Password"
        style={styles.input}
        secureTextEntry
        {...password}
      />
      <Button
        title="Sign in"
        onPress={() => {}} />
    </View>
  );
}
export default SignInScreen;


const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 5, borderColor: "#000"
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  button: {

  },
})
