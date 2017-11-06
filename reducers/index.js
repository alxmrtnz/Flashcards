import { RECEIVE_DECKS, ADD_DECK, ADD_CARD_TO_DECK } from '../actions'

function decks (state = {}, action) {
  switch (action.type) {
    case RECEIVE_DECKS :
      console.log('reducer received decks: ', action.decks)
      return {
        ...state,
        ...action.decks,
      }
    case ADD_DECK :
      console.log('reducer ADD_DECK received: ', action.deck)
      return {
        ...state,
        ...action.deck
      }
    case ADD_CARD_TO_DECK :
      console.log('the thing: ', action.deck, '  deck: ')
      return {
        ...state,
        ...action.deck
      }
    default :
      return state
  }
}

export default decks