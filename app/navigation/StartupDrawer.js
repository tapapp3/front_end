import {createDrawerNavigator} from 'react-navigation'
import FullStack from './FullStack'
import DrawerScreen from '../screens/DrawerScreen'

const Drawer = createDrawerNavigator({
    FullStack: { screen: FullStack}
},
{
    contentComponent: DrawerScreen,
    drawerWidth: 200,
    headerMode: 'none'
}
)

export default Drawer