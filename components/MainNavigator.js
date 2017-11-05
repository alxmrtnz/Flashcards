// NEXT STEPS: add mainnavigator into here to wrap tab nav and export that into app.js so we can navigate to a deck details view

import React from 'react'
import { View, StatusBar, Platform } from 'react-native'

// Screens
import DeckList from '../screens/DeckList'
import AddEntry from '../screens/AddEntry'
import IndividualDeck from '../screens/IndividualDeck'

// Navigation
import { TabNavigator, StackNavigator } from 'react-navigation'

// Assets
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons'

// Utils
import { purple, white } from '../utils/colors'


const Tabs = TabNavigator({
  DeckList: {
    screen: DeckList,
    navigationOptions: {
      tabBarLabel: 'Decks',
      tabBarIcon: ({ tintColor }) => <MaterialCommunityIcons name='cards-playing-outline' size={30} color={tintColor} />
    },
  },
  AddEntry: {
    screen: AddEntry,
    navigationOptions: {
      tabBarLabel: 'New Deck',
      tabBarIcon: ({ tintColor }) => <MaterialIcons name='library-add' size={30} color={tintColor} />
    },
  },
}, {
  navigationOptions: {
    header: null
  },
  tabBarOptions: {
    activeTintColor: Platform.OS === 'ios' ? purple : white,
    style: {
      height: 56,
      backgroundColor: Platform.OS === 'ios' ? white : purple,
      shadowColor: 'rgba(0, 0, 0, 0.24)',
      shadowOffset: {
        width: 0,
        height: 3
      },
      shadowRadius: 6,
      shadowOpacity: 1
    }
  }
})

const AppNavigation = StackNavigator({
  Home: {
    screen: Tabs,
  },
  IndividualDeck: {
    screen: IndividualDeck,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: purple,
      }
    }
  }
})


export default class MainNavigator extends React.Component {
  render() {
    return (
      <AppNavigation />
    );
  }
}