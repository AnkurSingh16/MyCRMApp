import { Image, StyleSheet, Platform } from 'react-native';

import { Provider } from 'react-redux';
// TODO: Showing how to create redux store in legacy style right now, will replace with modern way on configuring the store later.
import {  legacy_createStore as createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import reducers from '../../reducers/PeopleReducer';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from '../../components/navigation/Navigation'

const store = createStore(reducers, applyMiddleware(thunk));

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <Provider store={store}>
      {/* <NavigationContainer> */}
        <Navigation />
      {/* </NavigationContainer> */}
    </Provider>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
