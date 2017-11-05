import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native'
import { connect } from 'react-redux'
import { AppLoading } from 'expo'

// Packages
import values from 'lodash.values'

// Components
import DeckListCard from '../components/DeckListCard'

// Data
// import getDecks from '../utils/decks'
import { fetchDecks } from '../utils/api'
import { receiveDecks } from '../actions'

class DeckList extends Component {

  state = {
    ready: true
  }

  componentDidMount() {
    const { dispatch } = this.props

    fetchDecks()
      .then((decks) => {
        dispatch(receiveDecks(decks))
      })
  }

  navigateFromListCard = (destination) => {
    console.log('destination: ', destination[0], ' ', destination[1])
    this.props.navigation.navigate(destination[0], {deckId: destination[1]})
  }

  renderItem = (item) => {
    return <DeckListCard {...item} handlePress={(result) => this.navigateFromListCard(result)} />
  }

  keyExtractor = (item, index) => item.title;

  render() {
    const { decks } = this.props
    const { ready } = this.state

    if (ready === false) {
      return <AppLoading />
    }

    return (
      <View style={styles.container}>
        <FlatList
          data={values(decks)}
          renderItem={this.renderItem}
          keyExtractor={this.keyExtractor}
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

function mapStateToProps ( decks ) {
  return {
    decks
  }
}

export default connect(
  mapStateToProps
)(DeckList)
