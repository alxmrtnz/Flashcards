import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native'
import { connect } from 'react-redux'


class IndividualDeck extends Component {

  state = {
    ready: true
  }

  componentDidMount() {

  }

  render() {
    const { decks } = this.props
    const { ready } = this.state



    return (
      <View style={styles.container}>
        <Text>This is the deck detail view</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

function mapStateToProps ( decks ) {
  return {
    decks
  }
}

export default connect(
  mapStateToProps
)(IndividualDeck)
