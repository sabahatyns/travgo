import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, TextInput, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import DrawerScreen from '../../Navigation/Drawer';

const TopBar = ({ name, darkMode }) => {
    return (
        <View style={[styles.container, darkMode && styles.darkContainer]}>
            {/* <DrawerScreen/> */}
            <View style={styles.row}>
                <View style={styles.left}>
                    <Image source={require('../../assets/logo.png')} style={styles.image} />
                    <Text style={[styles.name, darkMode && styles.whiteText]}>Hi, {name}</Text>
                </View>
                <View style={styles.right}>
                    <TouchableOpacity style={styles.iconContainer}>
                        <Icon name="bell" size={20} color={darkMode ? "white" : "black"} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.iconContainer}>
                        <Icon name="ellipsis-v" size={20} color={darkMode ? "white" : "black"} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={[styles.searchContainer, { backgroundColor: darkMode ? "grey" : "#f0f0f0" }]}>
                <Icon name="search" size={20} color={darkMode ? "white" : "grey"} style={styles.searchIcon} />
                <TextInput
                    style={styles.input}
                    placeholder="Search"
                    placeholderTextColor={darkMode ? "white" : "grey"}
                />
            </View>
            <View style={styles.iconRow}>
                <TouchableOpacity style={[styles.icon, { backgroundColor: darkMode ? "grey" : "#f0f0f0" }]}>
                    <Image source={require('../../assets/airport.png')} style={styles.iconImage} />
                </TouchableOpacity>
                <TouchableOpacity style={[styles.icon, { backgroundColor: darkMode ? "grey" : "#f0f0f0" }]}>
                    <Image source={require('../../assets/car-rental.png')} style={styles.iconImage} />
                </TouchableOpacity>
                <TouchableOpacity style={[styles.icon, { backgroundColor: darkMode ? "grey" : "#f0f0f0" }]}>
                    <Image source={require('../../assets/hotel.png')} style={styles.iconImage} />
                </TouchableOpacity>
                <TouchableOpacity style={[styles.icon, { backgroundColor: darkMode ? "grey" : "#f0f0f0" }]}>
                    <Image source={require('../../assets/category.png')} style={styles.iconImage} />
                </TouchableOpacity>
            </View>
            <View style={styles.frequentSection}>
                <Text style={[styles.sectionHeader, darkMode && styles.whiteText]}>Frequently Visited</Text>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <View style={styles.placesRow}>
                        <View style={styles.place}>
                            <Image source={require('../../assets/item-a.png')} style={styles.placeImage} />
                            <Text style={[styles.placeName, darkMode && styles.whiteText]}>Place 1</Text>
                            <View style={styles.placeDetails}>
                                <View style={styles.locationContainer}>
                                    <Icon name="map-marker" size={8} color={darkMode ? "white" : "grey"} style={styles.locationIcon} />
                                    <Text style={[styles.placeLocation, darkMode && styles.whiteText]}>Location</Text>
                                </View>
                                <View style={styles.priceRatingContainer}>
                                    <Text style={[styles.price, darkMode && styles.whiteText]}>$100</Text>
                                    <Text style={[styles.rating, darkMode && styles.whiteText]}>(4.5)</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.place}>
                            <Image source={require('../../assets/item-b.png')} style={styles.placeImage} />
                            <Text style={[styles.placeName, darkMode && styles.whiteText]}>Place 1</Text>
                            <View style={styles.placeDetails}>
                                <View style={styles.locationContainer}>
                                    <Icon name="map-marker" size={8} color={darkMode ? "white" : "grey"} style={styles.locationIcon} />
                                    <Text style={[styles.placeLocation, darkMode && styles.whiteText]}>Location</Text>
                                </View>
                                <View style={styles.priceRatingContainer}>
                                    <Text style={[styles.price, darkMode && styles.whiteText]}>$100</Text>
                                    <Text style={[styles.rating, darkMode && styles.whiteText]}>(4.5)</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.place}>
                            <Image source={require('../../assets/item-a.png')} style={styles.placeImage} />
                            <Text style={[styles.placeName, darkMode && styles.whiteText]}>Place 1</Text>
                            <View style={styles.placeDetails}>
                                <View style={styles.locationContainer}>
                                    <Icon name="map-marker" size={8} color={darkMode ? "white" : "grey"} style={styles.locationIcon} />
                                    <Text style={[styles.placeLocation, darkMode && styles.whiteText]}>Location</Text>
                                </View>
                                <View style={styles.priceRatingContainer}>
                                    <Text style={[styles.price, darkMode && styles.whiteText]}>$100</Text>
                                    <Text style={[styles.rating, darkMode && styles.whiteText]}>(4.5)</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.place}>
                            <Image source={require('../../assets/item-b.png')} style={styles.placeImage} />
                            <Text style={[styles.placeName, darkMode && styles.whiteText]}>Place 1</Text>
                            <View style={styles.placeDetails}>
                                <View style={styles.locationContainer}>
                                    <Icon name="map-marker" size={8} color={darkMode ? "white" : "grey"} style={styles.locationIcon} />
                                    <Text style={[styles.placeLocation, darkMode && styles.whiteText]}>Location</Text>
                                </View>
                                <View style={styles.priceRatingContainer}>
                                    <Text style={[styles.price, darkMode && styles.whiteText]}>$100</Text>
                                    <Text style={[styles.rating, darkMode && styles.whiteText]}>(4.5)</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.place}>
                            <Image source={require('../../assets/item-a.png')} style={styles.placeImage} />
                            <Text style={[styles.placeName, darkMode && styles.whiteText]}>Place 1</Text>
                            <View style={styles.placeDetails}>
                                <View style={styles.locationContainer}>
                                    <Icon name="map-marker" size={8} color={darkMode ? "white" : "grey"} style={styles.locationIcon} />
                                    <Text style={[styles.placeLocation, darkMode && styles.whiteText]}>Location</Text>
                                </View>
                                <View style={styles.priceRatingContainer}>
                                    <Text style={[styles.price, darkMode && styles.whiteText]}>$100</Text>
                                    <Text style={[styles.rating, darkMode && styles.whiteText]}>(4.5)</Text>
                                </View>
                            </View>
                        </View>
                        {/* Add more places here */}
                    </View>
                </ScrollView>
            </View>
            <TourGuide darkMode={darkMode} />
            <BudgetTour darkMode={darkMode} />
        </View>
    );
};

