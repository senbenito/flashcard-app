import React from 'react';
import {View, Text, Button} from 'react-native';
import {getData} from '../utils/api';
import {styles} from '../utils/styles';

export default class DeckList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      decks: {}
    }
    this.goGetHerokuDecks = this.goGetHerokuDecks.bind(this);
  }

  async goGetHerokuDecks() {
    const response = await fetch('https://senbenito-server.herokuapp.com/decks');
    let decks = await response.json();
    this.setState({decks});
  };

  componentWillMount() {
    this.goGetHerokuDecks();
  }

  render () {
    const decks = this.state.decks;
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
