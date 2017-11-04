import React from 'react'
import { View, StatusBar, Platform } from 'react-native'

// Screens
import History from '../screens/History'
import AddEntry from '../screens/AddEntry'

// Navigation
import { TabNavigator } from 'react-navigation'

// Assets
import { FontAwesome, Ionicons } from '@expo/vector-icons'

// Utils
import { purple, white } from '../utils/colors'


const Tabs = TabNavigator({
  History: {
    screen: History,
    navigationOptions: {
      tabBarLabel: 'Decks',
      tabBarIcon: ({ tintColor }) => <Ionicons name='ios-bookmarks' size={30} color={tintColor} />
    },
  },
  AddEntry: {
    screen: AddEntry,
    navigationOptions: {
      tabBarLabel: 'New Deck',
      tabBarIcon: ({ tintColor }) => <FontAwesome name='plus-square' size={30} color={tintColor} />
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


export default class FlashTabNavigator extends React.Component {
  render() {
    return (
      <Tabs />
    );
  }
}