const TourGuide = ({ darkMode }) => {
    return (
        <View style={styles.tourGuideSection}>
            <Text style={[styles.sectionHeader, darkMode && styles.whiteText]}>Tour Guide</Text>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <View style={styles.tourGuideRow}>
                    <TourGuideRow 
                        darkMode={darkMode} 
                        guideImage={require('../../assets/guide-a.png')} 
                        guideName="Tour Guide A" 
                        price="$200/day" 
                        rating="4.8" 
                    />
                    <TourGuideRow 
                        darkMode={darkMode} 
                        guideImage={require('../../assets/guide-b.png')} 
                        guideName="Tour Guide B" 
                        price="$250/day" 
                        rating="4.9" 
                    />
                    {/* Add more TourGuideRow components here */}
                </View>
            </ScrollView>
        </View>
    );
};

const BudgetTour = ({ darkMode }) => {
    return (
        <View style={styles.budgetTourSection}>
            <Text style={[styles.sectionHeader, darkMode && styles.whiteText]}>On Budget Tours</Text>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <View style={styles.budgetTourRow}>
                    <BudgetTourItem 
                        darkMode={darkMode} 
                        tourImage={require('../../assets/budget-a.png')} 
                        tourName="Tour A" 
                        duration="Three Days" 
                        pricePerPerson="$100" 
                    />
                    <BudgetTourItem 
                        darkMode={darkMode} 
                        tourImage={require('../../assets/budget-b.png')} 
                        tourName="Tour B" 
                        duration="Five Days" 
                        pricePerPerson="$150" 
                    />
                    {/* Add more BudgetTourItem components here */}
                </View>
            </ScrollView>
        </View>
    );
};

const TourGuideRow = ({ darkMode, guideImage, guideName, price, rating }) => {
    return (
        <View style={[styles.tourGuideRowContainer, darkMode && styles.darkTourGuideRowContainer]}>
            <Image source={guideImage} style={styles.tourGuideImage} />
            <View style={styles.tourGuideInfo}>
                <Text style={[styles.tourGuideName, darkMode && styles.whiteText]}>{guideName}</Text>
                <View style={styles.priceRatingContainer}>
                    <Text style={[styles.price, darkMode && styles.whiteText]}>{price}</Text>
                    <Text style={[styles.rating, darkMode && styles.whiteText]}>({rating})</Text>
                </View>
            </View>
        </View>
    );
};

