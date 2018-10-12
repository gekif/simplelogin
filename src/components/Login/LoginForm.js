import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, StatusBar} from 'react-native';

export default class LoginForm extends Component {
    render() {
        return (
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <StatusBar
                    barStyle="light-content"
                />
                <TextInput
                    placeholder="Username or email"
                    placeholderTextColor="rgba(255,255,255,0,7)"
                    returnKeyType="next"
                    onSubmitEditing= { () => this.passwordInput.focus() }
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                    style={styles.input}
                />
                <TextInput
                    placeholder="Password"
                    placeholderTextColor="rgba(255,255,255,0,7)"
                    returnKeyType="go"
                    secureTextEntry
                    style={styles.input}
                    ref={ (input) => this.passwordInput = input}
                />

                <TouchableOpacity style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>

            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
    },
    input: {
        height: 40,
        backgroundColor: 'rgba(255,255,255,0,2)',
        marginBottom: 10,
        color: '#FFF',
        paddingHorizontal: 10
    },
    buttonContainer: {
        backgroundColor: '#2980b9',
        paddingVertical: 10
    },
    buttonText: {
        textAlign: 'center',
        color: '#FFF',
        fontWeight: '700'
    }
});
