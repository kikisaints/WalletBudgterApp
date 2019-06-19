import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

var CreditCard = require('./creditcardlistitem');
import * as user from './users/janedoe/userinfo.json';

export default class ViewCards extends Component {
constructor(props){
    super(props);
    this.state =
    {
      isSelected: false,
      cardListLength: 2,
      localCardInfo : [
        ["0000 0000 0000", "Klepto Universal", "04/20", "Active", "000", "No Name Boulevard", "Queens", "New York", "010101"],
        ["0000 0000 0001", "Zero Interest", "08/10", "Suspended", "001", "No Name Boulevard", "Queens", "New York", "010101"]
      ]
    }
  }

  cardSelected = () => {
    this.setState({isSelected: !this.state.isSelected })
  }

  render() {
    var cardsLength = this.state.cardListLength;
    const cardIndices = [];

    for (let i = 0; i < cardsLength; i += 1) {
      cardIndices.push(i);
    }

    return (
      <View style={styles.root}>
      <Text>{this.state.isSelected}</Text>
        <View style={{alignItems: 'flex-start', flexWrap: 'wrap', flexDirection: 'column'}}>
          <View style={{flex: 1, alignItems: 'flex-start', flexDirection: 'row', flexWrap: 'wrap'}}>
          { cardIndices.map((item, key)=>
            (
              <TouchableOpacity key={key} style={styles.dataCard} onPress={this.cardSelected()}>
                <CreditCard cardItem={this.state.localCardInfo} cardItemIndex={item} cardOwnerName={user.name.first + ' ' + user.name.middle[0] + ' ' + user.name.last}/>
              </TouchableOpacity>
            ))
          }
          </View>          
        </View>
      </View>
    );
  }
}

module.exports = ViewCards;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#f5f6fa',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  dataCard: {
    backgroundColor: '#fcfbfb',
    alignItems: 'flex-start',
    flexDirection: 'column',
    minHeight: 275,
    minWidth: 300,
    margin: 15,
    padding: 10,
    marginRight: 0,
    borderWidth: 1,
    borderColor: '#e6e6e6',
  },
  dataCardSelected: {
    backgroundColor: '#fcfbfb',
    alignItems: 'flex-start',
    flexDirection: 'column',
    minHeight: 275,
    minWidth: 300,
    margin: 15,
    padding: 10,
    marginRight: 0,
    borderWidth: 2,
    borderColor: '0078d7',
  },
});
