export const DECK_STORAGE_KEY = 'Flashcarfds:decks'

const decks = {
  React: {
    title: 'React',
    questions: [
      {
        question: 'React is a library for managing user interfaces',
        answer: 'True'
      },
      {
        question: 'The componentDidMount lifecycle event is where you make Ajax requests in React',
        answer: 'True'
      }
    ]
  },
  JavaScript: {
    title: 'JavaScript',
    questions: [
      {
        question: 'A closure is a function with no props',
        answer: 'False'
      }
    ]
  }
}

export default function getDecks () {
  return decks
}