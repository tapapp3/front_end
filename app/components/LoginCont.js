import React from 'reactn'
import { View, KeyboardAvoidingView, Dimensions, ScrollView, Keyboard, Image } from 'react-native'
import {host} from '../../secrets'
import styles from '../../assets/styles'
import {scaleModerate} from '../../utils/scale'
import {RkTextInput} from 'react-native-ui-kitten'
class Login extends React.Component {

    constructor() {
        super()
        this.state = {
            email: '',
            password: ''
        }
    }
    // onSubmit(){
    //     signInThunk(this.state)
    // }
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
                </ScrollView>
            </KeyboardAvoidingView>
        )
    }
}

export default Login