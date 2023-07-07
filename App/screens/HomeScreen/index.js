import React from 'react';
import { Button, Text, View, SafeAreaView, ScrollView, StyleSheet, StatusBar } from 'react-native';
import propTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { logOut } from '@app/redux/actions/authenticationActions';

function HomeScreen({ navigation }) {
  const dispatch = useDispatch();
  return (
    <SafeAreaView style={styles?.home}>
      <ScrollView style={styles.scrollView}>
        <View style={styles?.box}>
          <Text>hello</Text>
        </View>
        <View style={styles?.box}>
          <Text>hello</Text>
        </View>
        <View style={styles?.box}>
          <Text>hello</Text>
        </View>
        <View style={styles?.box}>
          <Text>hello</Text>
        </View>
        <View style={styles?.box}>
          <Text>hello</Text>
        </View>
        <View style={styles?.box}>
          <Text>hello</Text>
        </View>
        <View style={styles?.box}>
          <Text>hello</Text>
        </View>
        <View style={styles?.box}>
          <Text>hello</Text>
        </View>
        <View style={styles?.box}>
          <Text>hello</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
HomeScreen.propTypes = {
  navigation: propTypes.object,
};
export default HomeScreen;

const styles = StyleSheet.create({
  home: { flex: 1, paddingTop: StatusBar.currentHeight },
  scrollView: { marginHorizontal: 5 },
  box: {
    width: '100%',
    height: 300,
    borderColor: '#000',
    borderWidth: 1,
  },
});
