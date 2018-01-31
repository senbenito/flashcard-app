import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {getData} from '../utils/api';

export default class DeckList extends React.Component {
  render () {
    const decks = getData();
    return (
      <View style={styles.container}>
        {Object.keys(decks).map((deck)=>{
          const {title, questions} = decks[deck];
          return (
            <View key={title}>
              <Text>{title}</Text>
              <Text>{questions.length}</Text>
            </View>
          );
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
