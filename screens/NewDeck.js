import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView
} from 'react-native'

export default class NewDeck extends React.Component {

  state = {
    input: ''
  }

  handleTextChange = (input) => {
    console.log('input: ', input)
    this.setState(() => ({
      input
    }))
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
    fontSize: 20
  }
});
