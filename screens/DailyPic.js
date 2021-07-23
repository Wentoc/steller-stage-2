import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground, StatusBar, Platform, SafeAreaView, Alert, Linking } from 'react-native';
import axios from 'axios';

export default class DailyPic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apod: []
    };
  }

  componentDidMount() {
    // const apiURL = 'https://api.nasa.gov/planetary/apod?api_key=FKg3RZjBgbYAMUphugSvRlNcwz2QMz2QTWmDxucf';
    this.getAPOD()
  }

  getAPOD = () => {
    axios
         .get('https://api.nasa.gov/planetary/apod?api_key=FKg3RZjBgbYAMUphugSvRlNcwz2QMz2QTWmDxucf')
         .then(response => {
           this.setState({
             apod: response.data
           })
         })
         .catch(error => {
           Alert.alert(error.message)
         })
 }

  render() {

    if(Object.keys(this.state.apod).length === 0){
      return(
        <View style = {{flex:1,justifyContent:"center",alignItems:"center"}}>
            <Text>Loading...</Text>
        </View>
      );
    }else {
      return (
        <View style={{ flex: 1 }}>
          <SafeAreaView style={StyleSheet.androidsav}/>
          <ImageBackground
            source={require('../assets/stars.gif')}
            style={{
              width: "100%",
              height: "100%",
              resizeMode: "cover",
              marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
            }}
          >
          <View style={styles.header}>
            <Text style={{textAlign: 'center', marginTop: 22, color: "#000", fontSize: 30, fontWeight: "bold"}}> DailyPic </Text>
          </View>
  
          <Text style={{ textAlign: "center", color: '#fff', fontSize: 20, fontWeight: 'bold', marginTop: 100 }}>Astronomy picture of the day</Text> 
          <Text style={{ textAlign: "center", color: '#fff', fontSize: 20, fontWeight: 'bold', marginTop: 20 }}>{this.state.apod.title}</Text> 
  
          <TouchableOpacity style={styles.listContainer}
            onPress={() => Linking.openURL(this.state.apod.url).catch(error => console.error("Couldn't Load page", error))}
          >
            <View style={styles.iconContainer}>
               <Image
                  source={require('../assets/play-video.png')}
                  style={{
                    width: 80,
                    height: 80,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginLeft: 140,
                    marginTop: 30
                    // position: 'absolute',
                    // left: 140,
                  }}
               />
            </View>
          </TouchableOpacity>
  
          <Text style={styles.explanationText}>{this.state.apod.explanation}</Text>
  
          {/* marginTop: 400 */}
          </ImageBackground>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  androidsav: {
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  },
  header: {
    width: "100%",
    height: 80,
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: "lightgreen",
    position: 'absolute',
    top: -37
  },
  listContainer: {

  },
  iconContainer: {

  },
  explanationText: {
    color: "#fff"
  }
})