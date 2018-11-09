import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { Header } from '../template'
import config from '../config'


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
    if (this.props.color == 2) {
      return (
        <LinearGradient colors={[config.colors.purple, config.colors.pink]} style={styles.background}>
          <View style={styles.container}>
            <Header
              title={this.props.title}
              style={styles.header}
            />
            <View style={styles.content}>
              {this.props.children}
            </View>
          </View>
        </LinearGradient>
      );
    }

    return (
      <LinearGradient colors={[config.colors.blue, config.colors.yellow]} style={styles.background}>
        <View style={styles.container}>
          <Header
            title={this.props.title}
            style={styles.header}
          />
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
    width: 100+'%',
  },
  content: {
    flex: 9,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default MainTemplate;
