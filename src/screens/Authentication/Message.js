import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const Message = () => {
    const navigation = useNavigation();

    // Sample data for users
    const users = [
        { id: 1, name: 'Richar Kandowen', image: require('../../assets/img-a.png'), unseenMessages: 3, lastMessage: 'Hey there!' },
        { id: 2, name: 'Jeden Murred', image:  require('../../assets/img-b.png'), unseenMessages: 5, lastMessage: 'How are you?' },
        { id: 3, name: 'Chris Ofile', image:  require('../../assets/img-c.png'), unseenMessages: 1, lastMessage: 'See you later!' },
        { id: 4, name: 'Jemmy Fox', image:  require('../../assets/img-d.png'),unseenMessages: 6, lastMessage: 'Goodbye!' },
    ];

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon name="arrow-back" size={24} color="black" style={styles.backIcon} />
                </TouchableOpacity>
                <Text style={styles.headerText}>Message</Text>
            </View>
            <View style={styles.searchBar}>
                <TextInput style={styles.searchInput} placeholder="Search" />
            </View>
            <ScrollView contentContainerStyle={styles.messagesContainer}>
                {/* Displaying list of users */}
                {users.map(user => (
                    <TouchableOpacity key={user.id} style={styles.userContainer}  onPress={() =>navigation.navigate("Chat")}>
                        <View style={styles.userImageContainer}>
                            <Image source={user.image} style={styles.userImage} />
                        </View>
                        <View style={styles.userInfo}>
                            <View style={{flexDirection:"column"}}>
                            <Text style={styles.userName}>{user.name}</Text>
                            <Text style={styles.lastMessage}>{user.lastMessage}</Text>
                            </View>
                            <Text style={[styles.unseenMessages, { backgroundColor: '#2196F3' }]}>
                                {user.unseenMessages}
                            </Text>
                        </View>

                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
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
    searchBar: {
        paddingHorizontal: 20,
        paddingTop: 10,
        paddingBottom: 10,
    },
    searchInput: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 20,
        paddingVertical: 8,
        paddingHorizontal: 20,
        fontSize: 16,
    },
    messagesContainer: {
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
    userContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    userImageContainer: {
        marginRight: 10,
    },
    userImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    userInfo: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingBottom: 10,
    },
    userName: {
        fontSize: 16,
        fontWeight:"bold"
    },
    unseenMessages: {
        fontSize: 12,
        color: '#fff',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 10,
    },
    lastMessage: {
        color: '#666',
        marginTop: 5,
    },
});

export default Message;
