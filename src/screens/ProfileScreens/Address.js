import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/Ionicons';

const Address = () => {
    const navigation = useNavigation();
    const [selectedComponent, setSelectedComponent] = useState('phone'); // State to track selected component

    const handleSaveChanges = () => {
        // Assuming you have state variables to hold user data like phone, email, address, etc.
        navigation.goBack();
        // Navigate back to User Profile screen and pass updated user data as params
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
                <Text style={styles.headerText}>Address</Text>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.component}>

                    <View style={styles.infoContainer}>
                        <Text style={styles.componentHeading}>Andy Andrew</Text>
                        <Text style={styles.dummyInfo}>123-456-7890</Text>
                        <Text style={styles.dummyInfo}>1234 Address St, City, Country</Text>
                        <TouchableOpacity style={styles.changeAddressButton}>
                            <Text style={styles.buttonText}>Change Address</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity
                        style={[styles.selectButton, selectedComponent === 'phone' && styles.selectedButton]}
                        onPress={() => handleComponentSelection('phone')}>
                    </TouchableOpacity>

                </View>


                <View style={styles.component}>
                    <View style={styles.infoContainer}>
                        <Text style={styles.componentHeading}>Elevenia Kalia</Text>
                        <Text style={styles.dummyInfo}>1234 Address St, City, Country</Text>
                        <TouchableOpacity style={styles.changeAddressButton}>
                            <Text style={styles.buttonText}>Change Address</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity
                        style={[styles.selectButton, selectedComponent === 'address' && styles.selectedButton]}
                        onPress={() => handleComponentSelection('address')}>
                    </TouchableOpacity>

                </View>
            </ScrollView>
            <TouchableOpacity style={styles.saveButton} onPress={handleSaveChanges}>
                <Text style={styles.buttonText5}>Save Changes</Text>
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
        //flex: 1,
    },
    componentHeading: {
        fontSize: 18,
        fontWeight: "bold"
    },
    dummyInfo: {
        marginTop: 5,
        marginBottom: 10,
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
    changeAddressButton: {
        borderColor: '#2196F3',
        borderWidth: 1,
        borderRadius: 25,
        paddingVertical: 10,
        paddingHorizontal: 5,
    },
    buttonText: {
        color: '#2196F3',
        fontSize: 11,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    buttonText5: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    saveButton: {
        backgroundColor: '#2196F3',
        borderRadius: 25,
        paddingVertical: 15,
        marginBottom:5,
        marginHorizontal: 20,
    },
});

export default Address;
