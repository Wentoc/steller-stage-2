import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class SpaceCrafts extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Text style={{textAlign: 'center', marginTop: 400}}> SpaceCrafts </Text>
      </View>
    );
  }
}
