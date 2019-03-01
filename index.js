/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {setGlobal} from 'reactn'

setGlobal({
    data: 'null',
    hello: ['the', 'cat', 'ran']
})


AppRegistry.registerComponent(appName, () => App);
