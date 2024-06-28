import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/Ionicons';

const Payment = () => {
    const navigation = useNavigation();
    const [selectedComponent, setSelectedComponent] = useState('creditCard'); // State to track selected component

    const handleSaveChanges = () => {
        // Save changes logic
        navigation.goBack();
    };

    const handleComponentSelection = (component) => {
        setSelectedComponent(component);
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon name="arrow-back" size={24} color="black" style={styles.backIcon} />
                </TouchableOpacity>
                <Text style={styles.headerText}>Payment</Text>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.component}>
                    <Feather name="credit-card" size={24} color="black" style={styles.icon} />
                    <View style={styles.infoContainer}>
                        <Text style={styles.componentHeading}>Credit Card</Text>
                        <Text style={styles.dummyInfo}>**** **** **** 1234</Text>
                        <Text style={styles.dummyInfo}>Exp: 12/25</Text>
                    </View>
                    <TouchableOpacity
                        style={[styles.selectButton, selectedComponent === 'creditCard' && styles.selectedButton]}
                        onPress={() => handleComponentSelection('creditCard')}>
                    </TouchableOpacity>
                </View>
                <View style={styles.component}>
                    <Feather name="dollar-sign" size={24} color="black" style={styles.icon} />
                    <View style={styles.infoContainer}>
                        <Text style={styles.componentHeading}>PayPal</Text>
                        <Text style={styles.dummyInfo}>example@example.com</Text>
                    </View>
                    <TouchableOpacity
                        style={[styles.selectButton, selectedComponent === 'paypal' && styles.selectedButton]}
                        onPress={() => handleComponentSelection('paypal')}>
                    </TouchableOpacity>
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
        fontSize: 20,
        fontWeight: 'bold',
    },
    component: {
        paddingHorizontal: 20,
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    infoContainer: {
        marginLeft: 10,
        flex: 1,
    },
    componentHeading: {
        fontSize: 18,
        fontWeight: "bold",
    },
    dummyInfo: {
        marginTop: 5,
        color: '#666',
    },
    selectButton: {
        borderWidth: 1,
        borderColor: '#2196F3',
        borderRadius: 15,
        padding: 10,
    },
    selectedButton: {
        backgroundColor: '#2196F3',
    },
    icon: {
        marginRight: 10,
    },
    saveButton: {
        backgroundColor: '#2196F3',
        borderRadius: 25,
        paddingVertical: 15,
        marginHorizontal: 20,
        marginBottom:5
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default Payment;
