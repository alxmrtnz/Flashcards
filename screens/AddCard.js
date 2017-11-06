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
import { addDeck, addCardToDeck } from '../actions'

// Api
import { submitDeck, updateDeck } from '../utils/api'

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

  handleQuestionInputChange = (input) => {
    this.setState((state) => ({
      ...state,
      question: input
    }))
  }

  handleAnswerInputChange = (input) => {
    this.setState((state) => ({
      ...state,
      answer: input
    }))
  }

  submit = () => {
    const { deckId } = this.props.navigation.state.params
    const { question, answer } = this.state
    let { decks } = this.props

    let deck = {...decks[deckId]}
    // const key = this.state.input
    const card = { question, answer }
    const key = deckId

    deck.questions.push(card)

    this.props.dispatch(addCardToDeck({
      [key]: deck
    }))


    this.setState(() => ({ question: '', answer: '' }))

    this.props.navigation.goBack()

    console.log('updated deck? ', deck)
    updateDeck({ deck, key })
  }

  toHome = () => {
    console.log('to deck view!')
    this.props.navigation.navigate('DeckList')
  }

  render() {
    let { question, answer } = this.state
    let { decks } = this.props
    const { deckId } = this.props.navigation.state.params

    console.log('add card to: ', deckId)
    console.log('DECKS: ', decks)
    console.log('the deck we need: ', decks[deckId])



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
