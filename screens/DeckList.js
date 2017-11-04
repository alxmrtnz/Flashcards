import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native'
import { connect } from 'react-redux'
import { AppLoading } from 'expo'

// Components
import DeckListCard from '../components/DeckListCard'

// Data
// import getDecks from '../utils/decks'
import { fetchDecks } from '../utils/api'
import { receiveDecks } from '../actions'

class DeckList extends Component {

  state = {
    ready: false
  }

  componentDidMount() {
    const { dispatch } = this.props

    fetchDecks()
      .then((decks) => {
          console.log('receive: ', decks)
        // this.setState(() => ({ready: true}))
        dispatch(receiveDecks(decks))
      })
      .then(() => this.setState(() => ({ready: true})))
  }

  renderItem = ({ item }) => {
    return <DeckListCard {...item} />
  }

  _keyExtractor = (item, index) => item.title;

  render() {
    const { decks } = this.props
    const { ready } = this.state

    console.log('render deck list: ', decks)

    if (ready === false) {
      return <AppLoading />
    }

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

function mapStateToProps ( decks ) {
  return {
    decks
  }
}

export default connect(
  mapStateToProps
)(DeckList)
