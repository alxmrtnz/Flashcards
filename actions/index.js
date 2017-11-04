export const RECEIVE_DECKS = 'RECEIVE_DECKS'
export const ADD_ENTRY = 'ADD_ENTRY'

export function receiveDecks (decks) {
  console.log('action: ', decks)
  return {
    type: RECEIVE_DECKS,
    decks,
  }
}

export function addEntry (deck) {
  return {
    type: ADD_DECK,
    deck,
  }
}