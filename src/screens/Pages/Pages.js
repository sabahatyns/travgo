import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';

const Pages = ({ navigation }) => {
    const navigateToPage = (pageName) => {
        navigation.navigate(pageName);
    };

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon name="arrow-left" size={24} color="white" style={styles.icon} />
                </TouchableOpacity>
                <Text style={styles.headerText}>Pages</Text>
                <View style={{ flex: 1 }} />
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                {/* Authentication Section */}
                <View style={styles.section}>
                    <Text style={styles.sectionHeading}>Authentication</Text>
                    <TouchableOpacity style={styles.item} onPress={() => navigateToPage('Signin')}>
                        <View style={{ flexDirection: "row" }}>
                            <Icon name="user-plus" size={20} color="#2196F3" style={styles.icon} />
                            <Text style={styles.itemText}>Sign Up</Text>
                        </View>
                        <View>
                            <Icon name="chevron-right" size={10} color="black" style={styles.icon} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.item} onPress={() => navigateToPage('Signin')}>
                        <View style={{ flexDirection: "row" }}>
                            <Icon name="envelope" size={20} color="#2196F3" style={styles.icon} />
                            <Text style={styles.itemText}>Sign Up With Email</Text>
                        </View>
                        <Icon name="chevron-right" size={10} color="black" style={styles.icon} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.item} onPress={() => navigateToPage('Login')}>
                        <View style={{ flexDirection: "row" }}>
                            <Icon name="sign-in" size={20} color="#2196F3" style={styles.icon} />
                            <Text style={styles.itemText}>Sign In</Text>
                        </View>
                        <Icon name="chevron-right" size={10} color="black" style={styles.icon} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.item} onPress={() => navigateToPage('Register')}>
                        <View style={{ flexDirection: "row" }}>
                            <Icon name="envelope-open" size={20} color="#2196F3" style={styles.icon} />
                            <Text style={styles.itemText}>Sign In With Email</Text>
                        </View>
                        <Icon name="chevron-right" size={10} color="black" style={styles.icon} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.item} onPress={() => navigateToPage('ChangePass')}>
                        <View style={{ flexDirection: "row" }}>
                            <Icon name="lock" size={20} color="#2196F3" style={styles.icon} />
                            <Text style={styles.itemText}>Create New Password</Text>
                        </View>
                        <Icon name="chevron-right" size={10} color="black" style={styles.icon} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.item} onPress={() => navigateToPage('Forgot')}>
                        <View style={{ flexDirection: "row" }}>
                            <Icon name="question" size={20} color="#2196F3" style={styles.icon} />
                            <Text style={styles.itemText}>Forgot Password</Text>
                        </View>
                        <Icon name="chevron-right" size={10} color="black" style={styles.icon} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.item} onPress={() => navigateToPage('EnterOTP')}>
                        <View style={{ flexDirection: "row" }}>
                            <Icon name="key" size={20} color="#2196F3" style={styles.icon} />
                            <Text style={styles.itemText}>Enter OTP</Text>
                        </View>
                        <Icon name="chevron-right" size={10} color="black" style={styles.icon} />
                    </TouchableOpacity>
                </View>
                {/* Home section */}
                <View style={styles.section}>
                    <Text style={styles.sectionHeading}>Home</Text>
                    <TouchableOpacity style={styles.item} onPress={() => navigateToPage('Home')}>
                        <View style={{ flexDirection: "row" }}>
                            <Icon name="home" size={20} color="#2196F3" style={styles.icon} />
                            <Text style={styles.itemText}>Home</Text>
                        </View>
                        <View>
                            <Icon name="chevron-right" size={10} color="black" style={styles.icon} />
                        </View>
                    </TouchableOpacity>
                    {/* Add other items if needed */}
                </View>
                {/* Chat section */}
                <View style={styles.section}>
                    <Text style={styles.sectionHeading}>Chat</Text>
                    <TouchableOpacity style={styles.item} onPress={() => navigateToPage('Chat')}>
                        <View style={{ flexDirection: "row" }}>
                            <Icon name="comments" size={20} color="#2196F3" style={styles.icon} />
                            <Text style={styles.itemText}>Chat Page</Text>
                        </View>
                        <View>
                            <Icon name="chevron-right" size={10} color="black" style={styles.icon} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.item} onPress={() => navigateToPage('Message')}>
                        <View style={{ flexDirection: "row" }}>
                            <Icon name="envelope" size={20} color="#2196F3" style={styles.icon} />
                            <Text style={styles.itemText}>Message Page</Text>
                        </View>
                        <View>
                            <Icon name="chevron-right" size={10} color="black" style={styles.icon} />
                        </View>
                    </TouchableOpacity>
                    {/* Add other chat items if needed */}
                </View>
                {/* Call section */}
                <View style={styles.section}>
                    <Text style={styles.sectionHeading}>Call</Text>
                    <TouchableOpacity style={styles.item} onPress={() => navigateToPage('AudioCall')}>
                        <View style={{ flexDirection: "row" }}>
                            <Icon name="phone" size={20} color="#2196F3" style={styles.icon} />
                            <Text style={styles.itemText}>Audio Call Page</Text>
                        </View>
                        <View>
                            <Icon name="chevron-right" size={10} color="black" style={styles.icon} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.item} onPress={() => navigateToPage('VideoCall')}>
                        <View style={{ flexDirection: "row" }}>
                            <Icon name="video-camera" size={20} color="#2196F3" style={styles.icon} />
                            <Text style={styles.itemText}>Video Call Page</Text>
                        </View>
                        <View>
                            <Icon name="chevron-right" size={10} color="black" style={styles.icon} />
                        </View>
                    </TouchableOpacity>
                    {/* Add other call items if needed */}
                </View>
                {/* Profile section */}
                <View style={styles.section}>
                    <Text style={styles.sectionHeading}>Profile</Text>
                    <TouchableOpacity style={styles.item} onPress={() => navigateToPage('user')}>
                        <View style={{ flexDirection: "row" }}>
                            <Icon name="user" size={20} color="#2196F3" style={styles.icon} />
                            <Text style={styles.itemText}>User Profile Page</Text>
                        </View>
                        <View>
                            <Icon name="chevron-right" size={10} color="black" style={styles.icon} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.item} onPress={() => navigateToPage('EditProfile')}>
                        <View style={{ flexDirection: "row" }}>
                            <Icon name="info-circle" size={20} color="#2196F3" style={styles.icon} />
                            <Text style={styles.itemText}>User Info Page</Text>
                        </View>
                        <View>
                            <Icon name="chevron-right" size={10} color="black" style={styles.icon} />
                        </View>
                    </TouchableOpacity>
                </View>
                {/* Add other profile items if needed */}
                {/* profile setting */}
                <View style={styles.section}>
                    <Text style={styles.sectionHeading}>Profile Setting</Text>
                    <TouchableOpacity style={styles.item} onPress={() => navigateToPage('Address')}>
                        <View style={{ flexDirection: "row" }}>
                            <Icon name="user" size={20} color="#2196F3" style={styles.icon} />
                            <Text style={styles.itemText}>Address Page</Text>
                        </View>
                        <View>
                            <Icon name="chevron-right" size={10} color="black" style={styles.icon} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.item} onPress={() => navigateToPage('UserInfo')}>
                        <View style={{ flexDirection: "row" }}>
                            <Icon name="address-book" size={20} color="#2196F3" style={styles.icon} />
                            <Text style={styles.itemText}>Add Address Page</Text>
                        </View>
                        <View>
                            <Icon name="chevron-right" size={10} color="black" style={styles.icon} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.item} onPress={() => navigateToPage('Payment')}>
                        <View style={{ flexDirection: "row" }}>
                            <Icon name="credit-card" size={20} color="#2196F3" style={styles.icon} />
                            <Text style={styles.itemText}>Add Card Page</Text>
                        </View>
                        <View>
                            <Icon name="chevron-right" size={10} color="black" style={styles.icon} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.item} onPress={() => navigateToPage('ChangePass')}>
                        <View style={{ flexDirection: "row" }}>
                            <Icon name="lock" size={20} color="#2196F3" style={styles.icon} />
                            <Text style={styles.itemText}>Change Password Page</Text>
                        </View>
                        <View>
                            <Icon name="chevron-right" size={10} color="black" style={styles.icon} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.item} onPress={() => navigateToPage('Forgot')}>
                        <View style={{ flexDirection: "row" }}>
                            <Icon name="question-circle" size={20} color="#2196F3" style={styles.icon} />
                            <Text style={styles.itemText}>Forgot Password Page</Text>
                        </View>
                        <View>
                            <Icon name="chevron-right" size={10} color="black" style={styles.icon} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.item} onPress={() => navigateToPage('Notification')}>
                        <View style={{ flexDirection: "row" }}>
                            <Icon name="bell" size={20} color="#2196F3" style={styles.icon} />
                            <Text style={styles.itemText}>Notification Page</Text>
                        </View>
                        <View>
                            <Icon name="chevron-right" size={10} color="black" style={styles.icon} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.item} onPress={() => navigateToPage('UserInfo')}>
                        <View style={{ flexDirection: "row" }}>
                            <Icon name="shield" size={20} color="#2196F3" style={styles.icon} />
                            <Text style={styles.itemText}>Security Page</Text>
                        </View>
                        <View>
                            <Icon name="chevron-right" size={10} color="black" style={styles.icon} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.item} onPress={() => navigateToPage('Language')}>
                        <View style={{ flexDirection: "row" }}>
                            <Icon name="language" size={20} color="#2196F3" style={styles.icon} />
                            <Text style={styles.itemText}>Language Page</Text>
                        </View>
                        <View>
                            <Icon name="chevron-right" size={10} color="black" style={styles.icon} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.item} onPress={() => navigateToPage('Payment')}>
                        <View style={{ flexDirection: "row" }}>
                            <Icon name="credit-card-alt" size={20} color="#2196F3" style={styles.icon} />
                            <Text style={styles.itemText}>Payment Page</Text>
                        </View>
                        <View>
                            <Icon name="chevron-right" size={10} color="black" style={styles.icon} />
                        </View>
                    </TouchableOpacity>
                </View>
                {/* vcation */}
                <View style={styles.section}>
                    <Text style={styles.sectionHeading}>Vacation</Text>
                    <TouchableOpacity style={styles.item} onPress={() => navigateToPage('Address')}>
                        <View style={{ flexDirection: "row" }}>
                            <Icon name="user" size={20} color="#2196F3" style={styles.icon} />
                            <Text style={styles.itemText}>Vacation detail Page</Text>
                        </View>
                        <View>
                            <Icon name="chevron-right" size={10} color="black" style={styles.icon} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.item} onPress={() => navigateToPage('fav')}>
                        <View style={{ flexDirection: "row" }}>
                            <Icon name="address-book" size={20} color="#2196F3" style={styles.icon} />
                            <Text style={styles.itemText}>Wishlist Page</Text>
                        </View>
                        <View>
                            <Icon name="chevron-right" size={10} color="black" style={styles.icon} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.item} onPress={() => navigateToPage('Explore')}>
                        <View style={{ flexDirection: "row" }}>
                            <Icon name="credit-card" size={20} color="#2196F3" style={styles.icon} />
                            <Text style={styles.itemText}>Explore Page</Text>
                        </View>
                        <View>
                            <Icon name="chevron-right" size={10} color="black" style={styles.icon} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.item} onPress={() => navigateToPage('ChangePass')}>
                        <View style={{ flexDirection: "row" }}>
                            <Icon name="lock" size={20} color="#2196F3" style={styles.icon} />
                            <Text style={styles.itemText}>Checkout Vacation Page</Text>
                        </View>
                        <View>
                            <Icon name="chevron-right" size={10} color="black" style={styles.icon} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.item} onPress={() => navigateToPage('Explore')}>
                        <View style={{ flexDirection: "row" }}>
                            <Icon name="question-circle" size={20} color="#2196F3" style={styles.icon} />
                            <Text style={styles.itemText}>Search Result Page</Text>
                        </View>
                        <View>
                            <Icon name="chevron-right" size={10} color="black" style={styles.icon} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.item} onPress={() => navigateToPage('UserInfo')}>
                        <View style={{ flexDirection: "row" }}>
                            <Icon name="bell" size={20} color="#2196F3" style={styles.icon} />
                            <Text style={styles.itemText}>Location Page</Text>
                        </View>
                        <View>
                            <Icon name="chevron-right" size={10} color="black" style={styles.icon} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.item} onPress={() => navigateToPage('UserInfo')}>
                        <View style={{ flexDirection: "row" }}>
                            <Icon name="shield" size={20} color="#2196F3" style={styles.icon} />
                            <Text style={styles.itemText}>Booked Ticket Page</Text>
                        </View>
                        <View>
                            <Icon name="chevron-right" size={10} color="black" style={styles.icon} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.item} onPress={() => navigateToPage('UserInfo')}>
                        <View style={{ flexDirection: "row" }}>
                            <Icon name="language" size={20} color="#2196F3" style={styles.icon} />
                            <Text style={styles.itemText}>Ticket Detail Page</Text>
                        </View>
                        <View>
                            <Icon name="chevron-right" size={10} color="black" style={styles.icon} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.item} onPress={() => navigateToPage('Explore')}>
                        <View style={{ flexDirection: "row" }}>
                            <Icon name="credit-card-alt" size={20} color="#2196F3" style={styles.icon} />
                            <Text style={styles.itemText}>Tour Guide Page</Text>
                        </View>
                        <View>
                            <Icon name="chevron-right" size={10} color="black" style={styles.icon} />
                        </View>
                    </TouchableOpacity>
                </View>
{/* others */}
<View style={styles.section}>
                    <Text style={styles.sectionHeading}>Others</Text>
                    <TouchableOpacity style={styles.item} onPress={() => navigateToPage('Splash')}>
                        <View style={{ flexDirection: "row" }}>
                            <Icon name="user" size={20} color="#2196F3" style={styles.icon} />
                            <Text style={styles.itemText}>Welcome</Text>
                        </View>
                        <View>
                            <Icon name="chevron-right" size={10} color="black" style={styles.icon} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.item} onPress={() => navigateToPage('Notification')}>
                        <View style={{ flexDirection: "row" }}>
                            <Icon name="info-circle" size={20} color="#2196F3" style={styles.icon} />
                            <Text style={styles.itemText}>Notification</Text>
                        </View>
                        <View>
                            <Icon name="chevron-right" size={10} color="black" style={styles.icon} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.item} onPress={() => navigateToPage('Home')}>
                        <View style={{ flexDirection: "row" }}>
                            <Icon name="info-circle" size={20} color="#2196F3" style={styles.icon} />
                            <Text style={styles.itemText}>Review</Text>
                        </View>
                        <View>
                            <Icon name="chevron-right" size={10} color="black" style={styles.icon} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.item} onPress={() => navigateToPage('user')}>
                        <View style={{ flexDirection: "row" }}>
                            <Icon name="user" size={20} color="#2196F3" style={styles.icon} />
                            <Text style={styles.itemText}>Legal and Policies</Text>
                        </View>
                        <View>
                            <Icon name="chevron-right" size={10} color="black" style={styles.icon} />
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#2196F3',
        padding: 10,
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        marginLeft: 10,
    },
    section: {
        marginTop: 20,
        paddingHorizontal: 20,
    },
    sectionHeading: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 15,
    },
    itemText: {
        fontSize: 16,
        color: '#333333',
        marginLeft: 10,
    },
    icon: {
        marginRight: 10,
    },
});

export default Pages;
