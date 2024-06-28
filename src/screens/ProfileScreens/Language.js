import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

const Language = () => {
    const navigation = useNavigation();
    const [selectedLanguage, setSelectedLanguage] = useState('English'); // State to track selected language

    const handleSaveChanges = () => {
        // Save changes logic
        navigation.goBack();
    };

    const handleLanguageSelection = (language) => {
        setSelectedLanguage(language);
    };

    // Array of language options
    const languages = [
        'English',
        'Spanish',
        'French',
        'German',
        'Chinese',
        'Japanese',
        'Korean',
        'Russian',
        'Italian',
        'Portuguese',
        'Arabic',
        'Hindi',
        'Bengali',
        'Urdu',
        'Turkish',
        'Dutch',
        'Swedish',
        'Norwegian',
        'Finnish',
        'Danish',
    ];

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon name="arrow-back" size={24} color="black" style={styles.backIcon} />
                </TouchableOpacity>
                <Text style={styles.headerText}>Language</Text>
            </View>
            <Text style={styles.heading}>Select Languages:</Text>
            <ScrollView showsVerticalScrollIndicator={false}>
                {languages.map((language, index) => (
                    <TouchableOpacity
                        key={index}
                        style={[styles.languageOption, selectedLanguage === language && styles.selectedLanguage]}
                        onPress={() => handleLanguageSelection(language)}>
                        <Text style={styles.languageText}>{language}</Text>
                        {selectedLanguage === language && (
                            <Feather name="check-circle" size={24} color="#2196F3" style={styles.checkIcon} />
                        )}
                    </TouchableOpacity>
                ))}
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
    heading: {
        fontSize: 18,
        fontWeight: 'bold',
        paddingHorizontal: 20,
        marginTop: 10,
        marginVertical:5
    },
    languageOption: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        marginHorizontal: 6,
    },
    selectedLanguage: {
        backgroundColor: '#f0f0f0',
    },
    languageText: {
        fontSize: 16,
        flex: 1,
    },
    checkIcon: {
        marginLeft: 10,
    },
    saveButton: {
        backgroundColor: '#2196F3',
        borderRadius: 25,
        paddingVertical: 15,
        marginHorizontal: 20,
        marginBottom: 5,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default Language;
