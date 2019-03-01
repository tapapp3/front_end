/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'reactn';
import {Platform, StyleSheet, Text, View} from 'react-native';
import AppContainer from './AppContainer'

import {setGlobal} from 'reactn'

setGlobal({
    data: 'null',
    hello: ['the', 'cat', 'ran']
})


export default class App extends Component {
  render() {
    return (
      <AppContainer />
    );
  }
}

