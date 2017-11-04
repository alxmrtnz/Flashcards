import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native'

// Components
import DeckListCard from '../components/DeckListCard'

// Data
import getDecks from '../data/decks'

export default class DeckList extends React.Component {
  renderItem = ({ item }) => {
    return <DeckListCard {...item} />
  }

  _keyExtractor = (item, index) => item.title;

  render() {
    // let { decks } = this.state
    const decks = getDecks()

    return (
      <View style={styles.container}>
        <FlatList
          data={decks}
          renderItem={this.renderItem}
          keyExtractor={this._keyExtractor}
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
