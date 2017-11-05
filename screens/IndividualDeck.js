import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'

// Components
import Button from '../components/Button'

// Utils
import { purple, white } from '../utils/colors'


class IndividualDeck extends Component {
  static navigationOptions = ({ navigation }) => {
    const { deckId } = navigation.state.params
    return {
      title: `Deck: ${deckId}`
    }
  }

  componentDidMount() {

  }

  render() {
    const { decks, deck } = this.props
    // const { deckId } = navigation.state.params

    console.log('props for detail: ', this.props)
    // console.log('decks: ', decks[deckId])

    // let currentDeck = Object.keys(decks).filter(function(deck, index) {
    //    myObject[key] *= 2;
    // });

    return (
      <View style={styles.container}>
        <View style={styles.deckInfo}>
          <View style={styles.deckInfoContent}>
            <Text style={styles.deckTitle}>
              {deck.title}
            </Text>
            <Text style={styles.deckSubTitle}>
              {deck.questions.length + (deck.questions.length === 1 ? ' card' : ' cards')}
            </Text>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <Button>
            Add Card
          </Button>
          <Button buttonAlt={true}>
            Start Quiz
          </Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // justifyContent: 'space-between'
  },
  button: {
    padding: 10,
    backgroundColor: purple,
  },
  buttonText: {
    color: white,
    fontSize: 20,
    textAlign: 'center',
  },
  deckTitle: {
    fontSize: 28,
    textAlign: 'center'
  },
  deckSubTitle: {
    fontSize: 20,
    color: '#aaaaaa',
    textAlign: 'center'
  },
  deckInfo: {
    flex: 3,
  },
  deckInfoContent: {
    alignItems: 'center'
  },
  buttonContainer: {
    padding: 20,
    // paddingRight: 20,
    flex: 1,
  },
});


function mapStateToProps (decks, { navigation }) {
  const { deckId } = navigation.state.params

  // let filteredDeck = decks.filter((deck) =>  {
  //   return deck.title === deckId;
  // });

  console.log('ugh: ', decks[deckId])

  return {
    decks,
    deckId,
    deck: decks[deckId],
  }
}

export default connect(
  mapStateToProps
)(IndividualDeck)
