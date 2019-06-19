import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

//Community control from https://www.npmjs.com/package/react-native-table-component
import { Table, Row, Rows } from 'react-native-table-component';

import * as purchaseHistory from './users/janedoe/allpurchases.json';
export default class AllPurchases extends Component {
constructor(props){
    super(props);
    this.state =
    {
        tableHead: ['Date', 'Payee', 'Category', 'Card', 'Status', 'Price']
    }
  }

  render() {
    const purchasesTable = [];
    for (let i = 0; i < Object.keys(purchaseHistory).length - 1; i += 1) {
      purchasesTable.push(purchaseHistory[i]);
    }

    return (
      <View style={styles.root}>
        <Table borderStyle={{borderWidth: 1, borderColor: '#0078d7'}}>
            <Row data={this.state.tableHead} style={styles.head} textStyle={styles.text}/>
        </Table>

        <ScrollView style={{marginBottom: 30, width: '100%', height: '75%'}}>
        <Table borderStyle={{borderWidth: 1, borderColor: '#e6e6e6'}}>
            <Rows data={purchasesTable} textStyle={styles.tableText}/>
        </Table>
        </ScrollView>
        
      </View>
    );
  }
}

module.exports = AllPurchases;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    marginTop: 10,
    margin: 15
  },
  head: {
    height: 40,
    backgroundColor: '#0078d7',
  },
  text: {
    margin: 6,
    color: 'white',
    fontWeight: 'bold',
  },
  tableText: {
    margin: 6,
    marginTop: 15,
    height: 30,
  },
});
