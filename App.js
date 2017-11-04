import React from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native'

// Navigation
import { TabNavigator } from 'react-navigation'

// Screens
import History from './screens/History'
import AddEntry from './screens/AddEntry'

// Components
import FlashStatusBar from './components/FlashStatusBar'

// Assets
import { FontAwesome, Ionicons } from '@expo/vector-icons'

// Utils
import { purple, white } from './utils/colors'

const Tabs = TabNavigator({
  History: {
    screen: History,
    navigationOptions: {
      tabBarLabel: 'History',
      tabBarIcon: ({ tintColor }) => <Ionicons name='ios-bookmarks' size={30} color={tintColor} />
    },
  },
  AddEntry: {
    screen: AddEntry,
    navigationOptions: {
      tabBarLabel: 'Add Entry',
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



export default class App extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <FlashStatusBar backgroundColor={purple} />
        <Tabs />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
