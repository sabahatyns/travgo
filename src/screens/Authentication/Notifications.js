import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

const Notification = () => {
    const navigation =useNavigation();
    return (
        <View style={styles.container}>

            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon name="arrow-back" size={24} color="black" style={styles.backIcon} />
                </TouchableOpacity>
                <Text style={styles.headerText}>Notifications</Text>
            </View>
            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.notification}>
                    <View style={styles.notificationIcon}>
                        <Feather name="message-circle" size={24} color="#2196F3" />
                    </View>
                    <View style={styles.notificationContent}>
                        <Text style={styles.notificationText}>There is an incoming message from Richard Mandowen</Text>
                        <Text style={styles.notificationTimestamp}>2 hours Ago</Text>
                    </View>
                </View>

                <View style={styles.notification}>
                    <View style={styles.notificationIcon}>
                        <Feather name="phone-call" size={24} color="#2196F3" />
                    </View>
                    <View style={styles.notificationContent}>
                        <Text style={styles.notificationText}>Outgoing call from Richard Kandowen</Text>
                        <Text style={styles.notificationTimestamp}>3 hours Ago</Text>
                    </View>
                </View>

                <View style={styles.notification}>
                    <View style={styles.notificationIcon}>
                        <Icon name="md-calendar" size={24} color="#2196F3" />
                    </View>
                    <View style={styles.notificationContent}>
                        <Text style={styles.notificationText}>Do not forget to schedule your vacation to the Taj Mahal, August 25, 2022</Text>
                        <Text style={styles.notificationTimestamp}>4 hours Ago</Text>
                    </View>
                </View>

                <View style={styles.notification}>
                    <View style={styles.notificationIcon}>
                        <Feather name="check-circle" size={24} color="#2196F3" />
                    </View>
                    <View style={styles.notificationContent}>
                        <Text style={styles.notificationText}>Your payment for the holiday ticket to the Taj Mahal was successful</Text>
                        <Text style={styles.notificationTimestamp}>1 day Ago</Text>
                    </View>
                </View>

                <View style={styles.notification}>
                    <View style={styles.notificationIcon}>
                        <Feather name="check-circle" size={24} color="#2196F3" />
                    </View>
                    <View style={styles.notificationContent}>
                        <Text style={styles.notificationText}>Your payment for booking The Lalit New Delhi hotel was successful</Text>
                        <Text style={styles.notificationTimestamp}>1 day Ago</Text>
                    </View>
                </View>
            </ScrollView>
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
        fontSize: 16,
        fontWeight: 'bold',
    },
    notification: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    notificationIcon: {
        marginRight: 10,
    },
    notificationContent: {
        flex: 1,
    },
    notificationText: {
        fontSize: 16,
        marginBottom: 5,
    },
    notificationTimestamp: {
        fontSize: 12,
        color: '#666',
    },
});

export default Notification;
