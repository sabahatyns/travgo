import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const PlaceListItem = ({ darkMode, place }) => {
    return (
        <View style={[styles.placeListItem, darkMode ? styles.darkPlaceListItem : null]}>
            <Image source={place.image} style={styles.placeImage} />
            <TouchableOpacity style={styles.favoriteIconContainer}>
                <Icon name="heart" size={20} color={darkMode ? "white" : "red"} />
            </TouchableOpacity>
            <View style={styles.placeInfo}>
                <Text style={[styles.placeName, darkMode && styles.whiteText ]}>{place.name}</Text>
                <View style={styles.priceRatingContainer}>
                    <Text style={[styles.price,darkMode && styles.whiteText ]}>{place.price}</Text>
                    <Text style={[styles.rating, darkMode && styles.whiteText ]}>({place.rating})</Text>
                </View>
            </View>
        </View>
    );
};

const PlaceList = ({ darkMode }) => {
    // Sample data for places
    const places = [
        { id: 1, image: require('../../assets/item-c.png'), name: 'Place', price: '$100', rating: '4.5' },
        { id: 2, image: require('../../assets/item-d.png'), name: 'Place', price: '$120', rating: '4.8' },
        { id: 3, image: require('../../assets/item-e.png'), name: 'Place', price: '$90', rating: '4.3' },
        { id: 4, image: require('../../assets/item-f.png'), name: 'Place', price: '$110', rating: '4.6' },
        { id: 5, image: require('../../assets/item-g.png'), name: 'Place', price: '$130', rating: '4.9' },
        { id: 6, image: require('../../assets/item-h.png'), name: 'Place', price: '$140', rating: '4.7' },
        { id: 3, image: require('../../assets/item-e.png'), name: 'Place', price: '$90', rating: '4.3' },
        { id: 4, image: require('../../assets/item-f.png'), name: 'Place', price: '$110', rating: '4.6' },
        { id: 5, image: require('../../assets/item-g.png'), name: 'Place', price: '$130', rating: '4.9' },
        { id: 6, image: require('../../assets/item-h.png'), name: 'Place', price: '$140', rating: '4.7' },
        // Add more places as needed
    ];

    return (
        <View style={styles.placeListContainer}>
            {places.map((place, index) => (
                <PlaceListItem key={index} darkMode={darkMode} place={place} />
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    placeListContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        padding: 5,
    },
    placeListItem: {
        width: '48%',
        marginBottom: 10,
        borderRadius: 8,
        overflow: 'hidden',
    },
    darkPlaceListItem: {
        backgroundColor: 'black',
    },
    placeImage: {
        width: '100%',
        height: 150,
    },
    favoriteIconContainer: {
        position: 'absolute',
        top: 5,
        right: 5,
        zIndex: 1,
        backgroundColor: 'transparent',
    },
    placeInfo: {
        padding: 10,
    },
    placeName: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
        color:"grey"
    },
    priceRatingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:"space-between"
    },
    price: {
        fontSize: 14,
        marginRight: 5,
        color:"grey",
        fontWeight:"bold"
    },
    rating: {
        fontSize: 14,
        color: 'grey',
        fontWeight:"bold"

    },
    whiteText: {
        color: 'white',
        fontWeight:"bold"

    },
});

export default PlaceList;
