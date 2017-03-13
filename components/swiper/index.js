import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Linking,
  TouchableHighlight
} from 'react-native';
import Swiper from 'react-native-swiper';

export default class Swipe extends React.Component {
  render() {
    return (
      <View style={ styles.container }>
        <Swiper style={styles.wrapper}
            height={320}
            dot={<View style={{backgroundColor: 'rgba(245,139,130,0.3)', width: 13, height: 13, borderRadius: 7, marginLeft: 7, marginRight: 7}} />}
            activeDot={<View style={{backgroundColor: '#e07169', width: 13, height: 13, borderRadius: 7, marginLeft: 7, marginRight: 7}} />}
            paginationStyle={{
              bottom: 70
            }}
            loop={false}>
            <View style={styles.slide}>
              <TouchableHighlight onPress={ this.tg } underlayColor='transparent'>
                <Image source={require('../../images/tg.png')} style={ styles.imagetg } />
              </TouchableHighlight>
            </View>
            <View style={styles.slide}>
              <TouchableHighlight onPress={ this.pb } underlayColor='transparent'>
                <Image source={require('../../images/pb.png')} style={ styles.image } />
              </TouchableHighlight>
            </View>
            <View style={styles.slide}>
              <TouchableHighlight onPress={ this.ws } underlayColor='transparent'>
                <Image source={require('../../images/ws.png')} style={ styles.image } />
              </TouchableHighlight>
            </View>
          </Swiper>
      </View>
    )
  }

  tg() {
    Linking.openURL( 'https://www.target.com/gift-registry/giftgiver?registryId=b479498a0ee64c1bb96fd18e66bfed80' )
  }

  pb() {
    Linking.openURL( 'http://www.potterybarn.com/registry/3916713/registry-list.html' )
  }

  ws() {
    Linking.openURL( 'https://secure.williams-sonoma.com/registry/8p6dmbhpt2/registry-list.html' )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start'
  },
  wrapper: {
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent'
  },

  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB'
  },

  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5'
  },

  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9'
  },

  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center'
  },

  image: {
    flex: 1,
    marginTop: -20,
    width: '60%',
    resizeMode: 'contain'
  },

  imagetg: {
    flex: 1,
    marginTop: -30,
    width: '40%',
    resizeMode: 'contain'
  }
});
