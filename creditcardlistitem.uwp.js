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
      <View style={{flex: 1, height: '100%', marginBottom: 20}}>

        <View style={{backgroundColor: '#0078d7', width: 300, height: 180, borderRadius: 5, alignItems: 'flex-start', justifyContent: 'center'}}>
          <Text style={styles.cardNumberText}>{this.props.cardItem[this.props.cardItemIndex][0]}</Text>

          <View style={{flexDirection: 'row', alignItems: 'flex-start'}}>
            <Text style={{fontSize: 13, color: 'white', marginLeft: 20, marginRight: 50,}}>{this.props.cardItem[this.props.cardItemIndex][2]}</Text>
            <Text style={{fontSize: 13, color: 'white', marginLeft: 20}}>{this.props.cardOwnerName}</Text>
          </View>
        </View>

        <View style={{flex: 1, borderTopWidth: 1, borderColor: 'gray', margin: 10, height: 150}}>

          <View style={{flexDirection: 'row', marginTop: 5, alignItems: 'stretch', justifyContent: 'center',}}>
            <Text style={{color: 'gray'}}>Card Number:</Text>
            <View style={styles.cardInfoTextContainer}>
              <Text style={{marginRight: 8, fontWeight: 'bold'}}>{this.props.cardItem[this.props.cardItemIndex][0]}</Text>
            </View>
          </View>

          <View style={{flexDirection: 'row', marginTop: 5, alignItems: 'stretch', justifyContent: 'center',}}>
            <Text style={{color: 'gray'}}>Bank:</Text>
            <View style={styles.cardInfoTextContainer}>
              <Text style={{marginRight: 8, fontWeight: 'bold'}}>{this.props.cardItem[this.props.cardItemIndex][1]}</Text>
            </View>
          </View>

          <View style={{flexDirection: 'row', marginTop: 5, alignItems: 'stretch', justifyContent: 'center',}}>
            <Text style={{color: 'gray'}}>Status:</Text>
            <View style={styles.cardInfoTextContainer}>
              <Text style={{marginRight: 8, fontWeight: 'bold'}}>{this.props.cardItem[this.props.cardItemIndex][3]}</Text>
            </View>
          </View>

          <View style={{flexDirection: 'row', marginTop: 5, alignItems: 'stretch', justifyContent: 'center',}}>
            <Text style={{color: 'gray'}}>CCV:</Text>
            <View style={styles.cardInfoTextContainer}>
              <Text style={{marginRight: 8, fontWeight: 'bold'}}>{this.props.cardItem[this.props.cardItemIndex][4]}</Text>
            </View>
          </View>

          <View style={{flexDirection: 'row', marginTop: 5, alignItems: 'stretch', justifyContent: 'center',}}>
            <Text style={{color: 'gray'}}>Address:</Text>
            <View style={styles.cardInfoTextContainer}>
              <Text style={{marginRight: 8, fontWeight: 'bold', textAlign: 'right'}}>{this.props.cardItem[this.props.cardItemIndex][5] + '\n' +
               this.props.cardItem[this.props.cardItemIndex][6] + ', ' + this.props.cardItem[this.props.cardItemIndex][7] + '\n' + this.props.cardItem[this.props.cardItemIndex][8]}</Text>
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
    alignItems: 'flex-end',
    flexDirection: 'row-reverse',
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
