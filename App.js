import React from 'react';
import { StyleSheet, Text, View } from 'react-native'

// Data Storage/Redux
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './reducers'

// Components
import FlashStatusBar from './components/FlashStatusBar'
import MainNavigator from './components/MainNavigator'

// Utils
import { purple, white } from './utils/colors'
import getDecks from './utils/decks'

let store = createStore(reducer)

export default class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <View style={{flex: 1}}>
          <FlashStatusBar backgroundColor={purple} barStyle="light-content" />
          <MainNavigator />
        </View>
      </Provider>
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
