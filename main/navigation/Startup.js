import React from 'reactn'
import {View, Text, FlatList} from 'react-native'
import { userThunk } from './thunks'

export default class Startup extends React.Component {
    async componentDidMount(){
        const g = await userThunk()
        this.setGlobal({data: g})
    }
    render() {
        return (
            <View>
                <FlatList
                data={this.global.data}
                renderItem={({item}) => <Text>{item.email}</Text>}
                keyExtractor={(item, idx) => `${idx}`}
                />
                <Text></Text>
                <Text></Text>
                <FlatList
                data={this.global.hello}
                renderItem={({item}) => <Text>{item}</Text>}
                keyExtractor={(item, idx) => `${idx}`}
                />
            </View>
        )
    }
}