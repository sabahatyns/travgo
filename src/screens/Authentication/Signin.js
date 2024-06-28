import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

const Signin = () => {
    const navigation = useNavigation();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSaveChanges = () => {
        // Save changes logic
        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon name="arrow-back" size={24} color="black" style={styles.backIcon} />
                </TouchableOpacity>
                <Text style={styles.headerText}>Signin</Text>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={styles.infoText}>Please fill in the following information:</Text>
                <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>First Name</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter your first name"
                        onChangeText={setFirstName}
                        value={firstName}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>Last Name</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter your last name"
                        onChangeText={setLastName}
                        value={lastName}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>Email</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter your email"
                        onChangeText={setEmail}
                        value={email}
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>Password</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter your password"
                        onChangeText={setPassword}
                        value={password}
                        secureTextEntry
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>Confirm Password</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Confirm your password"
                        onChangeText={setConfirmPassword}
                        value={confirmPassword}
                        secureTextEntry
                    />
                </View>
            </ScrollView>
            <TouchableOpacity style={styles.saveButton} onPress={handleSaveChanges}>
                <Text style={styles.buttonText}>Signin</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 20,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    backIcon: {
        marginRight: 10,
    },
    headerText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    infoText: {
        paddingHorizontal: 20,
        marginTop: 10,
        marginBottom: 20,
        fontSize: 16,
        color: '#666',
        fontWeight: "bold"
    },
    inputContainer: {
        paddingHorizontal: 20,
        marginTop: 10,
        marginVertical: 5

    },
    inputLabel: {
        fontSize: 16,
        marginBottom: 5,
       // marginVertical: 5,
        flexDirection: 'row',
        alignItems: 'center',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        paddingVertical: 5,
        paddingHorizontal:15,
        fontSize: 16,
        marginVertical: 5

    },
    saveButton: {
        backgroundColor: '#2196F3',
        borderRadius: 25,
        paddingVertical: 15,
        marginHorizontal: 20,
        marginBottom: 20,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    icon: {
        position: 'absolute',
        top: 15,
        left: 20,
    },
    passwordRequirements: {
        flexDirection: 'row',
        marginTop: 5,
    },
    uniqueCode: {
        position: 'absolute',
        top: 40,
        right: 20,
        color: 'green',
        fontSize: 20,
    },
});

export default Signin;
