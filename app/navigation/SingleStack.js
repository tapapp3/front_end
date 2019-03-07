import {createStackNavigator, DrawerActions} from 'react-navigation'
import Startup from '../screens/Startup'
import React from 'reactn'
import {View, TouchableOpacity, Image} from 'react-native'

export const StartupStack = createStackNavigator({
    Startup: { 
        screen: Startup,
        navigationOptions: ({ navigation }) => ({
            headerMode: 'screen',
            headerTitle: 'HelloWorld',
            headerTitleStyle: {
              flex: 1,
              textAlign: 'center',
              alignSelf: 'center',
            },
            headerLeft: (
              <View style={{ paddingLeft: 20 }}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.dispatch(DrawerActions.toggleDrawer());
                  }}
                >
                  <Image
                    style={{
                      height: 25,
                      width: 25,
                    }}
                    source={require('../../assets/images/burger_menu.png')}
                  />
                </TouchableOpacity>
              </View>
            ),
          }),
    }
})

