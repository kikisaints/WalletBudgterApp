import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import {
  Picker
} from 'react-native-windows';

import * as user from './users/janedoe/userinfo.json';

export default class AddCard extends Component {
constructor(props){
    super(props);
}

state = {
  yearPickerSelectedValue: "key0",
  yearPickerSelectedIndex: 0,
  monthPickerSelectedValue: "key0",
  monthPickerSelectedIndex: 0,
};

yearPickerValueChange = (value, index) => {
  this.setState({ yearPickerSelectedValue: value, yearPickerSelectedIndex: index });
}

monthPickerValueChange = (value, index) => {
  this.setState({ monthPickerSelectedValue: value, monthPickerSelectedIndex: index });
}

  render() {
    return (
      <View style={styles.root}>
        <View style={{alignItems: 'center', justifyContent:'center', flexDirection: 'column'}}>         

          <View style={{flex: 1, marginLeft: -290}}>
            <Text>Cardholder Name</Text>
            <Text style={{color: 'gray', marginLeft: 5}}>{user.name.first + ' ' + user.name.middle[0] + ' ' + user.name.last}</Text>
          </View>

          <View style={{margin: 5}}>
            <Text>Credit Card Number</Text>
            <TextInput placeholder="Enter card number" style={{width: 400}}/>
          </View>

          <View style={{margin: 5}}>
            <Text>Expiration Date</Text>
            <View style={{flexDirection: 'row'}}>
              <View>
                <Text>Month</Text>
                <Picker style={{ width: 195, marginRight: 5 }} selectedValue={this.state.monthPickerSelectedValue} onValueChange={this.monthPickerValueChange}>
                  <Picker.Item label="01" value="key0" />
                  <Picker.Item label="02" value="key1" />
                  <Picker.Item label="03" value="key2" />
                  <Picker.Item label="04" value="key3" />
                  <Picker.Item label="05" value="key4" />
                  <Picker.Item label="06" value="key5" />
                  <Picker.Item label="07" value="key6" />
                  <Picker.Item label="08" value="key7" />
                  <Picker.Item label="09" value="key8" />
                  <Picker.Item label="10" value="key9" />
                  <Picker.Item label="11" value="key10" />
                  <Picker.Item label="12" value="key11" />
                </Picker>
              </View>
            <View>
                <Text style={{marginLeft: 5}}>Year</Text>
                <Picker style={{ width: 195, marginLeft: 5 }} selectedValue={this.state.yearPickerSelectedValue} onValueChange={this.yearPickerValueChange}>
                  <Picker.Item label="2020" value="key0" />
                  <Picker.Item label="2021" value="key1" />
                  <Picker.Item label="2022" value="key2" />
                  <Picker.Item label="2023" value="key3" />
                  <Picker.Item label="2024" value="key4" />
                  <Picker.Item label="2025" value="key5" />
                </Picker>
              </View>
            </View>
          </View>

          <View style={{margin: 5}}>
            <Text>CCV</Text>
            <TextInput placeholder="XXX" style={{width: 400}}/>
          </View>

          <View style={{margin: 5}}>
            <Text>Address</Text>
            <TextInput placeholder="Enter address" style={{width: 400}}/>
          </View>

          <View style={{margin: 5}}>
            <Text>City</Text>
            <TextInput placeholder="Enter city" style={{width: 400}}/>
          </View>

          <View style={{margin: 5, flexDirection: 'row'}}>
            <View style={{flexDirection: 'column'}}>
              <Text>State</Text>
              <TextInput placeholder="Enter state" style={{width: 195, marginRight: 5}}/>
            </View>
            <View style={{flexDirection: 'column'}}>
              <Text>Zip</Text>
              <TextInput placeholder="Enter zip" style={{width: 195, marginLeft: 5}}/>
            </View>
          </View>
        </View>

      </View>
    );
  }
}

module.exports = AddCard;

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
    minHeight: 340,
    minWidth: 300,
    margin: 15,
    marginRight: 0,
    borderWidth: 1,
    borderColor: '#e6e6e6',
  },
});
