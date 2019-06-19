import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import {
  Picker
} from 'react-native-windows';

var CreditCard = require('./creditcardlistitem');
import * as user from './users/janedoe/userinfo.json';

var StateEnum = {
  VIEWCARDS: 1,
  ADDCARD: 2,
};

export default class MyWalletRender extends Component {
  constructor(props){
      super(props);
      this.state = { 
        isSelected: false,
        selectedCardKey: -1,
        currentPage: StateEnum.VIEWCARDS,
        cardListLength: this.props.listLength,
        localCardInfo: this.props.allCards,
        removeCardKey: -1,
        tempstring: "not removing",
        newCardNumber: "",
        newCardCCV: "",
        newCardAddress: "",
        newCardCity: "",
        newCardState: "",
        newCardZip: "",
        newString: "updated the string!"
      }
  }

  state = {
    yearPickerSelectedValue: "20",
    yearPickerSelectedIndex: 0,
    monthPickerSelectedValue: "01",
    monthPickerSelectedIndex: 0,
    bankPickerSelectedValue: "Klepto Universal",
    bankPickerSelectedIndex: 0
  };
  
  yearPickerValueChange = (value, index) => {
    this.setState({ yearPickerSelectedValue: value, yearPickerSelectedIndex: index });
  }
  
  monthPickerValueChange = (value, index) => {
    this.setState({ monthPickerSelectedValue: value, monthPickerSelectedIndex: index });
  }

  bankPickerValueChange = (value, index) => {
    this.setState({ bankPickerSelectedValue: value, bankPickerSelectedIndex: index });
  }

  cardNumberChangeTextHandler = (text) => {
    this.setState({ newCardNumber: text });
  }

  ccvChangeTextHandler = (text) => {
    this.setState({ newCardCCV: text });
  }

  addressChangeTextHandler = (text) => {
    this.setState({ newCardAddress: text });
  }

  cityChangeTextHandler = (text) => {
    this.setState({ newCardCity: text });
  }

  stateChangeTextHandler = (text) => {
    this.setState({ newCardState: text });
  }

  zipChangeTextHandler = (text) => {
    this.setState({ newCardZip: text });
  }

  _NavigateToAddCardPage = () =>
  {
    if(this.state.currentPage != StateEnum.ADDCARD)
    {
      this.setState({currentPage: StateEnum.ADDCARD})
    }
  }

  _NavigateToViewCards = () =>
  {
    if(this.state.currentPage != StateEnum.VIEWCARDS)
    {
      this.setState({currentPage: StateEnum.VIEWCARDS})
    }
  }

  _AddCardAndNavigateToViewCards = () =>
  {
    if(this.state.currentPage != StateEnum.VIEWCARDS)
    {
      this.state.cardListLength += 1
      this.state.localCardInfo.push([this.state.newCardNumber, this.state.bankPickerSelectedValue, this.state.monthPickerSelectedValue + '/' + this.state.yearPickerSelectedValue, "Active", this.state.newCardCCV, this.state.newCardAddress, this.state.newCardCity, this.state.newCardState, this.state.newCardZip])
      
      this.props.updateParentData(this.state.localCardInfo, this.state.cardListLength);
      this.state.selectedCardKey = -1;
      this.setState({currentPage: StateEnum.VIEWCARDS})
    }
  }

  cardSelected = (value) => {
    this.setState({isSelected: !this.state.isSelected });
    this.setState({selectedCardKey: value});
  }

  removeCard = (key) => {
    this.setState({removeCardKey: key})

    this.state.cardListLength -= 1;
    this.state.localCardInfo.splice(key, 1);

    this.props.updateParentData(this.state.localCardInfo, this.state.cardListLength);

    this.state.selectedCardKey = -1;
    this.setState({currentPage: StateEnum.VIEWCARDS})
  }

  renderRemoveButtons(key)
  {
    if(key == this.state.selectedCardKey)
    {
      return (
        <TouchableOpacity style={{backgroundColor: '#0078d7', borderRadius: 4}} onPress={this.removeCard.bind(this, key)}>
          <Text style={{color: 'white', padding: 5}}>Remove Card</Text>
        </TouchableOpacity>
      );
    } else {
      return null;
    }
  }

