import React, { Component } from 'react'
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import Share from 'react-native-share'
import config from '../config'

class PostInteractionNav extends Component {
  constructor() {
    super()
    this.state = {
      likeCount: 0,
      commentCount: 0,
    }
  }

  // Component State Management
  componentWillMount() {}
  componentDidMount() {
    this.setState({
      likeCount: this.props.likeCount,
      commentCount: this.props.commentCount,
    })
  }

  // Methods
  likePost = () => {
    alert('cuore')
  }

  commentPost = () => {
    alert('commenta')
  }

  sharePost = () => {
    const shareOptions = {
      title: 'Share via',
      message: 'Test',
      url: 'http://google.com'
    }

    Share.open(shareOptions)
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        err && console.log(err)
      })
  }
  // Render
  render() {
    // Dynamic styles
    const compStyles = StyleSheet.create({})

    // Component
    return (
      <View style={styles.shareNav}>
        <TouchableOpacity
          style={styles.btnImage}
          onPress={this.likePost}
        >
          <Image
            source={config.icons.heart}
            style={styles.btnIcon}
            resizeMode="contain"
          />
          <Text style={styles.counter}>{this.state.likeCount}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btnImage}
          onPress={this.commentPost}
        >
          <Image
            source={config.icons.comment}
            style={styles.btnIcon}
            resizeMode="contain"
          />
          <Text style={styles.counter}>{this.state.commentCount}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btnImage}
          onPress={this.sharePost}
        >
          <Image
            source={config.icons.share}
            style={styles.btnIcon}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  shareNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignSelf: 'stretch',
    marginVertical: 20,
  },

  btnImage: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 32,
  },

  btnIcon: {
    width: 32,
    height: 32,
    tintColor: config.colors.black,
  },

  counter: {
    paddingLeft: 20,
    fontSize: 20,
  },
})

export default PostInteractionNav;
