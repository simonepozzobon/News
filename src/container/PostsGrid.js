import React, { Component } from 'react'
import {
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import { PostItem } from '../presentation'

const numColumns = 3

class PostsGrid extends Component {
  constructor() {
    super()
    this.state = {
      posts: []
    }
  }

  // Component State Management
  componentWillMount() {}
  componentDidMount() {
    this.setState({
      posts: this.props.posts
    })
  }

  // Methods
  _keyExtractor(item, index) {
    return item.id.toString()
  }

  _renderPost(data) {
    return <PostItem post={data.item}/>
  }

  // Render
  render() {
    // Dynamic styles
    const compStyles = StyleSheet.create({})

    // Component
    return (
        <FlatList
          data={this.state.posts}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderPost}
          numColumns={numColumns}
          style={{ flex: 1, alignSelf: 'stretch', marginHorizontal: 4}}
        />
    );
  }
}

const styles = StyleSheet.create({})

export default PostsGrid;
