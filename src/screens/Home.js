import React, { Component } from 'react'
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import config from '../config/index'
import {
  MainTemplate,
} from '../presentation'

class Home extends Component {
  constructor() {
    super()
    this.state = {
      screenWidth: 0
    }
  }

  // Component State Management
  componentDidMount() {
    this.setState({screenWidth: Dimensions.get('window').width})
  }

  // Methods
  goTo(page) {
    console.log('change page', page)
  }

  // Render
  render() {
    // Dynamic styles
    const compStyles = StyleSheet.create({
      menuItem: {
        width: Math.floor(this.state.screenWidth / 2),
        height: Math.floor(this.state.screenWidth / 2),
        margin: 20,
      },

      smallMenuItem: {
        width: Math.floor(this.state.screenWidth / 4),
        height: Math.floor(this.state.screenWidth / 4),
      }
    })

    const itemOpacity = 0.7

    // Component
    return (
      <LinearGradient colors={['#D2ECFB', '#F9F2A8']} style={styles.background}>
        <View style={styles.container}>
          <View style={styles.content}>
            <TouchableOpacity activeOpacity={itemOpacity} onPress={() => {this.goTo('its-monday')}}>
              <Image source={config.images.itsMonday} style={compStyles.menuItem}></Image>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={itemOpacity} onPress={() => {this.goTo('its-friday')}}>
              <Image source={config.images.itsFriday} style={compStyles.menuItem}></Image>
            </TouchableOpacity>
          </View>
          <View style={styles.footer}>
            <TouchableOpacity activeOpacity={itemOpacity} onPress={() => {this.goTo('hit-parade')}}>
              <Image source={config.images.hitParade} style={compStyles.smallMenuItem}></Image>
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  // Main Styles
  background: {
    flex: 12,
  },
  container: {
    flex: 12,
    alignItems: 'center',
  },

  // Header
  header: {
    flex: 1,
  },

  // Content
  content: {
    flex: 9,
    justifyContent: 'center',
    alignItems: 'center',
  },

  // Footer
  footer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    width: 100+'%',
    marginBottom: 25,
  },

})

export default Home;
