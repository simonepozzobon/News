import React, { Component } from 'react'
import {
  ActivityIndicator,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import Video from 'react-native-video'
import { withNavigation } from 'react-navigation'
import { MainTemplate } from '../presentation'
import config from '../config'

class SinglePost extends Component {
  constructor() {
    super()
    this.state = {
      isLoading: true,
      post: {},
      screenWidth: Dimensions.get('window').width,
    }
  }

  // Component State Management
  componentWillMount() {}

  componentDidMount() {
    return fetch('http://shortology.it/api/app/single-post/'+this.props.navigation.state.params.slug)
      .then(response => response.json())
      .then(responseJson => {
        console.log(responseJson)
        this.setState({
          isLoading: false,
          post: responseJson
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  // Methods

  // Render
  render() {
    // Dynamic styles
    const imgSize = Math.floor(this.state.screenWidth * 0.96)
    const compStyles = StyleSheet.create({
      postImage: {
        width: imgSize,
        height: imgSize,
      }
    })

    // Caricamento
    if (this.state.isLoading) {
      return (
        <MainTemplate
          color={2}
          title="It's Monday"
        >
          <View style={{flex: 8, justifyContent: 'center', alignItems: 'center'}}>
            <ActivityIndicator
              size="large"
              color={config.colors.primary}
            />
          </View>
          <View style={{flex: 2}}></View>
        </MainTemplate>
      )
    }

    if (this.state.post.isvideo) {
      return (
        <MainTemplate
          color={2}
          title=""
        >
          <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Video</Text>
          </View>
        </MainTemplate>
      )
    }

    return (
      <MainTemplate
        color={2}
        title="It's Monday"
      >
        <View style={styles.imgContainer}>
          <Image
            source={{ uri: this.state.post.img }}
            style={compStyles.postImage}
            resizeMode="contain"
          />
        </View>
      </MainTemplate>
    );
  }
}

const styles = StyleSheet.create({
  imgContainer: {
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 4,
  }
})

export default withNavigation(SinglePost);
