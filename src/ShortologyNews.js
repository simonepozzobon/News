import React, { Component } from 'react'
import {
  StyleSheet,
} from 'react-native'

import { createSwitchNavigator } from 'react-navigation'

// Screens
import {
  HitParade,
  Home,
  ItsFriday,
  ItsMonday,
  Login
} from './screens'

// Navigation - Router
const MainStack = createSwitchNavigator({
  login: Login,
  home: Home,

  // Post
  itsMonday: ItsMonday,
  itsFriday: ItsFriday,
  hitParade: HitParade,

  // Auth
})

class ShortologyNews extends Component {
  render() {
    return <MainStack/>
  }
}

export default ShortologyNews;
