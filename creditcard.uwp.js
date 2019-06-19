import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {
  ProgressBar,
} from 'react-native-windows';

export default class CreditCard extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <View style={{flex: 1}}>

        <View style={{backgroundColor: '#0078d7', width: 300, height: 180, borderRadius: 5, alignItems: 'flex-start', justifyContent: 'center'}}>
          <Text style={styles.cardNumberText}>{this.props.cardNumber}</Text>

          <View style={{flexDirection: 'row', alignItems: 'flex-start'}}>
            <Text style={{fontSize: 13, color: 'white', marginLeft: 20, marginRight: 50,}}>{this.props.expireDate}</Text>
            <Text style={{fontSize: 13, color: 'white', marginLeft: 20}}>{this.props.cardOwnerName}</Text>
          </View>

        </View>

        <View style={{flex: 1, borderTopWidth: 1, borderColor: 'gray', margin: 10}}>

          <View style={{flexDirection: 'row', marginTop: 5, alignItems: 'stretch', justifyContent: 'center',}}>
            <Text style={{color: 'gray'}}>Card Number:</Text>
            <View style={styles.cardInfoTextContainer}>
              <Text style={{marginRight: 8, fontWeight: 'bold'}}>{this.props.cardNumber}</Text>
            </View>
          </View>

          <View style={{flexDirection: 'row', marginTop: 5, alignItems: 'stretch', justifyContent: 'center',}}>
            <Text style={{color: 'gray'}}>Bank:</Text>
            <View style={styles.cardInfoTextContainer}>
              <Text style={{marginRight: 8, fontWeight: 'bold'}}>{this.props.bankName}</Text>
            </View>
          </View>

          <View style={{flexDirection: 'row', marginTop: 5, alignItems: 'stretch', justifyContent: 'center',}}>
            <Text style={{color: 'gray'}}>Status:</Text>
            <View style={styles.cardInfoTextContainer}>
              <Text style={{marginRight: 8, fontWeight: 'bold'}}>{this.props.cardStatus}</Text>
            </View>
          </View>

        </View>

      </View>
    );
  }
}

module.exports = CreditCard;

const styles = StyleSheet.create({
  cardInfoTextContainer: {
    flex: 1,
    marginBottom: -300,
    alignItems: 'flex-end',
  },
  cardNumberText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 20,
    marginTop: 20,
    marginBottom: 10,
  },
});
