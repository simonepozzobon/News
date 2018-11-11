import React, { Component } from 'react'
import {
  ScrollView,
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
          <View style={styles.header}>
            <Header
              title={this.props.title}
            />
          </View>
          <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.content}>
              {this.props.children}
            </View>
          </ScrollView>
        </LinearGradient>
      );
    }

    return (
      <LinearGradient colors={[config.colors.blue, config.colors.yellow]} style={styles.background}>
        <View style={styles.header}>
          <Header
            title={this.props.title}
          />
        </View>
        <ScrollView contentContainerStyle={styles.container}>
          <View style={styles.content}>
            {this.props.children}
          </View>
        </ScrollView>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    flex: 12,
  },
  content: {
    paddingTop: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },

  header: {
    shadowColor: config.colors.black,
    shadowOffset: {width: 1, height: 4},
    shadowOpacity: 0.01,
    shadowRadius: 1,
    zIndex: 2,
  }
})

export default MainTemplate;
