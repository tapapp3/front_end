import {createStackNavigator} from 'react-navigation'
import Login from '../components/LoginCont'


export default LoginStack = createStackNavigator({
    Login: {
        screen: Login
    }
}, {
    headerMode: 'none'
})

