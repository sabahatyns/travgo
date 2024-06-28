import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Header from '../../components/Header/Header';
import TopBar from './Topbar';
import DrawerScreen from '../../Navigation/Drawer';

const HomeScreen = () => {
    const [darkMode, setDarkMode] = useState(""); // State for dark mode

    return (
        <View style={[styles.container, darkMode && styles.darkBackground]}>
            <Header darkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)} />
                <ScrollView showsVerticalScrollIndicator={false}>
            <TopBar name="Andy" darkMode={darkMode} />
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

export default HomeScreen;
