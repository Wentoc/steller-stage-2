import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class DailyPic extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Text style={{textAlign: 'center', marginTop: 400}}> DailyPic </Text>
      </View>
    );
  }
}
