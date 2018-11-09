import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { Header } from '../template'


class MainTemplate extends Component {
  constructor() {
    super()
    this.state = {}
  }

  // Component State Management
  componentDidMount() {
  }

  // Methods
  method() {}

  // Render
  render() {
    // Dynamic styles
    const compStyles = StyleSheet.create({})

    // Component
    return (
      <LinearGradient colors={['#D2ECFB', '#F9F2A8']} style={styles.background}>
        <View style={styles.container}>
          <Header style={styles.header}></Header>
          <View style={styles.content}>
            {this.props.children}
          </View>
        </View>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    flex: 12,
  },
  container: {
    flex: 12,
    alignItems: 'center',
  },
  content: {
    flex: 9,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default MainTemplate;
