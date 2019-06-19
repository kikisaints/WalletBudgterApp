import React, { Component } from 'react';
import {
  AppRegistry,
  Button,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Image,
} from 'react-native';

var Home = require('./home');
var MyWallet = require('./mywalletpage');
var AllPurchases = require('./allpurchases');
var AccountButtons = require('./accountbuttons');

import * as user from './users/janedoe/userinfo.json';
console.disableYellowBox = true;

var StateEnum = {
  HOME: 1,
  MYWALLET: 2,
  ALLPURCHASES: 3,
};

class buildproj extends Component {
  constructor(props) {
      super(props);
      this.state = {
        dashboardText: "| Dashboard",
        myWalletText: "My Wallet",
        allPurchasesText: "All Purchases",
         currentPage: StateEnum.HOME,
         cardListLength: 2,
         cardInfoList: [
          ["2465 5799 7745", "First Up Consultants", "04/20", "Active", "000", "12345 Boulevard St.", "Queens", "NY", "238719"],
          ["1239 8554 6688", "Woodgrove Bank", "08/18", "Expired", "121", "12345 Boulevard St.", "Bronx", "NY", "238719"]
         ]
        };
    }

    updateParentData = (newCardsList, newListLength) => {
      this.setState({cardInfoList: newCardsList});
      this.setState({cardListLength: newListLength});
    }

    _NavigateToMyWallet = () =>
    {
      if(this.state.currentPage != StateEnum.MYWALLET)
      {
        this.setState({currentPage: StateEnum.MYWALLET})
        this.setState({myWalletText: "| My Wallet"})
        this.setState({dashboardText: "Dashboard"})
        this.setState({allPurchasesText: "All Purchases"})
      }
    }

    _NavigateToDashboard = () =>
    {
      if(this.state.currentPage != StateEnum.HOME)
      {
        this.setState({currentPage: StateEnum.HOME})
        this.setState({myWalletText: "My Wallet"})
        this.setState({dashboardText: "| Dashboard"})
        this.setState({allPurchasesText: "All Purchases"})
      }
    }

    _NavigateToAllPurchases = () =>
    {
      if(this.state.currentPage != StateEnum.ALLPURCHASES)
      {
        this.setState({currentPage: StateEnum.ALLPURCHASES})
        this.setState({myWalletText: "My Wallet"})
        this.setState({dashboardText: "Dashboard"})
        this.setState({allPurchasesText: "| All Purchases"})
      }
    }

    renderPages()
    {
      if(this.state.currentPage == StateEnum.HOME)
        return <View style={{backgroundColor: '#fff'}}>
          <Text style={{fontSize: 20, margin: 20, marginTop: -10, marginBottom: 0, color: '#0078d7'}}>Dashboard</Text>
        <Home/>
        </View>

      if(this.state.currentPage == StateEnum.MYWALLET)
        return <View style={{backgroundColor: '#fff'}}>
        <MyWallet updateParentData={this.updateParentData} allCards={this.state.cardInfoList} listLength={this.state.cardListLength}/>
        </View>

      if(this.state.currentPage == StateEnum.ALLPURCHASES)
      return <View style={{backgroundColor: '#fff'}}>
        <Text style={{fontSize: 20, margin: 20, marginTop: -10, marginBottom: 0, color: '#0078d7'}}>Purchase History</Text>
      <AllPurchases/>
      </View>

      return null;
    }

    render() {
      return (
        <View style={{flex: 1, flexDirection: 'column', backgroundColor: '#004884'}}>

        <View style={{flexDirection: 'row', margin: 5, marginBottom: -15}}>
          <View style={{flexDirection: 'row'}}>            
            <Text style={{margin: 35, marginTop: 10, marginLeft: 10, color: 'white', fontSize: 20}}>Wallet Budgeter</Text>
          </View>
          <TouchableOpacity onPress={this._NavigateToDashboard}>
            <Text style={styles.navTextButton}> {this.state.dashboardText} </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this._NavigateToMyWallet}>
            <Text style={styles.navTextButton}> {this.state.myWalletText} </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this._NavigateToAllPurchases}>
            <Text style={styles.navTextButton}> {this.state.allPurchasesText} </Text>
          </TouchableOpacity>
        </View>

          <ScrollView style={{backgroundColor: '#fff'}}>
            <View style={styles.root}>
              <View style={{backgroundColor: '#fff', alignItems: 'flex-start', flexDirection: 'row'}} >
                <Text style={styles.title}>Welcome back, {user.name.first} {user.name.middle} {user.name.last}</Text>
              </View>

              { this.renderPages() }

            </View>
          </ScrollView>
        </View>
      );
    }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#f5f6fa',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  title: {
    fontSize: 14,
    color: 'gray',
    textAlign: 'left',
    margin: 20,
  },
  navTextButton: {
    fontSize: 14,
    color: 'white',
    textAlign: 'left',
    margin: 20,
    marginTop: 17,
    fontWeight: 'bold'
  },
  container_BackBar: {
    flex: 1,
    alignItems: 'flex-start',
    margin: 15,
  },
  container_userButtons: {
    flex: 1,
    alignItems: 'flex-end',
    flexDirection: 'row-reverse',
    margin: 15,
  },
  addButton: {
    alignItems: 'center',
    backgroundColor: '#7F878F',
    padding: 5,
    paddingRight: 8,
    marginRight: 0,
    marginLeft: 5,
  },
});

AppRegistry.registerComponent('buildproj', () => buildproj);
