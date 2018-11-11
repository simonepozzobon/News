import React, { Component } from 'react'
import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import Video from 'react-native-video'
import { withNavigation } from 'react-navigation'
import { MainTemplate, PostInteractionNav } from '../presentation'
import { CommentsList } from '../container'
import config from '../config'

import { Comments } from '../dummies'

class SinglePost extends Component {
  constructor() {
    super()
    this.state = {
      isLoading: true,
      post: {},
      likeCount: 0,
      commentCount: 0,
      screenWidth: Dimensions.get('window').width,
      fakeComments: Comments
    }
  }

  // Component State Management
  componentWillMount() {}

  componentDidMount() {
    // return fetch('http://shortology.it/api/app/single-post/'+this.props.navigation.state.params.slug)
    return fetch('http://shortology.it/api/app/single-post/ghost')
      .then(response => response.json())
      .then(responseJson => {
        console.log(responseJson)
        this.setState({
          isLoading: false,
          post: responseJson,
          likeCount: responseJson.likes ? responseJson.likes : 0,
          commentCount: responseJson.comments ? responseJson.comments.length : 0
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

    // if (this.state.post.isvideo) {
    //   return (
    //     <MainTemplate
    //       color={2}
    //       title=""
    //     >
    //       <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    //         <Text>Video</Text>
    //       </View>
    //     </MainTemplate>
    //   )
    // }

    return (
      <MainTemplate
        color={2}
        title="It's Monday"
      >
        <View style={[styles.imgContainer, styles.shadows]}>
          <Image
            source={{ uri: this.state.post.full_img }}
            style={compStyles.postImage}
            resizeMode="contain"
          />
        </View>

        <PostInteractionNav likeCount={this.state.likeCount} commentCount={this.state.commentCount}/>
        <CommentsList comments={this.state.fakeComments}/>

        <View style={styles.commentList}>
        </View>
      </MainTemplate>
    );
  }
}

const styles = StyleSheet.create({
  imgContainer: {
    alignItems: 'center',
    marginHorizontal: 4,
  },

  commentList: {
    alignSelf: 'stretch',
    marginHorizontal: 4,
  },

  shadows: {
    shadowColor: config.colors.black,
    shadowOffset: {width: 2, height: 4},
    shadowOpacity: 0.05,
    shadowRadius: 4,
  }
})

export default withNavigation(SinglePost);
