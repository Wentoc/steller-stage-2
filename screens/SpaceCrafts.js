import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground, SafeAreaView, Platform, StatusBar, FlatList, Alert, Dimensions } from 'react-native';
import axios from 'axios';

const apiURL = 'https://ll.thespacedevs.com/2.0.0/config/spacecraft/';

export default class SpaceCrafts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      aircrafts: []
    };
  }

  componentDidMount() {
    this.getData()
  }

  getData = () => {
    axios.
          get(apiURL)
          .then(response => {
             this.setState({
               aircrafts: response.data.results
             })
          })
          .catch(error => {
             console.log(error.message)
          })
  }

  keyExtractor = (item, index) => index.toString()

  renderItem = ({ item }) => {
    return(
      <View style={styles.cards}>
         <Image
           source={{uri: item.agency.image_url}}
           style={{
            width: Dimensions.get("window").width,
            height: 200,
             marginTop: 15,
             marginBottom: 15,
             marginRight: 10
           }}
         />

         <Text style={{ fontWeight: 'bold', fontSize: 20 }}>{item.name}</Text>
         <Text style={{ color: "#696969" }}>{item.agency.name}</Text>
         <Text style={{ color: "#A9A9A9", marginLeft: 10, marginRight: 10 }}>{item.agency.description}</Text>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea}/>
        <ImageBackground style={styles.bgImage}>
           <FlatList
             horizontal={true}
             keyExtractor={this.keyExtractor}
             data={this.state.aircrafts}
             renderItem={this.renderItem}
           />
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  droidSafeArea: {
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  },
  bgImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  cards: {
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    elevation: 10,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height
  }
})