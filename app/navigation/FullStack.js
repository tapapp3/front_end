import {createSwitchNavigator} from 'react-navigation'
import {StartupStack} from './SingleStack'

const FullStack = createSwitchNavigator({
    Startup: { screen: StartupStack }
},{
    headerMode: 'none'
})

export default FullStack