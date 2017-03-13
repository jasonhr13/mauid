import React, { Component } from 'react';
import {
  StyleSheet,
  Text
} from 'react-native';

export default class Title extends React.Component {
  render() {
    return (
      <Text style={ styles.title }>
        Swipe To See Registries
      </Text>
    )
  }
};

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontSize: 18,
    color: '#333',
    backgroundColor: 'transparent',
    top: 40
  }
});