  renderPages()
  {
    var cardsLength = this.state.cardListLength;
    const cardIndices = [];    

    if(this.state.removeCardKey != -1)
    {
      cardIndices.splice(this.state.removeCardKey, 1);      
    }

    for (let i = 0; i < cardsLength; i += 1) {
      cardIndices.push(i);
    }    

    if(this.state.currentPage == StateEnum.VIEWCARDS)
      return <View style={{flexDirection: 'column'}}>
        <Text style={{fontSize: 20, margin: 20, marginTop: -10 , color: '#0078d7'}}>My Wallet</Text>

        <View style={{flex: 1, alignItems: 'flex-start', marginLeft: 15, marginTop: -10}}>
          <TouchableOpacity style={styles.userButtons} onPress={this._NavigateToAddCardPage}>
            <Text style={{color: 'white'}}>Add Card</Text>
          </TouchableOpacity>
        </View>

        <View style={{alignItems: 'flex-start', flexWrap: 'wrap', flexDirection: 'column', marginTop: 10}}>
          <View style={{flex: 1, alignItems: 'flex-start', flexDirection: 'row', flexWrap: 'wrap'}}>
          { cardIndices.map((item, key)=>
            (
              <View style={{alignItems: 'center', justifyContent: 'center'}}>                
                {this.renderRemoveButtons(key)}
                <TouchableOpacity key={key} style={[styles.dataCard, this.state.selectedCardKey == key ? styles.dataCardSelected : styles.dataCard]} onPress={this.cardSelected.bind(this, key)}>
                  <CreditCard cardItem={this.state.localCardInfo} cardItemIndex={item} cardOwnerName={user.name.first + ' ' + user.name.middle[0] + ' ' + user.name.last}/>
                </TouchableOpacity>
              </View>
            ))
          }
          </View>
        </View>
      </View>

    //Add a new card page
    if(this.state.currentPage == StateEnum.ADDCARD)
      return <View>
        <Text style={{fontSize: 20, margin: 20, marginTop: -10 , color: '#0078d7'}}>Add New Card</Text>
        <View style={{alignItems: 'center', justifyContent:'center', flexDirection: 'column'}}>         

          <View style={{flex: 1, marginLeft: -290}}>
            <Text>Cardholder Name</Text>
            <Text style={{color: 'gray', marginLeft: 5}}>{user.name.first + ' ' + user.name.middle[0] + ' ' + user.name.last}</Text>
          </View>

          <View style={{margin: 5}}>
            <Text>Credit Card Number</Text>
            <TextInput placeholder="Enter card number" style={{width: 400}} onChangeText={this.cardNumberChangeTextHandler}/>
          </View>

          <View style={{margin: 5}}>
            <Text>Expiration Date</Text>
            <View style={{flexDirection: 'row'}}>
              <View>
                <Text>Month</Text>
                <Picker style={{ width: 195, marginRight: 5 }} selectedValue={this.state.monthPickerSelectedValue} onValueChange={this.monthPickerValueChange}>
                  <Picker.Item value="01" label="01"/>
                  <Picker.Item value="02" label="02"/>
                  <Picker.Item value="03" label="03"/>
                  <Picker.Item value="04" label="04"/>
                  <Picker.Item value="05" label="05"/>
                  <Picker.Item value="06" label="06"/>
                  <Picker.Item value="07" label="07"/>
                  <Picker.Item value="08" label="08"/>
                  <Picker.Item value="09" label="09"/>
                  <Picker.Item value="10" label="10"/>
                  <Picker.Item value="11" label="11" />
                  <Picker.Item value="12" label="12" />
                </Picker>
              </View>
            <View>
                <Text style={{marginLeft: 5}}>Year</Text>
                <Picker style={{ width: 195, marginLeft: 5 }} selectedValue={this.state.yearPickerSelectedValue} onValueChange={this.yearPickerValueChange}>
                  <Picker.Item value="20" label="2020"/>
                  <Picker.Item value="21" label="2021"/>
                  <Picker.Item value="22" label="2022"/>
                  <Picker.Item value="23" label="2023"/>
                  <Picker.Item value="24" label="2024"/>
                  <Picker.Item value="25" label="2025"/>
                </Picker>
              </View>
            </View>
          </View>

          <View style={{margin: 5}}>
            <Text>CCV</Text>
            <TextInput placeholder="XXX" style={{width: 400}} onChangeText={this.ccvChangeTextHandler}/>
          </View>

          <View style={{margin: 5}}>
            <Text>Address</Text>
            <TextInput placeholder="Enter address" style={{width: 400}} onChangeText={this.addressChangeTextHandler}/>
          </View>

          <View style={{margin: 5}}>
            <Text>City</Text>
            <TextInput placeholder="Enter city" style={{width: 400}} onChangeText={this.cityChangeTextHandler}/>
          </View>

          <View style={{margin: 5, flexDirection: 'row'}}>
            <View style={{flexDirection: 'column'}}>
              <Text>State</Text>
              <TextInput placeholder="Enter state" style={{width: 195, marginRight: 5}} onChangeText={this.stateChangeTextHandler}/>
            </View>
            <View style={{flexDirection: 'column'}}>
              <Text>Zip</Text>
              <TextInput placeholder="Enter zip" style={{width: 195, marginLeft: 5}} onChangeText={this.zipChangeTextHandler}/>
            </View>
          </View>

          <View style={{margin: 5}}>
            <Text style={{marginLeft: 5}}>Bank</Text>
            <Picker style={{ width: 400, marginLeft: 5 }} selectedValue={this.state.bankPickerSelectedValue} onValueChange={this.bankPickerValueChange}>
              <Picker.Item value="​First Up Consultants" label="​First Up Consultants"/>
              <Picker.Item value="Woodgrove Bank" label="Woodgrove Bank"/>
            </Picker>
          </View>

        </View>

        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 10, marginBottom: 10}}>
          <TouchableOpacity style={styles.userButtons} onPress={this._AddCardAndNavigateToViewCards}>
            <Text style={{color: 'white'}}> Add </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.userButtonCancel} onPress={this._NavigateToViewCards}>
            <Text style={{color: 'white'}}> Cancel </Text>
          </TouchableOpacity>
        </View>

      </View>

    return null;
  }

  render() {
    return (
      <View style={styles.root}>

          { this.renderPages() }

      </View>
    );
  }
}

module.exports = MyWalletRender;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  userButtons: {
    alignItems: 'center',
    backgroundColor: '#0078d7',
    borderRadius: 5,
    padding: 5,
    paddingRight: 8,
    marginRight: 10,
    marginLeft: 5,
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
    borderColor: '#0078d7',
  },
  userButtons: {
    alignItems: 'center',
    backgroundColor: '#0078d7',
    borderRadius: 5,
    padding: 5,
    paddingRight: 8,
    marginRight: 0,
    marginLeft: 5,
  },
  userButtonCancel: {
    alignItems: 'center',
    backgroundColor: 'gray',
    borderRadius: 5,
    padding: 5,
    paddingRight: 8,
    marginRight: 0,
    marginLeft: 5,
  },
});
