import React, { Component } from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import { purple, white } from '../utils/colors'

export default class Button extends React.Component {
// export default function Button ({ children, onPress, style = {}, buttonAlt }) {


  // console.log('alt: ', buttonAlt)
  render() {
    let { children, onPress, buttonAlt } = this.props

    return (
      <TouchableOpacity
        style={buttonAlt ? styles.buttonAlt : styles.button}
        onPress={onPress}>
        <Text
        style={buttonAlt ? styles.buttonAltText : styles.buttonText}
        >
          {children}
        </Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: purple,
    padding: 20,
    marginBottom: 10,
  },
  buttonText: {
    textAlign: 'center',
    color: white,
    fontSize: 20,
  },
  buttonAlt: {
    backgroundColor: white,
    padding: 20,
    borderWidth: 1,
    borderColor: purple,
    marginBottom: 10
  },
  buttonAltText: {
    color: purple,
    textAlign: 'center',
    fontSize: 20,
  }
})