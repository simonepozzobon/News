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
  home: {
    screen: Home,
  },

  // Post Lists
  itsFriday: {
    screen: ItsFriday,
  },
  itsMonday: {
    screen: ItsMonday,
  },
  hitParade: {
    screen: HitParade,
  },

  // Auth
  login: {
    screen: Login,
  },
  register: {
    screen: Register,
  },
}, {
  initialRouteName: 'home'
})

class ShortologyNews extends Component {
  render() {
    return <MainStack/>
  }
}

export default ShortologyNews;
