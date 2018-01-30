import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DeckList from './components/DeckList';
import {TabNavigator} from 'react-navigation';
import {FontAwesome, MaterialCommunityIcons} from '@expo-vector-icons';
import {white, orange} from '../utils/colors';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <DeckList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: orange,
    color: white,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
