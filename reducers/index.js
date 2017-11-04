import { RECEIVE_DECKS, ADD_DECK } from '../actions'

function decks (state = {}, action) {
  switch (action.type) {
    case RECEIVE_DECKS :
      console.log('reducer received decks: ', action.decks)
      return {
        ...state,
        ...action.decks,
      }
    case ADD_DECK :
      return {
        ...state,
        ...action.deck
      }
    default :
      return state
  }
}

export default decks