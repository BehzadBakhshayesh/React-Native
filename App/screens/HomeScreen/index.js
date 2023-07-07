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
import Post from '@app/components/Post';
import Story from '@app/components/Story';

const data = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

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
        <Button
          onPress={() => {
            navigation?.navigate('DirectScreen');
          }}
          title="Direct"
        />
        <FlatList
          data={data}
          renderItem={(item) => <Story />}
          keyExtractor={(item) => item.index}
          horizontal={true}
        />
        <FlatList data={data} renderItem={(item) => <Post />} keyExtractor={(item) => item.index} />
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
});
