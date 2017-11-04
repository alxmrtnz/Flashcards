import { AsyncStorage } from 'react-native'
import { DECK_STORAGE_KEY } from './decks'

import getDecks from './decks'

export function fetchDecks () {
  return AsyncStorage.getItem(DECK_STORAGE_KEY)
    .then(receiveDecks)
}

function receiveDecks (results) {
  if (results === null) {
    console.log('dummy data is null')
  } else {
    console.log('resultszz: ', JSON.parse(results))
  }
  return results === null
    ? setInitialData()
    : JSON.parse(results)
    // : setMissingDates(JSON.parse(results))
}

function setInitialData () {

  let initialData = getDecks()

  AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(initialData))

  return JSON.parse(initialData)
}

export function submitEntry ({ entry, key }) {
  return AsyncStorage.mergeItem(CALENDAR_STORAGE_KEY, JSON.stringify({
    [key]: entry
  }))
}

// export function removeEntry (key) {
//   return AsyncStorage.getItem(CALENDAR_STORAGE_KEY)
//     .then((results) => {
//       const data = JSON.parse(results)
//       data[key] = undefined
//       delete data[key]
//       AsyncStorage.setItem(CALENDAR_STORAGE_KEY, JSON.stringify(data))
//     })
// }