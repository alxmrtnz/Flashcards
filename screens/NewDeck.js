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

// Actions
import { addDeck } from '../actions/decks'

// Api
import { submitDeck } from '../utils/api'

class NewDeck extends Component {

  state = {
    input: ''
  }

  /**
  * @description Function to handle input from field and update
  * local component state
  * @param {String} input - the new value from the input field
  */
  handleTextChange = (input) => {
    this.setState(() => ({
      input
    }))
  }

  /**
  * @description Function to submit a new deck to the app.
  * This function updates the redux store, resets the component's
  * fields, updates the AsyncStorage via an api call, and navigates
  * back to the DeckList view
  */
  submit = () => {
    const title = this.state.input
    const key = title

    const deck = {
      title: this.state.input,
      questions: []
    }

    // Add deck to Redux store
    this.props.dispatch(addDeck({
      [key]: deck
    }))

    // Clear and reset input
    this.setState(() => ({ input: '' }))

    // Go back to the DeckList
    this.props.navigation.navigate('DeckList')

    // Update AsyncStorage with new deck
    submitDeck({ deck, key })
  }

  render() {
    let { input } = this.state

    return (
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <View >
          <Text style={{fontSize: 30, textAlign: 'center', marginBottom: 25}}>
            What is the title of your new deck?
          </Text>
          <TextInput
            value={input}
            style={styles.input}
            onChange={(event) => this.handleTextChange(event.nativeEvent.text)}
          />
          <Button onPress={() => this.submit()}>
            Submit
          </Button>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  input: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#cccccc',
    fontSize: 20,
    marginBottom: 20
  }
});

export default connect()(NewDeck)
