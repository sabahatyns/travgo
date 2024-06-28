import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

const Security = () => {
    const navigation = useNavigation();
    const [faceIDEnabled, setFaceIDEnabled] = useState(false);
    const [fingerprintEnabled, setFingerprintEnabled] = useState(false);
    const [rememberPasswordEnabled, setRememberPasswordEnabled] = useState(false);

    const handleSaveChanges = () => {
        // Save changes logic
        navigation.goBack();
    };

    const toggleFaceID = () => {
        setFaceIDEnabled(!faceIDEnabled);
    };

    const toggleFingerprint = () => {
        setFingerprintEnabled(!fingerprintEnabled);
    };

    const toggleRememberPassword = () => {
        setRememberPasswordEnabled(!rememberPasswordEnabled);
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon name="arrow-back" size={24} color="black" style={styles.backIcon} />
                </TouchableOpacity>
                <Text style={styles.headerText}>Security</Text>
            </View>
            <ScrollView>
                <View style={styles.securityOptions}>
                    <TouchableOpacity style={styles.securityOption} onPress={toggleFaceID}>
                        <Text style={styles.securityOptionText}>Face ID</Text>
                        <Feather
                            name={faceIDEnabled ? 'toggle-right' : 'toggle-left'}
                            size={24}
                            color={faceIDEnabled ? '#2196F3' : 'black'}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.securityOption} onPress={toggleFingerprint}>
                        <Text style={styles.securityOptionText}>Fingerprint</Text>
                        <Feather
                            name={fingerprintEnabled ? 'toggle-right' : 'toggle-left'}
                            size={24}
                            color={fingerprintEnabled ? '#2196F3' : 'black'}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.securityOption} onPress={toggleRememberPassword}>
                        <Text style={styles.securityOptionText}>Remember Password</Text>
                        <Feather
                            name={rememberPasswordEnabled ? 'toggle-right' : 'toggle-left'}
                            size={24}
                            color={rememberPasswordEnabled ? '#2196F3' : 'black'}
                        />
                    </TouchableOpacity>
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

    securityOptions: {
        marginTop: 20,
        margin: 5,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 6,
    },
    securityOption: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        marginHorizontal: 6,
    },
    securityOptionText: {
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

export default Security;
