import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class CountDown extends React.Component {
  constructor( props ) {
    super( props )
    this.date = '2017-05-06';
    this.state = {
      date: '',
      days: '',
      hours: '',
      minutes: '',
      seconds: ''
    };
  }

  componentWillMount() {
    var time = this.timeRemaining( this.date );
    this.setState({
      days: time.days,
      hours: time.hours,
      minutes: time.minutes,
      seconds: time.seconds
    });
  }

  componentDidMount() {
    this.initClock( this.date );
  }

  timeRemaining( date ) {
    var t = Date.parse( date ) - Date.parse( new Date() );
    var seconds = Math.floor( ( t/1000 ) % 60 );
    var minutes = Math.floor( ( t/1000/60 ) % 60 );
    var hours = Math.floor( ( t/( 1000*60*60 ) ) % 24 );
    var days = Math.floor( t/( 1000*60*60*24 ) );
    return {
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }

  initClock( date ) {
    var timeinterval = setInterval(function(){
      var time = this.timeRemaining( date );

      this.setState({
        days: time.days,
        hours: time.hours,
        minutes: time.minutes,
        seconds: time.seconds
      });

      if(time.total<=0){
        clearInterval(timeinterval);
      }
    }.bind( this ),1000);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={ styles.dateContainer }>
          <View style={ styles.textBlock }>
            <Text style={ styles.titleItem }>Days</Text>
            <Text style={ styles.textItem }>{ this.state.days }</Text>
          </View>
          <View style={ styles.textBlock }>
            <Text style={ styles.titleItem }>Minutes</Text>
            <Text style={ styles.textItem }>{ this.state.minutes }</Text>
          </View>
        </View>
        <View style={ styles.dateContainer }>
          <View style={ styles.textBlock }>
            <Text style={ styles.titleItem }>Hours</Text>
            <Text style={ styles.textItem }>{ this.state.hours }</Text>
          </View>
          <View style={ styles.textBlock }>
            <Text style={ styles.titleItem }>Seconds</Text>
            <Text style={ styles.textItem }>{ this.state.seconds }</Text>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end'
  },
  dateContainer: {
    padding: 0,
    margin: 0,
    flex: 1,
    backgroundColor: 'rgba(245,139,130,0.7)',
    height: '80%'
  },
  textBlock: {
    margin: 0,
    padding: 0,
    flex: 1,
    flexDirection: 'column'
  },
  textItem: {
    marginTop: -20,
    padding: 0,
    textAlign: 'center',
    fontSize: 100,
    color: '#ffffff'
  },
  titleItem: {
    marginTop: 10,
    padding: 0,
    textAlign: 'center',
    fontSize: 22,
    color: "#ffffff",
    fontWeight: 'bold'
  }
});
