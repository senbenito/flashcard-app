import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default class DeckView extends React.Component {
  render (){
    const deck = this.props.navigation.state.params.entryId;
    return (
      <View style={styles.container}>
        <Text>This is the {deck} deck.</Text>
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
