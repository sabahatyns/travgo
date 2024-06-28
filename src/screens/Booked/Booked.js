import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import CategoryB from './Popular';
import CategoryD from './Frequent';
import Header from '../../components/Header/Header';

const Booked = ({ darkMode }) => {
    const [activeCategory, setActiveCategory] = useState('A');

    const changeCategory = (category) => {
        setActiveCategory(category);
    };

    const renderActiveCategory = () => {
        switch (activeCategory) {
            case 'B':
                return <CategoryB darkMode={darkMode} />;
            case 'D':
                return <CategoryD darkMode={darkMode} />;
            default:
                return null;
        }
    };

    return (
        <View style={[styles.container, darkMode && styles.darkBackground]}>
            <Header title="Booked" /> 
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={[
                        styles.button,
                        activeCategory === 'B' && styles.activeButton,
                        darkMode && styles.darkButton
                    ]}
                    onPress={() => changeCategory('B')}
                >
                    <Text style={[styles.buttonText, darkMode && styles.darkButtonText]}>Booked</Text>
                </TouchableOpacity>
               
                <TouchableOpacity
                    style={[
                        styles.button,
                        activeCategory === 'D' && styles.activeButton,
                        darkMode && styles.darkButton
                    ]}
                    onPress={() => changeCategory('D')}
                >
                    <Text style={[styles.buttonText, darkMode && styles.darkButtonText]}>History</Text>
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

export default Booked;
