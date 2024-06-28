import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

const ForgotPass = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');

    const handleSaveChanges = () => {
        // Save changes logic
        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Icon name="arrow-back" size={24} color="black" style={styles.backIcon} />
                    </TouchableOpacity>
                    <Text style={styles.headerText}>Forgot Password</Text>
                </View>
                <View style={styles.infoContainer}>
                    <Text style={styles.infoText}>
                        We will send the OTP code to your email for security in forgetting your password
                    </Text>
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>Email</Text>
                    <TextInput
                        style={styles.input}
                        value={email}
                        onChangeText={setEmail}
                        placeholder="example@mail.com"
                        keyboardType="email-address"
                    />
                </View>
            </ScrollView>
            <TouchableOpacity style={styles.saveButton} onPress={handleSaveChanges}>
                <Text style={styles.buttonText}>Submit</Text>
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
    infoContainer: {
        backgroundColor: '#f0f0f0',
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    infoText: {
        fontSize: 14,
        color: '#666',
    },
    inputContainer: {
        paddingHorizontal: 20,
        marginTop: 20,
    },
    inputLabel: {
        fontSize: 16,
        marginBottom: 5,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 25,
        paddingVertical: 10,
        paddingHorizontal: 15,
        fontSize: 16,
    },
    saveButton: {
        backgroundColor: '#2196F3',
        borderRadius: 25,
        paddingVertical: 15,
        marginHorizontal: 20,
        marginTop: 20,
        marginBottom: 20,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default ForgotPass;
