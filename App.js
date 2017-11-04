import React from 'react';
import { StyleSheet, Text, View } from 'react-native'

// Components
import FlashStatusBar from './components/FlashStatusBar'
import FlashTabNavigator from './components/FlashTabNavigator'

// Utils
import { purple, white } from './utils/colors'


export default class App extends React.Component {

  render() {
    return (
      <View style={{flex: 1}}>
        <FlashStatusBar backgroundColor={purple} barStyle="light-content" />
        <FlashTabNavigator />
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
