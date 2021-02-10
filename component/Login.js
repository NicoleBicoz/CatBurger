import React, {Component} from 'react';
import {Text, View, StyleSheet, TextInput, TouchableHighlight} from 'react-native'

export default class Login extends Component{
    renfer(){
        return(
            <View>
                <TextInput></TextInput>
                <TextInput></TextInput>
                <TouchableHighlight>
                    <Text>Login</Text>
                </TouchableHighlight>
                <TouchableHighlight>
                    <Text>Signup</Text>
                </TouchableHighlight>
            </View>
        )
    }
}