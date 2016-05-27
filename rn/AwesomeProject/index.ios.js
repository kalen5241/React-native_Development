/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
    Image,
    TouchableHighlight,
  View
} from 'react-native';

class AwesomeProject extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
        <Image style={styles.myStyle}
               source={{uri:'http://facebook.github.io/react/img/logo_og.png'}}
           />
        <View style= {styles.temp}>
          <Image style={styles.myStyle}
                 source={{uri:'http://facebook.github.io/react/img/logo_og.png'}}
              />
        </View>
        <View style= {styles.temp}>
          <TouchableHighlight onPress={() => console.log('pressed')}>
          <Image style={styles.myStyle}
                 source={{uri:'http://facebook.github.io/react/img/logo_og.png'}}
              />
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  temp:{
    flex:2,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#2fc990',

  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#2fc990',
    marginBottom: 5,
  },
  myStyle: {
    height:100,
    width:100,
    backgroundColor:'#2fc990',
  }
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
