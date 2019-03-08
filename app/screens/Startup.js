import React from 'reactn'
import { ScrollView, View, Text, TouchableOpacity, Image, FlatList } from 'react-native'
import {getBeers} from '../navigation/thunks'
import {RkCard, RkText} from 'react-native-ui-kitten'
import {host} from '../../secrets'
import styles from '../../assets/styles'
// import console = require('console');

export default class Startup extends React.Component {
    constructor(){
        super()
        this.state = {
            loading: true
        }
    }
    async componentDidMount(){
        const data = await getBeers()
        this.setGlobal({
            beers: data
        })
        this.setState({
            loading: false
        })
    }
    renderItem = ({item}) => (
        <TouchableOpacity
        delayPressIn={70}
        activeOpacity={0.8}
        // onPress={() => {
        //     this.props.navigation.navigate('SingleRecipe', {id: item.id})
        // }
        // }
      >
        <RkCard style={styles.recipescard}>
          <Image rkCardImg style={styles.recipeImage} source={{ uri: `${host}${item.imageUrl}` }} />
          <View rkCardContent>
            <RkText
              style={{ textAlign: 'center', fontSize: 30, fontFamily: 'ZCOOLQingKeHuangYou-Regular', paddingBottom: 15 }}
            >
              {item.name}
            </RkText>
            <RkText style={styles.customFont}>
                {item.description}
            </RkText>
          </View>
        </RkCard>
      </TouchableOpacity>
    )
    render() {
        const {beers} = this.global || []
        if(this.state.loading){
            return(
                <View></View>
            )
        }
        return (
            <ScrollView style={styles.bc}>
                <FlatList
                data={beers}
                renderItem={this.renderItem}
                style={styles.recipecontainer}
                keyExtractor={(item) => `${item.id}`}
                />
            </ScrollView>
        )
    }
}