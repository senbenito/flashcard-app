import React from 'react';
import {View, Text} from 'react-native';
import DeckList from './components/DeckList';
import AddDeck from './components/AddDeck';
import DeckView from './components/DeckView';
import {TabNavigator, StackNavigator} from 'react-navigation';
import {FontAwesome, MaterialCommunityIcons} from '@expo/vector-icons';
import {white, orange, redOrange} from './utils/colors';

const Tabs = TabNavigator({
  DeckList: {
    screen: DeckList,
    navigationOptions: {
      tabBarLabel: 'Decks',
      tabBarIcon: ({tintColor}) => <MaterialCommunityIcons name='cards' size={30} color={tintColor} />
    }
  },
  AddDeck: {
    screen: AddDeck,
    navigationOptions: {
      tabBarLabel: 'Add a Deck',
      tabBarIcon: ({tintColor}) => <FontAwesome name='plus-square' size={30} color={tintColor} />

    }
  }
}, {
  tabBarOptions: {
    activeTintColor: redOrange,
    style: {
      height: 56,
      backgroundColor: white
    }
  }
});

const MainNavigator = StackNavigator({
  Home: {
    screen: Tabs,
    navigationOptions: {
      header: null
    }
  },
  DeckView: {
    screen: DeckView,
    navigationOptions: {
      title: 'Deck Info',
      headerTintColor: orange,
      headerStyle: {
        backgroundColor: white
      }
    }
  }
});

export default class App extends React.Component {
  render() {
    return (
      <View style={{flex:1}}>
        <MainNavigator />
      </View>
    );
  }
}
