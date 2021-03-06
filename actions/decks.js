import {
  RECEIVE_DECKS,
  ADD_DECK,
  ADD_CARD_TO_DECK,
} from './types'

export function receiveDecks (decks) {
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