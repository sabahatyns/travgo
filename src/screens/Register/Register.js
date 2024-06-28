// Register.js

import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '../../components/Header/Header';

const Register = () => {
    const [email, setEmail] = useState('');
    const [darkMode, setDarkMode] = useState(""); // State for dark mode
    const navigation = useNavigation();

    const handleContinueWithEmail = () => {
        navigation.navigate('Btm');
    };

    const handleContinueWithGoogle = () => {
        navigation.navigate('Btm');
    };

    const handleContinueWithApple = () => {
        navigation.navigate('Btm');
    };

    const handleLogin = () => {
        navigation.navigate('Btm');
    };

    return (
        <View style={[styles.container,]}>
            <Header darkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)} />
            <View style={styles.welcomeContainer}>
                <Text style={styles.welcomeText}>Hi, Welcome back</Text>
            </View>
            <View style={[styles.formContainer, darkMode && styles.darkBackground]}>
                <TextInput
                    style={styles.input}
                    placeholder="Enter your email"
                    placeholderTextColor="#888"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCompleteType="email"
                />
                <TouchableOpacity style={styles.button} onPress={handleContinueWithEmail}>
                    <Text style={styles.buttonText}>Continue with Email</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, { backgroundColor: '#DB4437' }]} onPress={handleContinueWithGoogle}>
                    <Text style={styles.buttonText}>Continue with Google</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, { backgroundColor: '#000' }]} onPress={handleContinueWithApple}>
                    <Text style={styles.buttonText}>Continue with Apple</Text>
                </TouchableOpacity>
                <Text style={styles.loginText}>If you have an account, <Text style={styles.loginLink} onPress={handleLogin}>Login</Text></Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2196F3',
    },
    darkBackground: {
        backgroundColor: '#000', // Change background color to black in dark mode
    },
    welcomeContainer: {
        backgroundColor: '#2196F3',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 20,
    },
    welcomeText: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        paddingVertical:65
    },
    formContainer: {
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: 'white',
        borderTopRightRadius: 55,
        borderTopLeftRadius: 55,
        paddingTop: 50,
    },
    input: {
        backgroundColor: '#f0f0f0',
        padding: 12,
        borderRadius: 8,
        marginBottom: 20,
        fontSize: 16,
    },
    button: {
        backgroundColor: '#2196F3',
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 8,
        marginBottom: 20,
        width: '100%',
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    loginText: {
        marginTop: 20,
        fontSize: 14,
        color: '#555',
        alignSelf:"center"
    },
    loginLink: {
        color: '#007bff',
        textDecorationLine: 'underline',
    },
});

export default Register;
