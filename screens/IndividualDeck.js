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
      title: deckId
    }
  }

  componentDidMount() {

  }

  render() {
    const { decks, deck, navigation } = this.props

    console.log('deck view props: ', this.props)

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
          <Button
            buttonAlt={true}
            onPress={() => navigation.navigate('AddCard', {deckId: deck.title})}
          >
            Add Card
          </Button>
          <Button onPress={() => navigation.navigate('QuizView', {deckId: deck.title})}>
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
    justifyContent: 'center'
  },
  deckInfoContent: {
    alignItems: 'center'
  },
  buttonContainer: {
    padding: 20,
    flex: 1,
  },
});


function mapStateToProps (decks, { navigation }) {
  const { deckId } = navigation.state.params
  // const navigation = navigation

  return {
    decks,
    deckId,
    deck: decks[deckId],
    navigation
  }
}

export default connect(
  mapStateToProps
)(IndividualDeck)
