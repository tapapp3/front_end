import React from 'reactn'
import { View, Text } from 'react-native'

export default class Startup extends React.Component {
    render() {
        console.log('global shit', this.global)
        return (
            <View>
                <Text>
                    Hello World
                </Text>
            </View>
        )
    }
}