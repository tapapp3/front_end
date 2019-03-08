import React from 'reactn'
import { View, KeyboardAvoidingView, Dimensions, ScrollView, Keyboard, Image, TouchableOpacity, Text } from 'react-native'
import {host} from '../../secrets'
import styles from '../../assets/styles'
import {scaleModerate} from '../../utils/scale'
import {RkTextInput} from 'react-native-ui-kitten'
import {signInThunk, userThunkSignIn} from '../navigation/thunks'
// import console = require('console');


class Login extends React.Component {

    constructor() {
        super()
        this.state = {
            email: '',
            password: '',
            loggedIn: false
        }
    }
    async componentDidMount(){
        const data = await userThunkSignIn()
        this.setGlobal({
            user: data
        })
        if(!this.global.user.email){
            this.props.navigation.navigate('Login')
            this.setState({
                loggedIn: true
            })
        }else{
            this.props.navigation.navigate('Startup')
        }
    }
     async signin(){
         try{
            const obj = {email: this.state.email, password: this.state.password}
         await signInThunk(obj)
         this.props.navigation.navigate('Startup')
         }catch(err){
             console.log(err)
         }
     }
    renderImage() {
        const screenSize = Dimensions.get('window')
        const imageSize = {
        width: screenSize.width,
        height: screenSize.height - scaleModerate(310),
        padding: -50

      };
      return(
          <Image
          style={imageSize}
          source={{uri: `${host}/figmtn.png`}}/>
      )
    }
    render() {
        if(!this.state.loggedIn){
            return(
                <View><Text></Text></View>
            )
        }
        return (
            <KeyboardAvoidingView
            onStartShouldSetResponder={() => true}
            onResponderRelease={() => Keyboard.dismiss()}
            style={styles.screen}>
            <ScrollView
            scrollEnabled={false} 
            showsVerticalScrollIndicator={false}
            >
            {this.renderImage()}
            <View style={[styles.container, styles.contcenter]}>
                <RkTextInput
                rkType='rounded'
                onChangeText={(email) => this.setState({email})}
                placeholder='email'
                name='email'
                />
                <RkTextInput
                rkType='rounded'
                onChangeText={(password) => this.setState({password})}
                placeholder='password'
                name='password'
                secureTextEntry
                />
                </View>
                <TouchableOpacity
                onPress={() => this.signin()}
                >
                    <Text>Sign In</Text>
                </TouchableOpacity>
                </ScrollView>
            </KeyboardAvoidingView>
        )
    }
}

export default Login