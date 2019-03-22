/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'reactn';
import AppContainer from './AppContainer'
import {setGlobal} from 'reactn'
// import console = require('console');

setGlobal({
  user: {},
  beers: [],
  distros:[],
  oneDistro: {}
})

export default class App extends Component {
  render() {
    return (
      <AppContainer />
    );
  }
}

