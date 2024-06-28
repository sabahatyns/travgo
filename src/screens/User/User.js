// User.js
import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Header from '../../components/Header/Header';
import Profile from './Profile';

const User = () => {
    const [darkMode, setDarkMode] = useState(""); // State for dark mode

    return (
        <View style={[styles.container, darkMode && styles.darkBackground]}>
            <Header darkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)} />
            <ScrollView showsVerticalScrollIndicator={false}>
                <Profile darkMode={darkMode} />
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    darkBackground: {
        backgroundColor: '#000', // Change background color to black in dark mode
    },
});

export default User;
