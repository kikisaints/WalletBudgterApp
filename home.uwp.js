import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import { Table, Row, Rows, TableWrapper, Cell } from 'react-native-table-component';

//Surfaced native UWP XAML CalendarView Control
import { CalendarView, ProgressBar } from 'react-native-windows';

var SpentAmountCatagory = require('./spentcatagory');
var CreditCard = require('./creditcard');
var PurchaseItem = require('./purchasesitem');

import * as user from './users/janedoe/userinfo.json';
import * as cards from './users/janedoe/primarycreditcardinfo.json';
import * as budget from './users/janedoe/budget.json';
import * as recentPurchases from './users/janedoe/recentpurchases.json';

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export default class HomeRender extends Component {
constructor(props){
    super(props);
    this.state =
    {
      userCardName: user.name.first + ' ' + user.name.middle[0] + ' ' + user.name.last,
      displayedCard: cards.primary,
      totalSpent: budget.groceries.spent + budget.electronics.spent + budget.gas.spent + budget.entertainment.spent +
      budget.restaurants.spent + budget.gifts.spent + budget.doctor.spent + budget.shopping.spent + budget.hobbies.spent + budget.vacation.spent,
      recentPurchaseItems: recentPurchases,
      tableHead: ['Date', 'Payee', 'Category', 'Card', 'Status', 'Price']      
    }
  }

  FlatListItemSeparator = () => {
    return (
      <View style={{ height: 1, width: "100%", backgroundColor: "#c9c9c9" }} />
    );
  };

  CheckCalendarDate = (value) => {

  }

  render() {
    const purchasesTable = [];
    const tempheaders = ['Head', 'Head2', 'Head3', 'Head4', 'Head5', 'Head6'];
    for (let i = 0; i < Object.keys(recentPurchases).length - 1; i += 1) {
      purchasesTable.push(recentPurchases[i]);
    };

    const element = (data, index) => (
      <TouchableOpacity onPress={() => this.CheckCalendarDate(index)}>
        <Text style={{color: '#0078d7'}}>{data}</Text>
      </TouchableOpacity>
    );

    return (
      <View style={styles.root}>
        <View style={{alignItems: 'flex-start', flexWrap: 'wrap', flexDirection: 'row'}}>
          <View style={styles.dataCreditCard}>
            <Text style={{fontSize: 20, marginBottom: 10, color: '#0078d7'}}>
              Primary Card
              </Text>
            <CreditCard
              cardNumber={this.state.displayedCard.number}
              bankName={this.state.displayedCard.bank}
              cardStatus={this.state.displayedCard.status}
              expireDate={this.state.displayedCard.expire}
              cardOwnerName={this.state.userCardName}/>
          </View>
          <View style={{flexDirection: 'column'}}>
            <View style={styles.inflowCard}>
              <Text style={{fontSize: 20, color: '#0078d7'}}>
                Total Savings
              </Text>
              <Text style={[styles.recentIncomeText, (budget.monthlyearnings.recentincome > Number((this.state.totalSpent).toFixed(2))) ? styles.green : styles.red]}>
                +${Number((budget.monthlyearnings.recentincome - this.state.totalSpent).toFixed(2))}
              </Text>
              <Text style={{fontSize: 14, marginLeft: 10, marginTop: 5, color: 'gray'}}>
                ${numberWithCommas(budget.monthlyearnings.recentincome)} earned this month
              </Text>
            </View>
            <View style={styles.dataCard}>
              <View style={{flexDirection: 'row', marginLeft: 15, marginTop: 10}}>
                <Text style={{fontSize: 20, color: '#0078d7'}}>
                  Expenses
                </Text>
            </View>
            <ScrollView style={{margin: 0, padding: 10, paddingTop: 5}}>
              <SpentAmountCatagory productTitle="Groceries"
              productProgress={budget.groceries.spent / budget.groceries.total}
              breakdown={'$' + budget.groceries.spent + ' / $' + budget.groceries.total}/>
              <SpentAmountCatagory productTitle="Electronics"
              productProgress={budget.electronics.spent / budget.electronics.total}
              breakdown={'$' + budget.electronics.spent + ' / $' + budget.electronics.total}/>
              <SpentAmountCatagory productTitle="Gas"
              productProgress={budget.gas.spent / budget.gas.total}
              breakdown={'$' + budget.gas.spent + ' / $' + budget.gas.total}/>
              <SpentAmountCatagory productTitle="Entertainment"
              productProgress={budget.entertainment.spent / budget.entertainment.total}
              breakdown={'$' + budget.entertainment.spent + ' / $' + budget.entertainment.total}/>
              <SpentAmountCatagory productTitle="Restaurants"
              productProgress={budget.restaurants.spent / budget.restaurants.total}
              breakdown={'$' + budget.restaurants.spent + ' / $' + budget.restaurants.total}/>
              <SpentAmountCatagory productTitle="Gifts"
              productProgress={budget.gifts.spent / budget.gifts.total}
              breakdown={'$' + budget.gifts.spent + ' / $' + budget.gifts.total}/>
              <SpentAmountCatagory productTitle="Doctor"
              productProgress={budget.doctor.spent / budget.doctor.total}
              breakdown={'$' + budget.doctor.spent + ' / $' + budget.doctor.total}/>
              <SpentAmountCatagory productTitle="Shopping"
              productProgress={budget.shopping.spent / budget.shopping.total}
              breakdown={'$' + budget.shopping.spent + ' / $' + budget.shopping.total}/>
              <SpentAmountCatagory productTitle="Hobbies"
              productProgress={budget.hobbies.spent / budget.hobbies.total}
              breakdown={'$' + budget.hobbies.spent + ' / $' + budget.hobbies.total}/>
              <SpentAmountCatagory productTitle="Vacation"
              productProgress={budget.vacation.spent / budget.vacation.total}
              breakdown={'$' + budget.vacation.spent + ' / $' + budget.vacation.total}/>
              <Text/>
            </ScrollView>
            </View>
          </View>
          <View style={styles.calendarCard}>
            <View style={{flexDirection: 'column'}}>
              <Text style={{color: '#0078d7', fontSize: 20, marginBottom: 5}}>Status</Text>
              <Text style={{color: 'gray', fontSize: 12, marginBottom: 5}}>${Number((this.state.totalSpent).toFixed(2))} / ${budget.totalbudget} spent this month</Text>
              <ProgressBar progress={this.state.totalSpent / budget.totalbudget} style={{width: 300, height: 15, marginBottom: 10}}/>
            </View>

            <CalendarView style={{width: 300, height: 340}}/>

          </View>

          <View style={styles.purchasesDataCard}>
            <View style={{flexDirection: 'column', margin: 10}}>

              <Text style={{fontSize: 20, color: '#0078d7'}}>
                Recent Purchases
              </Text>


              <Table borderStyle={{borderWidth: 1, borderColor: '#0078d7', marginTop: 5}}>
                <Row data={this.state.tableHead} style={styles.head} textStyle={styles.text}/>
              </Table>
              <ScrollView style={{marginBottom: 30, width: 610, height: '75%'}}>
                <Table borderStyle={{borderWidth: 1, borderColor: '#e6e6e6'}}>
                  <Row/>
                  {
                    purchasesTable.map((rowData, index) => (
                      <TableWrapper key={index} style={styles.row}>
                        {
                          rowData.map((cellData, cellIndex) => (
                            <Cell key={cellIndex} data={cellIndex === 0 ? element(cellData, index) : cellData}/>
                          ))
                        }
                      </TableWrapper>
                    ))
                  }
                </Table>
              </ScrollView>

            </View>
          </View>

        </View>
      </View>
    );
  }
}

