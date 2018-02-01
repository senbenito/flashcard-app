import React from 'react';
import {View, Text, Button} from 'react-native';
import {getData, getHerokuDecks} from '../utils/api';
import {styles} from '../utils/styles';

export default class DeckList extends React.Component {
  render () {
    const decks = getHerokuDecks();
    console.log(decks);
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
