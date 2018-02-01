import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import {getData} from '../utils/api';
import {styles} from '../utils/styles';

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
              <Button onPress={()=>this.props.navigation.navigate('DeckView', {entryId: deck})} title="View Deck"></Button>
            </View>
          );
        })}
      </View>
    );
  }
}
