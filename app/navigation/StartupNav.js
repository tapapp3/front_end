import {createStackNavigator} from 'react-navigation'
import LoginStack from './LoginStack'
import StartupDrawer from './StartupDrawer'

const StartupNav = createStackNavigator({
    LoginStack: {screen: LoginStack},
    StartupDrawer: {screen: StartupDrawer}
}, {
    headerMode: 'none'
})

export default StartupNav

