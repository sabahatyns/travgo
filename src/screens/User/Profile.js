import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Profile = ({ darkMode }) => {
const navigation =useNavigation();
    return (
        <View style={[styles.container, darkMode && styles.darkBackground]}>
            {/* Header */}
            <View style={styles.header}>
                <View style={styles.logoContainer}>
                    <Image source={require('../../assets/logo.png')} style={styles.logo} />
                    <Text style={[styles.name, darkMode && styles.darkText]}>John Doe</Text>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('EditProfile')}>
                    <Icon name="create-outline" size={23} color={'grey'} />
                </TouchableOpacity>
            </View>
            
            {/* Profile Info */}
            <View>
                <Text style={[styles.heading, darkMode && styles.darkText]}>Personal info</Text>
                <View style={styles.profileInfo}>
                    <TouchableOpacity style={styles.infoItem} onPress={() => navigation.navigate('Address')}>
                        <Icon name="location-outline" size={24} color={'grey'} />
                        <Text style={[styles.infoText, darkMode ? styles.darkText : null]}>My Address</Text>
                        <Icon name="chevron-forward-outline" size={24} color={'grey'} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.infoItem} onPress={() => navigation.navigate('Payment')}>
                        <Icon name="card-outline" size={24} color={'grey'} />
                        <Text style={[styles.infoText, darkMode ? styles.darkText : null]}>Payment</Text>
                        <Icon name="chevron-forward-outline" size={24} color={'grey'} />
                    </TouchableOpacity>
                </View>
            </View>

            {/* Security */}
            <View>
                <Text style={[styles.heading, darkMode && styles.darkText]}>Security</Text>
                <View style={styles.profileInfo}>
                    <TouchableOpacity style={styles.infoItem} onPress={() => navigation.navigate('ChangePass')}>
                        <Icon name="lock-closed-outline" size={24} color={'grey'} />
                        <Text style={[styles.infoText, darkMode ? styles.darkText : null]}>Change Password</Text>
                        <Icon name="chevron-forward-outline" size={24} color={'grey'} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.infoItem} onPress={() => navigation.navigate('Forgot')}>
                        <Icon name="key-outline" size={24} color={'grey'} />
                        <Text style={[styles.infoText, darkMode ? styles.darkText : null]}>Forgot Password</Text>
                        <Icon name="chevron-forward-outline" size={24} color={'grey'} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.infoItem} onPress={() => navigation.navigate('Security')}>
                        <Icon name="shield-checkmark-outline" size={24} color={'grey'} />
                        <Text style={[styles.infoText, darkMode ? styles.darkText : null]}>Security</Text>
                        <Icon name="chevron-forward-outline" size={24} color={'grey'} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.infoItem} onPress={() => console.log('Navigate to Notifications')}>
                        <Icon name="notifications-outline" size={24} color={'grey'} />
                        <Text style={[styles.infoText, darkMode ? styles.darkText : null]}>Notifications</Text>
                        <Icon name="chevron-forward-outline" size={24} color={'grey'} />
                    </TouchableOpacity>
                </View>
            </View>

            {/* General */}
            <View>
                <Text style={[styles.heading, darkMode && styles.darkText]}>General</Text>
                <View style={styles.profileInfo}>
                    <TouchableOpacity style={styles.infoItem} onPress={() => navigation.navigate('Language')}>
                        <Icon name="language-outline" size={24} color={'grey'} />
                        <Text style={[styles.infoText, darkMode ? styles.darkText : null]}>Language</Text>
                        <Icon name="chevron-forward-outline" size={24} color={'grey'} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.infoItem} onPress={() => console.log('Clear Cache')}>
                        <Icon name="trash-outline" size={24} color={'grey'} />
                        <Text style={[styles.infoText, darkMode ? styles.darkText : null]}>Clear Cache</Text>
                        <Icon name="chevron-forward-outline" size={24} color={'grey'} />
                    </TouchableOpacity>
                </View>
            </View>

            {/* About */}
            <View>
                <Text style={[styles.heading, darkMode && styles.darkText]}>About</Text>
                <View style={styles.profileInfo}>
                    <TouchableOpacity style={styles.infoItem} onPress={() => console.log('Navigate to Legal and Policies')}>
                        <Icon name="document-text-outline" size={24} color={'grey'} />
                        <Text style={[styles.infoText, darkMode ? styles.darkText : null]}>Legal and Policies</Text>
                        <Icon name="chevron-forward-outline" size={24} color={'grey'} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.infoItem} onPress={() => console.log('Navigate to Help and Support')}>
                        <Icon name="help-circle-outline" size={24} color={'grey'} />
                        <Text style={[styles.infoText, darkMode ? styles.darkText : null]}>Help and Support</Text>
                        <Icon name="chevron-forward-outline" size={24} color={'grey'} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.logoutButton} onPress={() => navigation.navigate('Splash')}>
                        <Text style={styles.logoutText}>Logout</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: 'white', // Default background color
    },
    darkBackground: {
        backgroundColor: 'transparent', // Transparent background color in dark mode
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 30,
    },
    logoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    logo: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black', // Default text color
    },
    darkText: {
        color: 'grey', // Text color for dark mode
    },
    heading: {
        fontSize: 15,
        fontWeight: 'bold',
        marginBottom: 15,
    },
    profileInfo: {
        flexDirection: 'column',
    },
    infoItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 15,
    },
    infoText: {
        fontSize: 16,
        flex: 1,
        marginHorizontal: 10,
    },
    logoutButton: {
        backgroundColor: '#2196F3', // Blue background color
        borderRadius: 25,
        paddingVertical: 10,
        alignItems: 'center',
        marginTop: 20,
        marginBottom:5
    },
    logoutText: {
        color: 'white',
        fontWeight: 'bold',
    },
});

export default Profile;
