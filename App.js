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

// const defaultState = {
//   ...getDecks()
// };

// function configureStore(initialState) {
//   const store = createStore(reducer, initialState);

//   if (module.hot) {
//     // Enable Webpack hot module replacement for reducers
//     module.hot.accept('./reducers', () => {
//       const nextRootReducer = require('./reducers/index');
//       store.replaceReducer(nextRootReducer);
//     });
//   }

//   return store;
// }

// let store = configureStore(defaultState);

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
