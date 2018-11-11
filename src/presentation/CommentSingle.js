import React, { Component } from 'react'
import {
  Image,
  Platform,
  Picker,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { NativeModules } from 'react-native'
import ActionSheet from 'react-native-actionsheet'
import SvgUri from 'react-native-svg-uri'
import config from '../config'
import moment from 'moment'

// Set locale based on platform
let locale = 'en_US'
if (Platform.OS === 'ios') {
  locale = NativeModules.SettingsManager.settings.AppleLocale // "fr_FR"
} else if (Platform.OS == 'android'){
  locale = NativeModules.I18nManager.localeIdentifier // "fr_FR"
}

class CommentSingle extends Component {
  constructor() {
    super()
    this.state = {}
  }

  // Component State Management
  componentWillMount() {}
  componentDidMount() {}

  // Methods
  _capitalizedName() {
    let string = this.props.comment.author.authorable.name
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  _humanizeDate() {
    moment.locale(locale)
    return moment(this.props.comment.created_at).fromNow()
  }

  showActionSheet = () => {
    this.ActionSheet.show()
  }

  actionSheetPress = (index) => {
    // index == 2 -> cancel
    if (index != 2) {
      alert(index)
    }
  }

  // Render
  render() {
    // Dynamic styles
    const compStyles = StyleSheet.create({})

    // Component

    // Comment
    return (
      <View style={[styles.commentSingle, styles.shadows]}>
        <View style={styles.avatar}>
          <SvgUri
            width="50"
            height="50"
            source={{ uri: this.props.comment.author.avatar.url }}
          />
        </View>
        <View style={styles.content}>
          <View style={styles.topInfo}>
            <View style={styles.rightInfo}>
              <Text style={styles.name}>{this._capitalizedName()}</Text>
              <Text style={styles.date}> - {this._humanizeDate()}</Text>
            </View>
            <TouchableOpacity
              onPress={this.showActionSheet}
            >
              <Image
                source={config.icons.horizontalDots}
                style={styles.icon}
              />
            </TouchableOpacity>
            <ActionSheet
              ref={o => this.ActionSheet = o}
              // title={'Which one do you like ?'}
              options={['Reply', 'Report', 'cancel']}
              cancelButtonIndex={2}
              destructiveButtonIndex={1}
              onPress={this.actionSheetPress}
            />
          </View>
          <View>
            <Text>{this.props.comment.comment}</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
    tintColor: config.colors.grayLight,
  },

  rightInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  date: {
    color: config.colors.grayLight,
    marginRight: 20,
  },

  name: {
    color: config.colors.primary,
  },

  topInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'stretch',
    marginBottom: 2,
  },

  content: {
    flexGrow: 1,
  },

  avatar: {
    paddingRight: 10,
  },

  commentSingle: {
    flex: 1,
    flexShrink: 1,
    flexDirection: 'row',
    alignSelf: 'stretch',
    borderRadius: 14,
    padding: 10,
    marginBottom: 20,
    backgroundColor: 'white',
  },

  shadows: {
    shadowColor: config.colors.black,
    shadowOffset: {width: 1, height: 2},
    shadowOpacity: 0.01,
    shadowRadius: 4,
  }
})

export default CommentSingle;
