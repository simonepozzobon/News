import React, { Component } from 'react'
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'

class PostItem extends Component {
  constructor() {
    super()
    this.state = {}
  }

  // Component State Management
  componentDidMount() {
    // this.setState()
  }

  // Methods

  // Render
  render() {
    // Dynamic styles
    const compStyles = StyleSheet.create({})

    // Component
    return (
      <TouchableOpacity style={styles.postSingle}>
        <Image
          source={{uri: this.props.post.img}}
          style={{ flex: 1, alignSelf: 'stretch' }}
          resizeMode="cover"
        />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  postSingle: {
    minWidth: 50,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    margin: 4,
    width: Dimensions.get('window').width / 3,
    height: Dimensions.get('window').width / 3,
  }
})

export default PostItem;
