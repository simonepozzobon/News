/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react'
import { StatusBar, StyleSheet, View } from 'react-native'
import ShortologyNews from './src/ShortologyNews'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

const initialState = {
  // object
}

const reducer = (state = initialState) => {
  return state
}

const store = createStore(reducer)

export default class App extends Component {
  componentDidMount() {
  }

  render() {
    return (
        <Provider store={store}>
          <ShortologyNews />
        </Provider>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
