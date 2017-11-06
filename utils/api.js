import { AsyncStorage } from 'react-native'
import { DECK_STORAGE_KEY } from './decks'

import getDecks from './decks'

export function fetchDecks () {
  return AsyncStorage.getItem(DECK_STORAGE_KEY)
    .then(receiveDecks)
}

function receiveDecks (results) {
  console.log('receiving: ', results)
  return results === null
    ? setInitialData()
    : JSON.parse(results)
}

function setInitialData () {

  let initialData = getDecks()

  AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(initialData))

  return JSON.parse(initialData)
}

export function submitDeck ({ deck, key }) {
  console.log('api called to SUBMIT A DECK: ', deck, '  and key: ', key)
  return AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify({
    [key]: deck
  }))
}

export function updateDeck ({ deck, key }) {
  console.log('update deck called')
  console.log('deck: ', deck)
  console.log('deck: ', key)

  // AsyncStorage.getItem(DECK_STORAGE_KEY)
  //   .then((results) => {
  //     const data = JSON.parse(results)

  //     console.log('resulting data: ', data)
  //     // AsyncStorage.setItem(CALENDAR_STORAGE_KEY, JSON.stringify(data))
  //   })

  return AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify({
    [key]: deck
  }))
}

export function submitQuestion ({ deck, key }) {
  console.log('api called to SUBMIT A QUESTION:')
  // return AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify({
  //   [key]: deck
  // }))
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