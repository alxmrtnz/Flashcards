import { AsyncStorage } from 'react-native'
import { DECK_STORAGE_KEY } from './decks'

import getDecks from './decks'

/**
* @description Function that gets the AsyncStorage item and then
* passes the results to receiveDecks()
*/
export function fetchDecks () {
  return AsyncStorage.getItem(DECK_STORAGE_KEY)
    .then(receiveDecks)
}

/**
* @description Function that receives the AsyncStorage data object.
* If the results are null, it calls setInitialData() to return
* initial dummy data
* @returns {Object} results - initial data object
*/
function receiveDecks (results) {
  return results === null
    ? setInitialData()
    : JSON.parse(results)
}

/**
* @description Function that gets initial data via the getDecks()
* api function
* FINISH NOTE HERE LATER
*/
function setInitialData () {

  let initialData = getDecks()

  AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(initialData))

  // Return decks for use in redux store
  return initialData
}

/**
* @description Function that submits a deck to the AsyncStorage
* @param {Object} deck - the deck object for submission
* @param {String} key - the key for the deck object
*/
export function submitDeck ({ deck, key }) {
  return AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify({
    [key]: deck
  }))
}