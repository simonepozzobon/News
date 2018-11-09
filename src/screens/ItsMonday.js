import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
} from 'react-native'
import { MainTemplate } from '../presentation'

class ItsMonday extends Component {
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
      <MainTemplate>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{fontSize: 20}}>It's Monday</Text>
        </View>
      </MainTemplate>
    );
  }
}

const styles = StyleSheet.create({})

export default ItsMonday;
