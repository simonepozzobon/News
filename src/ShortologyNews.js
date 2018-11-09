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
  Login,
  Register,
} from './screens'

// Navigation - Router
const MainStack = createSwitchNavigator({
  itsMonday: ItsMonday,
  home: Home,

  // Post
  itsFriday: ItsFriday,
  hitParade: HitParade,

  // Auth
  login: Login,
  register: Register,
})

class ShortologyNews extends Component {
  render() {
    return <MainStack/>
  }
}

export default ShortologyNews;
