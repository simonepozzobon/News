import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native'

class CommentArea extends Component {
    constructor(props) {
      super(props)
      this.state = {
        replyTo: null,
      }
    }

    focus(id = null) {
      this.input.focus()
      this.state.replyTo = id ? id : null
      console.log(id)
    }

    render() {
      return (
        <View
          style={{
            flex: 1,
            flexShrink: 1,
            flexDirection: 'row',
            alignSelf: 'stretch',
            borderRadius: 14,
            padding: 10,
            marginHorizontal: 8,
            marginBottom: 20,
            backgroundColor: 'white',
          }}
        >
          <TextInput
            ref={ref => this.input = ref}
            placeholder="Write your comment.."
            multiline={true}
            maxLength={510}
            style={{ minHeight: 44 }}
            returnKeyType="send"
            onFocus={() => {}}
          />
        </View>
      )
    }
}

export default CommentArea;
