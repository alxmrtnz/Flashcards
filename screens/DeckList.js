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

  renderItem = (item) => {
    return <DeckListCard {...item} />
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
