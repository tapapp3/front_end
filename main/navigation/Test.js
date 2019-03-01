import React from 'reactn'
import { View, Text } from 'react-native'

export default class Test extends React.Component {
    componentDidMount(){
        this.setGlobal({
            hello: 'weird'
        })
    }
    render(){
        console.log('global shit', this.global)
        return (
            <View><Text>Hello</Text></View>
        )
    }
}