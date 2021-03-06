import React from 'react'
import { View, StatusBar } from 'react-native'
import { Constants } from 'expo'

export default class UdaciStatusBar extends React.Component {
  render() {
    let { backgroundColor, barStyle } = this.props

    return (
      <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
        <StatusBar translucent backgroundColor={backgroundColor} {...this.props}  />
      </View>
    )
  }
}