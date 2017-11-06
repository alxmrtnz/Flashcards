# Flashcards (aka Udacity's Flascard Project)

This is the project for the final assessment project of Udacity's React-Native course. It is an app where users can create decks of flashcards, add cards to the decks, and quiz themselves on each deck.

## Quick Start Guide
- `yarn install`
- `yarn start` 
(you can then select if you want to use a simulator locally or on your Expo app via phone


## Editing Predefined Data

To modify the initial data for use with the app (should your AsyncStorage not yet have any data stored in it), you can modify `decks.js` found at `/utils/decks.js`.

This file defines the initial data that is stored in AsyncStorage.


## Clearing Simulator Cache
If you are using the ios simulator and want to reload this data, you can clear the simulator's cache using the command:

`xcrun simctl erase all`

I'd recommend closing the simulator app and stopping the app from running before clearing the cache, then just restart everything after you run the above command.


## Dependencies
Dependencies can be found in `package.json`


## Contributions/Attributions
`api.js` is based off of the file the api file from (Reactnd Udacifitness Complete)[https://github.com/udacity/reactnd-UdaciFitness-complete
]

