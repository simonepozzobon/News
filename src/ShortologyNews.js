import React, { Component } from 'react'
import {
  StyleSheet,
} from 'react-native'
import { SwitchNavigator, TabNavigator } from 'react-navigation'
import { Home, PostList } from './screens'

const MainStack = SwitchNavigator({
  home: Home,
})

class ShortologyNews extends Component {
  render() {
    return <MainStack/>
  }
}

export default ShortologyNews;
