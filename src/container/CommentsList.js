import React, { Component } from 'react'
import {
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import { CommentSingle } from '../presentation'
import config from '../config'

class CommentsList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      comments: [],
    }
  }

  // Component State Management
  componentWillMount() {}
  componentDidMount() {
    this.setState({ comments: this.props.comments })
  }

  // Methods
  focusComment = (id) => {
    this.props.focusComment(id)
  }

  _keyExtractor = (item, index) => {
    return index.toString()
  }

  _renderComment = (data) => {
    return <CommentSingle comment={data.item} focusComment={ this.focusComment }/>
  }



  // Render
  render() {
    // Dynamic styles
    const compStyles = StyleSheet.create({})

    // Component
    return (
      <FlatList
        data={this.state.comments}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderComment}
        scrollEnabled={false}
        style={{ flex: 1, alignSelf: 'stretch', marginHorizontal: 8 }}
      />
    )
  }
}

const styles = StyleSheet.create({})

export default CommentsList;
