import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView
} from 'react-native'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'

// Components
import Button from '../components/Button'
import TextButton from '../components/TextButton'

// Actions
import { addDeck, addCardToDeck } from '../actions/decks'

// Api
import { submitDeck } from '../utils/api'

class AddCard extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Add Card'
    }
  }

  state = {
    question: '',
    answer: ''
  }

  /**
  * @description Function to handle input from field and update
  * local component state
  * @param {String} input - the new value from the input field
  */
  handleQuestionInputChange = (input) => {
    this.setState((state) => ({
      ...state,
      question: input
    }))
  }

  /**
  * @description Function to handle input from field and update
  * local component state
  * @param {String} input - the new value from the input field
  */
  handleAnswerInputChange = (input) => {
    this.setState((state) => ({
      ...state,
      answer: input
    }))
  }

  /**
  * @description Function to submit a new card to a deck.
  * This function updates the redux store, resets the component's
  * fields and updates the AsyncStorage via an api call
  */
  submit = () => {
    const { deckId } = this.props.navigation.state.params
    const { question, answer } = this.state
    let { decks } = this.props

    // Make a copy of the deck we need to update
    let deck = {...decks[deckId]}
    const key = deckId
    // Add the new question to the deck
    deck.questions.push({ question, answer })

    // Add card to deck in Redux
    this.props.dispatch(addCardToDeck({
      [key]: deck
    }))

    // Clear input fields
    this.setState(() => ({ question: '', answer: '' }))

    // Go back to previous screen
    this.props.navigation.goBack()

    // Update AsyncStorage
    submitDeck({ deck, key })
  }

  render() {
    let { question, answer } = this.state

    return (
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
          <Text style={{fontSize: 18, marginBottom: 10, fontWeight: 'bold'}}>
            Question
          </Text>
          <TextInput
            autoFocus
            value={question}
            style={styles.input}
            onChange={(event) => this.handleQuestionInputChange(event.nativeEvent.text)}
          />
          <Text style={{fontSize: 18, marginBottom: 10, fontWeight: 'bold'}}>
            Answer
          </Text>
          <TextInput
            autoFocus
            value={answer}
            style={styles.input}
            onChange={(event) => this.handleAnswerInputChange(event.nativeEvent.text)}
          />
          <Button
            style={{marginBottom: 20}}
            onPress={() => this.submit()}>
            Submit
          </Button>
          <TextButton
            onPress={() => this.props.navigation.goBack()}
          >
            Cancel
          </TextButton>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20
  },
  input: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#cccccc',
    fontSize: 20,
    marginBottom: 20,
  }
});

function mapStateToProps (decks) {
  return {
    decks
  }
}

export default connect(mapStateToProps)(AddCard)
