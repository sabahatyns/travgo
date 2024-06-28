import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView ,TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Chat = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon name="arrow-back" size={24} color="black" style={styles.backIcon} />
                </TouchableOpacity>
                <Text style={styles.headerText}>Chat</Text>
            </View>
            <ScrollView contentContainerStyle={styles.messagesContainer}>
                {/* Sample Chat Messages */}
                <View style={[styles.messageBubble, styles.senderMessage]}>
                    <Text style={styles.messageText}>Hi there! How are you?</Text>
                    <Text style={styles.messageTime}>10:00 AM</Text>
                </View>
                <View style={[styles.messageBubble, styles.receiverMessage]}>
                    <Text style={styles.messageText}>Hey! I'm doing great. Thanks!</Text>
                    <Text style={styles.messageTime}>10:05 AM</Text>
                </View>
                <View style={[styles.messageBubble, styles.senderMessage]}>
                    <Text style={styles.messageText}>That's good to hear!</Text>
                    <Text style={styles.messageTime}>10:10 AM</Text>
                </View>
                <View style={[styles.messageBubble, styles.receiverMessage]}>
                    <Text style={styles.messageText}>Yeah! So, what's up?</Text>
                    <Text style={styles.messageTime}>10:15 AM</Text>
                </View>
                <View style={[styles.messageBubble, styles.senderMessage]}>
                    <Text style={styles.messageText}>Not much, just chilling. What about you?</Text>
                    <Text style={styles.messageTime}>10:20 AM</Text>
                </View>
                <View style={[styles.messageBubble, styles.receiverMessage]}>
                    <Text style={styles.messageText}>Same here. Let's catch up sometime!</Text>
                    <Text style={styles.messageTime}>10:25 AM</Text>
                </View>
            </ScrollView>
            <View style={styles.inputContainer}>
                <TextInput style={styles.input} placeholder="Type your message..." />
                <TouchableOpacity style={styles.sendButton}>
                    <Icon name="send" size={24} color="white" />
                </TouchableOpacity>
            </View>
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
    messagesContainer: {
        paddingVertical: 10,
        paddingHorizontal:6
    },
    messageBubble: {
        maxWidth: '80%',
        padding: 10,
        borderRadius: 10,
        marginVertical: 5,
    },
    senderMessage: {
        alignSelf: 'flex-end',
        backgroundColor: '#2196F3',
    },
    receiverMessage: {
        alignSelf: 'flex-start',
        backgroundColor: '#E5E5EA',
    },
    messageText: {
        fontSize: 16,
    },
    messageTime: {
        fontSize: 12,
        color: '#666',
        marginTop: 5,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderTopWidth: 1,
        borderTopColor: '#ccc',
        padding: 10,
    },
    input: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 20,
        fontSize: 16,
        marginRight: 10,
    },
    sendButton: {
        backgroundColor: '#2196F3',
        borderRadius: 20,
        padding: 10,
    },
});

export default Chat;
