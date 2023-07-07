import React from 'react';
import {
  Button,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  FlatList,
  StyleSheet,
  StatusBar,
} from 'react-native';
import propTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { logOut } from '@app/redux/actions/authenticationActions';

function HomeScreen({ navigation }) {
  const dispatch = useDispatch();
  return (
    <SafeAreaView style={styles?.home}>
      <ScrollView style={styles.scrollView}>
        <Button
          onPress={() => {
            dispatch(logOut());
          }}
          title="logout"
        />
        <FlatList
          horizontal={true}
          data={[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]}
          renderItem={({ item }) => (
            <View style={styles?.story} key={item?.index}>
              <Text style={styles?.text}>story</Text>
            </View>
          )}
          keyExtractor={(item) => item.index}
        />
        <FlatList
          data={[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]}
          renderItem={({ item }) => (
            <View style={styles?.box} key={item?.index}>
              <Text style={styles?.text}>post</Text>
            </View>
          )}
          keyExtractor={(item) => item.index}
        />
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
  story: {
    width: 50,
    height: 50,
    borderColor: '#000',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: '100%',
    height: 300,
    borderColor: '#000',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
