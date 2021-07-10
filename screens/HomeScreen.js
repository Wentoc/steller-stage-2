import { CurrentRenderContext } from '@react-navigation/native';
import * as React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground, SafeAreaView, Platform, StatusBar } from 'react-native';

export default class HomeScreen extends React.Component {
    render(){
        return(
          <View style={{ flex: 1, backgroundColor: '#000000' }}>
                <SafeAreaView style={styles.androidsav}/>
                <ImageBackground 
                   source={require('../assets/space.gif')}
                   style={styles.bgImage}
                >
                <Image source={require('../assets/main-icon.png')} style={styles.headerImg}/>
                <Text style={styles.headerTxt}>Steller App</Text>

                <View style={styles.btnContainer}>
                    <TouchableOpacity style={styles.btn1} onPress={()=>this.props.navigation.navigate('SpaceCrafts')}>
                       <Text style={{fontWeight: 'bold', fontSize: 30, marginLeft: 5, marginTop: 55, color: '#ffffff'}}>
                           Space Crafts
                       </Text>
                       <Image style={{resizeMode: 'contain', width: 100, height: 100, position: 'absolute'}} source={{uri: '../assets/space_crafts.png'}}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn2} onPress={()=>this.props.navigation.navigate('StarMap')}>
                       <Text style={{fontWeight: 'bold', fontSize: 30, marginLeft: 5, marginTop: 55, color: '#ffffff'}}>
                           Star Maps
                       </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn3} onPress={()=>this.props.navigation.navigate('DailyPic')}>
                       <Text style={{fontWeight: 'bold', fontSize: 30, marginLeft: 5, marginTop: 55, color: '#ffffff'}}>
                           Daily Pictures
                       </Text>
                    </TouchableOpacity>
                </View>
                </ImageBackground>
          </View>
        );
    }
}

const styles = StyleSheet.create({
  bgImage: {
    flex: 1,
    resizeMode: 'cover',
    width: "100%",
    height: "100%"
  },
  headerImg: {
    width: 200,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 72
  },
  headerTxt: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: -8,
    color: "#ffffff"
  },
  androidsav: {
     marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  },
  btnContainer: {
      flexDirection: 'column'
  },
  btn1: {
    width: 270,
    height: 150,
    backgroundColor: '#FF5252',
    marginTop: 20,
    marginLeft: 45,
    borderRadius: 5
  },
  btn2: {
    width: 270,
    height: 150,
    backgroundColor: 'skyblue',
    marginTop: 20,
    marginLeft: 45,
    borderRadius: 5
  },
  btn3: {
    width: 270,
    height: 150,
    backgroundColor: 'lightgreen',
    marginTop: 20,
    marginLeft: 45,
    borderRadius: 5
  }
});