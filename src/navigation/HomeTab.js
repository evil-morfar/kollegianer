import React from 'react';
import {StyleSheet} from 'react-native';
import {TabNavigator} from 'react-navigation';
import ViManglerScreen from '../components/ViMangler';
import OverviewScreen from '../components/Overview';
import colors from '../shared/colors';
import GossipScreen from '../components/Gossip';
import AccountingScreen from '../components/Accounting';

export default HomeTab = TabNavigator({
  Home: {
    screen: OverviewScreen
  },
  ViMangler: {
    screen: ViManglerScreen
  },
  Regnskab: {
    screen: AccountingScreen
  },
  Gossip: {
    screen: GossipScreen
  }
}, {
  animationEnabled: true,
  tabBarOptions: {
    activeTintColor: colors.activeTabColor,
    inactiveTintColor: colors.inactiveTabColor,
    tabStyle: {
      backgroundColor: colors.backgroundColor,
      elevation: 0
    },
    style: {
      paddingTop: 2,
      backgroundColor: colors.backgroundColor,
      elevation: 0,
      borderBottomWidth: StyleSheet.hairlineWidth
    },
    labelStyle: {
      fontSize: 9,
      marginBottom: 2
    },
    indicatorStyle: {
      display: 'none'
    },
    showIcon: true,
  }
});