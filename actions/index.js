export const RECEIVE_DECKS = 'RECEIVE_DECKS'
export const ADD_DECK = 'ADD_DECK'
export const ADD_CARD_TO_DECK = 'ADD_CARD_TO_DECK'

export function receiveDecks (decks) {
  console.log('action: ', decks)
  return {
    type: RECEIVE_DECKS,
    decks,
  }
}

export function addDeck (deck) {
  return {
    type: ADD_DECK,
    deck,
  }
}

export function addCardToDeck (deck) {
  return {
    type: ADD_CARD_TO_DECK,
    deck,
  }
}