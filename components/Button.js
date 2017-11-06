import React, { Component } from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import { purple, white } from '../utils/colors'

export default class Button extends React.Component {
  render() {
    let { children, onPress, buttonAlt, style } = this.props

    return (
      <TouchableOpacity
        style={buttonAlt ? [styles.buttonAlt, style] : [styles.button, style]}
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