import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

const ChangePass = () => {
    const navigation = useNavigation();
    const [newPassword, setNewPassword] = useState('');
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
                <Text style={styles.headerText}>Change Password</Text>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={styles.infoText}>
                    The new password must be different from the current password.
                </Text>
                <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>
                        New Password
                    </Text>
                    <TextInput
                        style={styles.input}
                        value={newPassword}
                        onChangeText={setNewPassword}
                        secureTextEntry={true}
                        placeholder="Enter new password"
                    />
                    <View style={styles.passwordRequirements}>
                        <Feather name="check-circle" size={12} color="green" />
                        <Text style={{
                            color: "green"
                        }}> There must be at least 8 characters</Text>
                    </View>
                    <View style={styles.passwordRequirements}>
                        <Feather name="check-circle" size={12} color="green" />
                        <Text style={{
                            color: "green"
                        }}> There must be a unique code like @!#</Text>
                    </View>
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>Confirm Password</Text>
                    <TextInput
                        style={styles.input}
                        value={confirmPassword}
                        onChangeText={setConfirmPassword}
                        secureTextEntry={true}
                        placeholder="Confirm new password"
                    />
                </View>
            </ScrollView>
            <TouchableOpacity style={styles.saveButton} onPress={handleSaveChanges}>
                <Text style={styles.buttonText}>Save Changes</Text>
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
        marginVertical: 16

    },
    inputLabel: {
        fontSize: 16,
        marginBottom: 5,
        marginVertical: 5,
        flexDirection: 'row',
        alignItems: 'center',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 25,
        paddingVertical: 10,
        paddingHorizontal: 40,
        fontSize: 16,
        marginVertical: 10

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
       // alignItems: 'center',
       // marginLeft: 40,
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

export default ChangePass;
