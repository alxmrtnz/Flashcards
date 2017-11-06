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
import { receiveDecks } from '../actions/decks'

// Utils
import { purple, white } from '../utils/colors'

class DeckList extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Back'
    }
  }

  state = {
    ready: false
  }

  componentDidMount() {
    const { dispatch } = this.props

    fetchDecks()
      .then((decks) => {
        dispatch(receiveDecks(decks))
      })
      .then(() => this.setState(() => ({ready: true})))
  }

  /**
  * @description Function that handles navigation when a
  * DeckListCard is pressed. This funciton is passed as a prop
  * to each DeckListCard component
  * @param {Array} destination - array that contains:
  * 1) the destination screen as a string
  * 2) the deckId for the card being pressed to pass as a param
  */
  navigateFromListCard = (destination) => {
    this.props.navigation.navigate(destination[0], {deckId: destination[1]})
  }

  /**
  * @description Render Item function for the FlatList component
  * @param {Object} item - the deck object to be rendered
  */
  renderItem = (item) => {
    return <DeckListCard {...item} handlePress={(result) => this.navigateFromListCard(result)} />
  }

  /**
  * @description Function to produce keys for each item being
  * rendered by the FlatList
  * @param {Object} item - the deck object to be rendered
  * @param {Integer} index - index of the item from FlatList
  */
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
  deckListHeader: {
    backgroundColor: purple,
    padding: 10
  },
  appTitle: {
    color: white,
    fontSize: 20,
    textAlign: 'center'
  }
});

function mapStateToProps ( decks ) {
  return {
    decks
  }
}

export default connect(
  mapStateToProps
)(DeckList)
