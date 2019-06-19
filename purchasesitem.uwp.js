import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {
  ProgressBar,
} from 'react-native-windows';

export default class PurchasesItem extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <View style={{flex: 1, flexDirection: 'row', height: 50, alignItems: 'center'}}>
        <Text style={styles.captionText}>{this.props.date}</Text>
        <Text style={{marginRight: '10%', marginLeft: 20}}>{this.props.category}</Text>
        <Text>{this.props.seller}</Text>
        <Text style={{marginRight: 20, marginLeft: 20}}>{this.props.card}</Text>

        <View style={styles.priceContainer}>
          <Text style={{marginLeft: 10}}>{this.props.status}</Text>
          <Text>${this.props.expense}</Text>
        </View>

      </View>
    );
  }
}

module.exports = PurchasesItem;

const styles = StyleSheet.create({
  captionText: {
    fontSize: 12,
    textAlign: 'left',
    marginRight: 10,
    color: 'gray',
  },
  priceContainer: {
    flex: 1,
    alignItems: 'flex-end',
    flexDirection: 'row-reverse',
    margin: 15,
  },
});
