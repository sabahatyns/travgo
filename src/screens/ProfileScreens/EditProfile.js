import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/Ionicons';
import ImagePicker from 'react-native-image-crop-picker';

const EditProfileScreen = () => {
    const navigation = useNavigation();
    const [profilePicUri, setProfilePicUri] = useState(null);

    const handleSaveChanges = () => {
        // Assuming you have state variables to hold user data like phone, email, address, e
    navigation.goBack();
        // Navigate back to User Profile screen and pass updated user data as params
    };

    const handleEditProfilePicture = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
        }).then(image => {
            setProfilePicUri(image.path);
        }).catch(error => {
            console.log('ImagePicker Error: ', error);
        });
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon name="arrow-back" size={24} color="black" style={styles.backIcon} />
                </TouchableOpacity>
                <Text style={styles.headerText}>Edit Profile</Text>
            </View>
            <View style={styles.profilePicContainer}>
                {profilePicUri ? (
                    <Image source={{ uri: profilePicUri }} style={styles.profilePic} />
                ) : (
                    <View style={styles.profilePic}>
                    <Image source={require('../../assets/avatar.png')}  style={styles.profilePic} />
                    </View>
                )}
                <TouchableOpacity style={styles.editIconContainer} onPress={handleEditProfilePicture}>
                    <Feather name="edit-2" size={20} color='white'/>
                </TouchableOpacity>
            </View>
            <View style={{ paddingHorizontal: 10 }}>
                <TextInput style={styles.input} placeholder="First Name" />
                <TextInput style={styles.input} placeholder="Last Name" />
                <TextInput style={styles.input} placeholder="E-mail" />
                <TextInput style={styles.input} placeholder="Date of birth" />
                <TextInput style={styles.input} placeholder="Location" />
            </View>
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
    profilePicContainer: {
        alignItems: 'center',
        marginVertical: 20,
    },
    profilePic: {
        width: 120,
        height: 120,
        borderRadius: 75,
        backgroundColor: '#ccc',
        justifyContent: 'center',
        alignItems: 'center',
    },
    editIconContainer: {
        position: 'absolute',
        bottom: -12,
        backgroundColor: '#2196F3', // Blue background color
        borderRadius: 20,
        padding: 5,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius:25,
        padding: 10,
        marginBottom: 20,
    },
    saveButton: {
        backgroundColor: '#2196F3', // Blue background color
        borderRadius: 25,
        paddingVertical: 15,
        marginHorizontal: 20,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default EditProfileScreen;
