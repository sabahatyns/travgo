import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Dimensions } from 'react-native';
import ImageSlider from 'react-native-image-slider';
import Icon from 'react-native-vector-icons/FontAwesome';
import Header from '../../components/Header/Header';

const Splash = ({ navigation }) => {
    const [darkMode, setDarkMode] = useState("");
    const [currentPage, setCurrentPage] = useState(0);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    const images = [
        require('../../assets/slide-a.jpeg'),
        require('../../assets/slide-b.jpeg'),
        require('../../assets/slide-c.jpeg'),
        require('../../assets/slide-d.jpeg'),
    ];

    const texts = [
        'Welcome to Slide A',
        'Welcome to Slide B',
        'Welcome to Slide C',
    ];

    const deviceWidth = Dimensions.get('window').width;
    const imageWidth = deviceWidth;
    const imageHeight = deviceWidth + 35;

    const handleGetStarted = () => {
        // Navigate to the register screen when "Get Started" button is clicked
        navigation.navigate('Register');
    };

    const handleRegister = () => {
        // Navigate to the register screen when "Register" text is clicked
        navigation.navigate('Register');
    };

    return (
        <View style={styles.container}>
            <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            <ImageSlider
                images={images}
                customSlide={({ index, item, style, width }) => (
                    <View key={index} style={[style, styles.slideContainer, darkMode && styles.darkModeContainer]}>
                        <Image source={item} style={{ width: imageWidth, height: imageHeight, }} />
                        <View style={styles.textContainer}>
                            <Text style={[styles.heading, darkMode && styles.darkText]}>Best travel destination in the world</Text>
                            <Text style={darkMode && styles.darkText}>Lorem ipsum dolor sit amet</Text>
                            <Text style={darkMode && styles.darkText}>Lorem ipsum dolor sit ametLorem ipsum dolor sit amet</Text>
                            {index === images.length - 1 && (
                                <TouchableOpacity onPress={handleGetStarted} style={styles.getStartedButton}>
                                    <Text style={styles.getStartedText}>Get Started</Text>
                                </TouchableOpacity>
                            )}
                            {index === images.length - 1 && (
                                <View style={{ flexDirection: "row" }}>
                                    <Text style={[styles.registerText, darkMode && styles.darkText]}>Do not have account?</Text>
                                    <TouchableOpacity onPress={handleRegister}>
                                        <Text style={[styles.registerText, styles.registerTextLink,]}> Register</Text>
                                    </TouchableOpacity>
                                </View>
                            )}
                        </View>
                    </View>
                )}
                customButtons={(position, move) => (
                    <TouchableOpacity onPress={() => move(position + 1)} style={styles.skipButton}>
                        <Text style={styles.skipText}>Skip</Text>
                        <Icon name="angle-right" size={24} color="#007bff" style={styles.forwardIcon} />
                    </TouchableOpacity>
                )}
                onPositionChanged={setCurrentPage}
                style={{ backgroundColor: darkMode ? '#222' : 'white' }} // Set the background color based on dark mode
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    slideContainer: {
        alignItems: 'center',
    },
    darkModeContainer: {
        backgroundColor: '#222', // Dark mode background color
    },
    textContainer: {
        paddingHorizontal: 16,
        marginTop: 16,
        alignItems: 'center',
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 8,
        color: '#000',
    },
    darkText: {
        color: 'white', // Dark mode text color
    },
    skipButton: {
        position: 'absolute',
        bottom: 24,
        right: 16,
        flexDirection: 'row',
        alignItems: 'center',
    },
    skipText: {
        marginRight: 8,
        color: '#007bff',
    },
    forwardIcon: {
        width: 24,
        height: 24,
    },
    getStartedButton: {
        backgroundColor: '#2196F3',
        paddingVertical: 12,
        paddingHorizontal: 64,
        borderRadius: 55,
        marginTop: 16,
    },
    getStartedText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    registerText: {
        marginTop: 16,
        fontSize: 16,
        fontWeight: 'bold',
    },
    registerTextLink: {
        color: '#007bff',
    },
});

export default Splash;
