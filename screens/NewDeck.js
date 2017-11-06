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
import { addDeck } from '../actions'

// Api
import { submitDeck } from '../utils/api'

class NewDeck extends Component {

  state = {
    input: ''
  }

  handleTextChange = (input) => {
    console.log('input: ', input)
    this.setState(() => ({
      input
    }))
  }

  submit = () => {

    // const key = this.state.input
    const title = this.state.input
    const key = title

    const deck = {
      title: this.state.input,
      questions: []
    }

    console.log('props: ', this.props)

    this.props.dispatch(addDeck({
      [key]: deck
    }))

    this.setState(() => ({ input: '' }))

    this.toHome()

    submitDeck({ deck, key })
  }

  toHome = () => {
    console.log('to home!')
    this.props.navigation.navigate('DeckList')
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
            autoFocus
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
