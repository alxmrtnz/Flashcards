import React from 'react'
import { View, StyleSheet, AsyncStorage } from 'react-native'
import { FontAwesome, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons'
import { red, orange, blue, lightPurp, pink, white } from './colors'
import { Notifications, Permissions } from 'expo'

const NOTIFICATION_KEY = 'UdaciFitness:notifications'

export function getDailyReminderValue () {
  return {
    today: "👋 Don't forget to log your data today!"
  }
}