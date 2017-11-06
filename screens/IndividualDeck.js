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

  render() {
    let { decks, navigation } = this.props
    let { deckId } = navigation.state.params

    // HAVING AN ISSUE HERE BETWEEN LAPTOP AND PHONE DATA STORAGE
    // For some reason, AsyncStorage on my MacBook's simulator is stroing
    // data as the following (with string titles for IDs - I want it like this):
    /*
      {
        React: {
          questions : (2) [{…}, {…}]
          title : "React"
        }
        Javascript: {
          questions : (1) [{…}]
          title : "Javascript"
        }
      }
    /*

    // For some reason, my iPhone's asyncstorage is storing
    // the data as the following (numbers instead of string titles for IDs):
    /*
      {
        0: {
          questions : (2) [{…}, {…}]
          title : "React"
        }
        1: {
          questions : (1) [{…}]
          title : "Javascript"
        }
      }
    */
    // I don't know what is causing this, but it's leading to the code breaking
    // on my phone (I mainly developed this using the simulator, so I'd rather keep
    // my code the way it is if possible)

    let deck = decks[deckId]

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
  return {
    decks,
    navigation
  }
}

export default connect(
  mapStateToProps
)(IndividualDeck)
