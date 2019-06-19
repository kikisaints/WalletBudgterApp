import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default class AccountButtons extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container_userButtons}>
        <TouchableOpacity style={styles.userButtons} onPress={this.onPress}>
          <Text style={{color: 'white'}}> {this.props.content} </Text>
        </TouchableOpacity>
      </View>
    );
  }

  onPress = () => {}
}

module.exports = AccountButtons;

const styles = StyleSheet.create({
  container_userButtons: {
    flex: 1,
    alignItems: 'flex-end',
    flexDirection: 'row-reverse',
    margin: 15,
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
});
