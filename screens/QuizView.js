import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { AppLoading } from 'expo'

// Components
import Button from '../components/Button'
import TextButton from '../components/TextButton'

// Utils
import { purple, white, red, green } from '../utils/colors'


class QuizView extends Component {
  static navigationOptions = () => {
    return {
      title: `Quiz`
    }
  }

  state = {
    deck: {},
    ready: false,
    currentSlide: 0,
    displayQuestion: true,
    numberOfQuestions: 0,
    displayResults: false,
    questionsCorrect: 0
  }

  componentDidMount() {
    const { deckId } = this.props.navigation.state.params
    const { decks } = this.props

    this.setState((state) => {
      return {
        ...state,
        deck: decks[deckId],
        ready: true,
        numberOfQuestions: decks[deckId].questions.length
      }
    })
  }

  toggleQuestionAnswer = () => {
    let { displayQuestion } = this.state

    this.setState((state) => {
      return {
        ...state,
        displayQuestion: !displayQuestion
      }
    })
  }

  submitAnswer = (event, type) => {
    let { currentSlide, displayQuestion, numberOfQuestions } = this.state
    // console.log(type, ' button pressed: ', numberOfQuestions)

    this.setState((state) => {
      return (currentSlide + 1) === numberOfQuestions
      ? {
          ...state,
          displayResults: true
        }
      : {
          ...state,
          currentSlide: currentSlide + 1
        }
    })
  }

  getResults() {
    let { questionsCorrect, numberOfQuestions } = this.state

    let percentage = questionsCorrect / numberOfQuestions

    return (
      <View style={styles.questionAnswerContainer}>
        <Text>
          Your Score:
        </Text>
        <Text style={styles.questionAnswerText}>
          {percentage} %
        </Text>
      </View>
    )
  }

  render() {
    const { decks, navigation } = this.props
    const { deck, ready, currentSlide, displayQuestion, displayResults, numberOfQuestions } = this.state

    if (ready === false) {
      return <AppLoading />
    }

    return displayResults
    ? (
      <View style={styles.container}>
        {this.getResults()}

        <View style={styles.answerButtonsContainer}>
          <Button buttonAlt={true}>
            Try again
          </Button>
          <Button>
            Finish
          </Button>
        </View>
      </View>
    )
    : (
      <View style={styles.container}>
        <View>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>
            {currentSlide + 1}/{deck.questions.length}
          </Text>
        </View>

        <View style={styles.questionAnswerContainer}>
          <Text style={styles.questionAnswerText}>
            {displayQuestion
              ? deck.questions[currentSlide].question
              : deck.questions[currentSlide].answer
            }
          </Text>
          <TextButton
            onPress={this.toggleQuestionAnswer}
          >
            {displayQuestion
              ? 'Answer'
              : 'Question'
            }
          </TextButton>
        </View>

        <View style={styles.answerButtonsContainer}>
          <TouchableOpacity
            style={styles.buttonGreen}
            onPress={(event) => this.submitAnswer(event, 'hello')}
          >
            <Text
            style={styles.buttonText}
            >
              Correct
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonRed}
            // onPress={this.submitAnswer('incorrect')}
          >
            <Text
            style={styles.buttonText}
            >
              Incorrect
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20
  },
  questionAnswerContainer: {
    flex: 2,
    justifyContent: 'center'
  },
  questionAnswerText: {
    fontSize: 36,
    textAlign: 'center',
    marginBottom: 20
  },
  answerButtonsContainer: {

  },
  buttonRed: {
    backgroundColor: red,
    padding: 20,
    marginBottom: 10,
  },
  buttonGreen: {
    backgroundColor: green,
    padding: 20,
    marginBottom: 10,
  },
  buttonText: {
    textAlign: 'center',
    color: white,
    fontSize: 20,
  },
});

function mapStateToProps (decks) {

  return {
    decks
  }
}

export default connect(
  mapStateToProps
)(QuizView)
