/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import ShortologyNews from './src/ShortologyNews';

export default class App extends Component {
  componentDidMount() {
  }

  render() {
    return (
        <ShortologyNews />
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
