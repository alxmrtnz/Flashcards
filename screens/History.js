import React from 'react';
import { StyleSheet, Text, View } from 'react-native'

export default class History extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View >
          <Text>This is the history screen</Text>
        </View>
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
