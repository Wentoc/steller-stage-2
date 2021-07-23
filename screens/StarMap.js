import React, { Component } from 'react';
import { View, Text, ImageBackground, Image, TouchableOpacity, TextInput, StyleSheet, SafeAreaView, Platform, StatusBar } from 'react-native';
import { WebView } from "react-native-webview";

// const path = `https://virtualsky.lco.global/embed/index.html?longitude={this.state.latitude}&latitude={this.state.longitude}&constellations
//              =true&constellationlabels=true&showstarlabels=true&gridlines_az=true&live=true`;
export default class StarMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: '',
      longitude: ''
    };
  }

 componentDidMount() {
  //  this.getData()
 }

//  getData=async()=>{
//    const { latitude, longitude } = this.state;
//    const path = `https://virtualsky.lco.global/embed/index.html?longitude=${latitude}&latitude=${longitude}&constellations=true&constellationlabels=true&showstarlabels=true&gridlines_az=true&live=true`
//    return(
//       <View styles={styles.mapContainer}>
//         <WebView
//           scalesPageToFit={true}
//           source={{uri: path}}
//           style={{ marginTop: 20, marginBottom: 20 }}
//         />
//       </View>
//    )
//  }

  render() {
    return (
      <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
        <SafeAreaView style={styles.androidsav}/>
        <ImageBackground source={require('../assets/space.gif')} style={{flex: 1, resizeMode: "cover", width: '100%', height: '50%'}}>
          <Image source={require('../assets/star_map.png')} style={{width: 70, height: 70, justifyContent: 'center', alignItems: 'center', marginLeft: 140, marginTop: 50}}/>
          <Text style={{textAlign: 'center',position: 'absolute', top: 150, left: 120, fontWeight: 'bold', fontSize: 30, color: "#ffffff"}}>
            StarMap 
          </Text>
          <View style={styles.inputBoxes}>
            <TextInput
              placeholder="  Enter your latitude"
              style={styles.inputBox1}
              onChangeText={(text)=>{
                this.setState({
                  latitude: text
                })
              }}
            />
            <TextInput
              placeholder="  Enter your longitude"
              style={styles.inputBox2}
              onChangeText={(text)=>{
                this.setState({
                  longitude: text
                })
              }}
            />
          </View>
          <WebView
            scalesPageToFit={true}
            source={{uri: 'https://virtualsky.lco.global/embed/index.html?longitude=77.102493&latitude=28.704060&constellations=true&constellationlabels=true&showstarlabels=true&gridlines_az=true&live=true'}}
            style={{ marginTop: 20, marginBottom: 60 }}
          />
         {/* <TouchableOpacity style={{
           width: 150,
           height: 50,
           backgroundColor: "#90ceeb",
           justifyContent: 'center',
           alignItems: 'center',
           marginLeft: 100,
           borderRadius: 5
         }} onPress={()=>this.getData()}>
           <Text style={{fontSize: 20, color: "#ffffff", fontWeight: "bold", textAlign: 'center', marginTop: 0}}>Search</Text>
         </TouchableOpacity> */}
        </ImageBackground>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  androidsav: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
  inputBoxes: {
    flex: 1,
    marginTop: 50
  },
  inputBox1: {
    width: "80%",
    height: 50,
    borderWidth: 1,
    borderColor: "#fff",
    position: 'absolute',
    top: 100,
    left: 35,
    backgroundColor: "#fff",
    marginTop: 60,
    borderRadius: 5,
    borderColor: "#000000"
  },
  inputBox2: {
    width: "80%",
    height: 50,
    borderWidth: 1,
    borderColor: "#fff",
    position: 'absolute',
    top: 100,
    left: 35,
    backgroundColor: "#fff",
    borderRadius: 5,
    borderColor: "#000000"
  },
  mapContainer: {
    flex: 1,
  }
})