module.exports = HomeRender;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    height: 50,
    marginLeft: 5,
  },
  tableContainer: {
    flex: 1,
    width: 500,
    height: 300,
    padding: 16,
    paddingTop: 30,
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
  calendarCard: {
    backgroundColor: '#fcfbfb',
    alignItems: 'flex-start',
    flexDirection: 'column',
    minHeight: 340,
    minWidth: 300,
    margin: 15,
    padding: 10,
    marginRight: 0,
    borderWidth: 1,
    borderColor: '#e6e6e6',
  },
  inflowCard: {
    backgroundColor: '#fcfbfb',
    alignItems: 'flex-start',
    flexDirection: 'column',
    height: 130,
    width: 300,
    padding: 10,
    marginLeft: 15,
    marginRight: 0,
    marginTop: 15,
    borderWidth: 1,
    borderColor: '#e6e6e6',
  },
  dataCreditCard: {
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
  purchaseItemViewContainer: {
    minWidth: 300,
    maxWidth: 800,
    width: 500,
  },
  purchasesDataCard: {
    backgroundColor: '#fcfbfb',
    alignItems: 'flex-start',
    flexDirection: 'column',
    height: 295,
    width: 636,
    margin: 15,
    marginRight: 0,
    borderWidth: 1,
    borderColor: '#e6e6e6',
  },
  dataCard: {
    backgroundColor: '#fcfbfb',
    alignItems: 'flex-start',
    flexDirection: 'column',
    height: 295,
    width: 300,
    margin: 15,
    marginRight: 0,
    borderWidth: 1,
    borderColor: '#e6e6e6',
  },
  recentIncomeText: {
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft: 10,
    marginTop: 15
  },
  green: {
    color: 'green'
  },
  red: {
    color: 'red'
  },
});
