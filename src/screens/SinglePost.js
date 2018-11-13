import React, { Component } from 'react'
import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'

import {
  CommentArea,
  MainTemplate,
  PostContent,
  PostInteractionNav
} from '../presentation'

import { withNavigation } from 'react-navigation'
import { CommentsList } from '../container'
import config from '../config'

class SinglePost extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      post: {},
      comments: [],
      likeCount: 0,
      commentCount: 0,
      screenWidth: Dimensions.get('window').width,
    }
  }

  // Component State Management
  componentWillMount() {}

  componentDidMount() {
    // return fetch('http://shortology.it/api/app/single-post/'+this.props.navigation.state.params.slug)
    return fetch(config.api.path + '/app/single-post/' + this.props.navigation.state.params.slug)
      .then(response => response.json())
      .then(responseJson => {
        console.log(responseJson)
        let commentCount = responseJson.comments ? responseJson.comments.length : 0

        this.setState({
          isLoading: false,
          post: responseJson,
          comments: responseJson.comments,
          likeCount: responseJson.likes ? responseJson.likes.count : 0,
          commentCount: commentCount
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  // Methods
  focusComment = (id = null) => {
    if (id) {
      this.CommentArea.focus(id)
    } else {
      this.CommentArea.focus()
    }
  }

  updateComments = (newComment) => {
    this.setState({
      commentCount: this.state.commentCount + 1,
      comments: [...this.state.comments, newComment]
    })
  }

  // Render
  render() {
    // Dynamic styles

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

    return (
      <MainTemplate
        color={2}
        title="It's Monday"
      >
        <PostContent
          post={this.state.post}
        />
        <PostInteractionNav
          id={this.state.post.id}
          title={this.state.post.title}
          slug={this.state.post.slug.slug}
          likeCount={this.state.likeCount}
          commentCount={this.state.commentCount}
          focusComment={this.focusComment}
        />
        <CommentsList
          comments={this.state.comments}
          focusComment={this.focusComment}
        />
        <CommentArea
          id={this.state.post.id}
          updateComments={this.updateComments}
          ref={x => this.CommentArea = x}
        />

      </MainTemplate>
    );
  }
}

const styles = StyleSheet.create({})

export default withNavigation(SinglePost);
