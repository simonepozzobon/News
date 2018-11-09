import React, { Component } from 'react'
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import { withNavigation } from 'react-navigation'
import { MainTemplate } from '../presentation'
import config from '../config/index'

class Login extends Component {
  constructor() {
    super()
    this.state = {
      screenWidth: 0,
    }
  }

  // Component State Management
  componentDidMount() {
    this.setState({screenWidth: Dimensions.get('window').width})
  }

  // Methods
  getMail() {

  }

  // Render
  render() {
    const lg = Math.floor(this.state.screenWidth / 1.5)
    const md = Math.floor(this.state.screenWidth / 2)

    // Dynamic styles
    const compStyles = StyleSheet.create({
      image: {
        width: md,
        height: md,
        marginBottom: 20,
      },

      formInput: {
        width: lg,
        height: lg,
      }
    })

    // Component
    return (
      <MainTemplate>
        <View style={styles.content}>
          <Image source={config.images.loginAuth} style={compStyles.image}></Image>
          <View style={styles.formInput}>
            <Text style={styles.inputLabel}>E-Mail</Text>
            <TextInput style={[compStyles.formInput, styles.input]} onChangeText={() => {}} autoFocus={true}></TextInput>
          </View>
          <View style={styles.formInput}>
            <Text style={styles.inputLabel}>Password</Text>
            <TextInput secureTextEntry style={[compStyles.formInput, styles.input]} onChangeText={() => {}} autoFocus={true}></TextInput>
          </View>
          <TouchableOpacity style={styles.btnPrimary}>
            <Text style={styles.btnPrimaryText}>Login</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.footer}>
          <Text>Not registered yet?</Text>
          <TouchableOpacity style={styles.btnGray}>
            <Text style={styles.btnGrayText}>Register</Text>
          </TouchableOpacity>
        </View>
      </MainTemplate>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    flex: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    width: 100+'%',
    marginBottom: 25,
  },

  // Images


  // Forms
  formInput: {
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    height: 44,
    borderRadius: 12,
    borderColor: 'black',
    borderWidth: 2,
    paddingHorizontal: 10,
  },

  // Button
  btnPrimary: {
    marginTop: 20,
    paddingHorizontal: 24,
    justifyContent: 'center',
    alignItems: 'center',
    height: 44,
    borderRadius: 22,
    borderWidth: 2,
    borderColor: '#F07879',
  },

  btnPrimaryText: {
    color: '#F07879',
  },

  btnGray: {
    marginTop: 20,
    paddingHorizontal: 24,
    justifyContent: 'center',
    alignItems: 'center',
    height: 44,
    borderRadius: 22,
    borderWidth: 2,
    borderColor: '#7F7F7F',
  },

  btnGrayText: {
    color: '#7F7F7F',
  }
})

export default withNavigation(Login);
