import React from 'react';
import { StyleSheet, Text, View } from 'react-native'

export default class DeckListCard extends React.Component {

  render() {
    let { title, questions } = this.props

    return (
      <View style={styles.deckListCard} >
        <Text style={styles.deckListCardTitle}>
          {title}
        </Text>
        <Text style={styles.deckListCardSubTitle}>
          {questions.length + (questions.length === 1 ? ' card' : ' cards')}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  deckListCard: {
    borderBottomWidth: 1,
    borderColor: '#bbbbbb',
    padding: 50,

  },
  deckListCardTitle: {
    fontSize: 20,
    textAlign: 'center'
  },
  deckListCardSubTitle: {
    fontSize: 18,
    color: '#aaaaaa',
    textAlign: 'center'
  }
});
