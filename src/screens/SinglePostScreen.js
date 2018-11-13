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
import Swiper from 'react-native-swiper'
import {
  MainTemplate,
  SinglePost,
} from '../presentation'
import config from '../config'

class SinglePostScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dummies: [
        { id: 1, content: 'Ciao' },
        { id: 2, content: 'Ciao 2' },
        { id: 2, content: 'Ciao 3' },
        { id: 2, content: 'Ciao 4' },
      ]
    }
  }

  // Component State Management
  componentWillMount() {}

  componentDidMount() {
  }

  // Methods
  keyExtractor = (item, index) => {
    return item.id.toString()
  }

  // Render
  render() {
    return (
      <MainTemplate
        color={2}
        title="It's Monday"
      >
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Swiper>
            {this.state.dummies.map((item, key) => {
              return (
                <SinglePost />
              )
            })}
          </Swiper>
        </View>
      </MainTemplate>

    )
  }
}

const styles = StyleSheet.create({
  defaultView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default SinglePostScreen;
