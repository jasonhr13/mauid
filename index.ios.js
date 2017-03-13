'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  Image,
  Text
} from 'react-native';
import Title from './components/title/index';
import CountDown from './components/countdown/index';
import Swipe from './components/swiper/index';
import codePush from "react-native-code-push";

export default class Wedding extends Component {
  render() {
    return (
      <Image source={ require( './images/app-background.jpg' ) } style={{ width: '100%', height: '100%', resizeMode: 'cover', flex: 1, flexDirection: 'column' }}>
        <Title />
        <Swipe />
        <CountDown />
      </Image>
    );
  }
}

AppRegistry.registerComponent( 'Wedding', () => codePush({
  installMode: codePush.InstallMode.IMMEDIATE,
  checkFrequency: codePush.CheckFrequency.ON_APP_RESUME
})( Wedding ) );
