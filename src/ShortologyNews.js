import React, { Component } from 'react'
import {
  StyleSheet,
} from 'react-native'
import { SwitchNavigator, TabNavigator } from 'react-navigation'
import { HitParade, Home, ItsFriday, ItsMonday } from './screens'

const MainStack = SwitchNavigator({
  hitParade: HitParade,
  home: Home,
  itsFriday: ItsFriday,
  itsMonday: ItsMonday
})

class ShortologyNews extends Component {
  render() {
    return <MainStack/>
  }
}

export default ShortologyNews;
