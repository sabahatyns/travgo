import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import CategoryA from './All';
import CategoryB from './Popular';
import CategoryC from './Recommended';
import CategoryD from './Frequent';

const Find = ({ darkMode }) => { // Receive darkMode prop here
    const [activeCategory, setActiveCategory] = useState('A'); // State for active category

    // Function to change active category
    const changeCategory = (category) => {
        setActiveCategory(category);
    };

    // Function to render the active category component
    const renderActiveCategory = () => {
        switch (activeCategory) {
            case 'A':
                return <CategoryA darkMode={darkMode} />;
            case 'B':
                return <CategoryB darkMode={darkMode} />;
            case 'C':
                return <CategoryC darkMode={darkMode} />;
            case 'D':
                return <CategoryD darkMode={darkMode} />;
            default:
                return null;
        }
    };

    return (
        <View style={[styles.container, darkMode && styles.darkBackground]}>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={[
                        styles.button,
                        activeCategory === 'A' && styles.activeButton,
                        darkMode && styles.darkButton
                    ]}
                    onPress={() => changeCategory('A')}
                >
                    <Text style={[styles.buttonText, darkMode && styles.darkButtonText]}>All</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[
                        styles.button,
                        activeCategory === 'B' && styles.activeButton,
                        darkMode && styles.darkButton
                    ]}
                    onPress={() => changeCategory('B')}
                >
                    <Text style={[styles.buttonText, darkMode && styles.darkButtonText]}>Popular</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[
                        styles.button,
                        activeCategory === 'C' && styles.activeButton,
                        darkMode && styles.darkButton
                    ]}
                    onPress={() => changeCategory('C')}
                >
                    <Text style={[styles.buttonText, darkMode && styles.darkButtonText]}>Recommended</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[
                        styles.button,
                        activeCategory === 'D' && styles.activeButton,
                        darkMode && styles.darkButton
                    ]}
                    onPress={() => changeCategory('D')}
                >
                    <Text style={[styles.buttonText, darkMode && styles.darkButtonText]}>Frequent</Text>
                </TouchableOpacity>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                {renderActiveCategory()}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    darkBackground: {
        backgroundColor: '#000',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
    button: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ddd',
        borderRadius: 5,
        marginHorizontal: 5,
        paddingVertical: 5,
    },
    activeButton: {
        backgroundColor: '#2196F3',
    },
    darkButton: {
        backgroundColor: '#555',
    },
    buttonText: {
        fontWeight: 'bold',
        fontSize: 11,
        color: '#333',
        paddingHorizontal: 5,
    },
    darkButtonText: {
        color: 'white',
    },
    focusedButton: {
        backgroundColor: '#2196F3', // Blue background color
    },
});

export default Find;