const BudgetTourItem = ({ darkMode, tourImage, tourName, duration, pricePerPerson }) => {
    return (
        <View style={[styles.budgetTourItemContainer, darkMode && styles.darkBudgetTourItemContainer]}>
            <Image source={tourImage} style={styles.budgetTourImage} />
            <View style={styles.budgetTourInfo}>
                <Text style={[styles.budgetTourName, darkMode && styles.whiteText]}>{tourName}</Text>
                <Text style={[styles.budgetTourDuration, darkMode && styles.whiteText]}>{duration}</Text>
                <View style={styles.budgetTourPriceRow}>
                    <Text style={[styles.budgetTourPriceText, darkMode && styles.whiteText]}>{pricePerPerson}/person</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        paddingTop: 16,
        paddingBottom: 8,
    },
    // Add your other existing styles here
    darkContainer: {
        // backgroundColor: '#333', // Dark mode background color
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 8,
    },
    left: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    right: {
        flexDirection: 'row',
    },
    image: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 8,
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
        marginRight: 8,
    },
    whiteText: {
        color: 'white', // White text color
    },
    iconContainer: {
        paddingHorizontal: 12,
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 25,
        paddingHorizontal: 16,
        marginVertical: 12,
    },
    searchIcon: {
        marginRight: 8,
    },
    input: {
        flex: 1,
        fontSize: 16,
    },
    iconRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        marginVertical: 12,
    },
    icon: {
        borderRadius: 25,
        justifyContent: 'center',
        padding:15
    },
    iconImage: {
        width: 24,
        height: 24,
    },
    frequentSection: {
        paddingHorizontal: 5,
        marginBottom: 20,
        paddingVertical:6
    },
    sectionHeader: {
        fontSize: 18,
        fontWeight: 'bold',
        paddingVertical: 10,
    },
    placesRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    place: {
        marginRight: 8,
    },
    placeImage: {
        borderRadius: 8,
        marginBottom: 8,
    },
    placeName: {
        fontSize: 14,
        fontWeight:"bold"
    },
    placeDetails: {
        justifyContent: 'space-between',
        marginTop: 5,
    },
    locationContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom:5
    },
    locationIcon: {
        marginRight: 5,
    },
    placeLocation: {
        fontSize: 8,
        color: 'grey',
    },
    priceRatingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:"space-between"
    },
    price: {
        fontSize: 15,
        marginRight: 10,
        fontWeight:"bold"
    },
    rating: {
        fontSize: 15,
        fontWeight:"bold"
    },
    tourGuideSection: {
        paddingHorizontal: 5,
    },
    tourGuideRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    tourGuideRowContainer: {
        flex: 1,
        alignItems: 'center',
        padding: 8,
        borderRadius: 8,
        marginBottom: 8,
        flexDirection:"row"
    },
    darkTourGuideRowContainer: {
    },
    tourGuideImage: {
        width: 100,
        height: 100,
        borderRadius: 5,
        marginBottom: 8,
    },
    tourGuideInfo: {
        marginLeft: 10,
    },
    tourGuideName: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    budgetTourSection: {
        paddingHorizontal: 5,
        marginBottom: 20,
    },
    budgetTourRow: {
       // flexDirection: 'row',
        justifyContent: 'space-between',
    },
    budgetTourItemContainer: {
        flex: 1,
        alignItems: 'center',
        padding: 8,
        borderRadius: 8,
        marginBottom: 8,
        flexDirection:"row"
    },
    darkBudgetTourItemContainer: {
    },
    budgetTourImage: {
        width: 100,
        height: 100,
        borderRadius: 5,
        marginBottom: 8,
    },
    budgetTourInfo: {
        marginLeft: 10,
        justifyContent:"space-between",
    },
    budgetTourName: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    budgetTourDuration: {
        fontSize: 14,
        color: 'grey',
        marginBottom: 4,
    },
    budgetTourPriceRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    budgetTourPrice: {
        fontSize: 15,
        marginRight: 5,
        fontWeight: 'bold',
    },
    budgetTourPriceText: {
        fontSize: 12,
        color: 'grey',
        fontWeight:"bold"
    },
});

export default TopBar;
