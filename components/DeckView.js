import React from 'react';
import {View, Text} from 'react-native';
import {getData} from '../utils/api';
import {styles} from '../utils/styles';

export default class DeckView extends React.Component {
  render (){
    const deck = this.props.navigation.state.params.entryId;
    const decks = getData();
    return (
      <View style={styles.container}>
        <Text>Welcome to {decks[deck].title}!</Text>
        <Text>We have {decks[deck].questions.length} questions in this deck...</Text>
      </View>
    );
  }
}
