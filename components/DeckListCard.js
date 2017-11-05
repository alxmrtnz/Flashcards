import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

export default class DeckListCard extends React.Component {

  render() {
    let { title, questions, index } = this.props.item

    return (



      <TouchableOpacity
        style={styles.deckListCard}
        // For some reason, I can only pass one property back to handle press (so i had to make it into an array in order to have more than one)
        onPress={() => this.props.handlePress(['IndividualDeck', title])}
      >
        <Text style={styles.deckListCardTitle}>
          {title}
        </Text>
        <Text style={styles.deckListCardSubTitle}>
          {questions.length + (questions.length === 1 ? ' card' : ' cards')}
        </Text>
      </TouchableOpacity>
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
