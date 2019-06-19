import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {
  ProgressBar,
} from 'react-native-windows';

export default class SpentCatagory extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <View style={{marginBottom: -20, flexDirection: 'column'}}>
        <Text style={styles.captionText}>{this.props.productTitle}</Text>
        <Text style={styles.captionSubText}>{this.props.breakdown}</Text>
        <ProgressBar progress={this.props.productProgress}
        style={{width: 250, height: 8, marginTop: 0, marginBottom: 15, marginLeft: 5}}/>
      </View>
    );
  }
}

module.exports = SpentCatagory;

const styles = StyleSheet.create({
  captionText: {
    fontSize: 12,
    textAlign: 'left',
    marginTop: 15,
    marginBottom: 5,
    marginLeft: 5
  },
  captionSubText: {
    fontSize: 12,
    textAlign: 'left',
    color: 'gray',
    marginLeft: 5,
    marginBottom: 4
  },
});
