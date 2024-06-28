import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const CategoryD = ({ darkMode }) => {
    // Sample data for items in Category D
    const items = [
        { id: 1, image: require('../../assets/item-a.png'), name: 'Stonehenge', price: '$100', rating: '4.5', location: ' New York', reviews: 10 },
        { id: 2, image: require('../../assets/item-b.png'), name: 'Machu Picchu', price: '$120', rating: '4.8', location: ' Los Angeles', reviews: 20 },
        { id: 3, image: require('../../assets/item-c.png'), name: 'The Colosseum', price: '$90', rating: '4.2', location: ' Chicago', reviews: 15 },
        { id: 4, image: require('../../assets/item-d.png'), name: 'The Great Wall of China', price: '$150', rating: '4.6', location: ' San Francisco', reviews: 18 },
        // Add more items as needed
    ];

    return (
        <View style={[styles.container, darkMode && styles.darkContainer]}>
            {items.map((item, index) => (
                <View key={index} style={styles.itemContainer}>
                    <View style={{ flexDirection: "column" }}>
                        <Image source={item.image} style={styles.itemImage} />
                        <View style={styles.priceContainer}>
                            <Text>Total Price </Text>
                            <Text style={[styles.itemPrice, darkMode && styles.darkText]}>{item.price}</Text>
                        </View>
                    </View>
                    <View style={styles.itemDetails}>
                        <Text style={[styles.itemName, darkMode && styles.darkText]}>{item.name}</Text>
                        <Text style={[styles.itemLocation, darkMode && styles.darkText]}>
                            <Icon name="map-marker" size={16} color="grey" style={styles.locationIcon} />
                            {item.location}
                        </Text>
<View style={{flexDirection:"row",justifyContent:"space-between"}}>
                        <View style={styles.ratingContainer}>
                            <Icon name="star" size={16} color="#FFD700" style={styles.ratingIcon} />
                            <Text style={[styles.ratingText, darkMode && styles.darkText]}>{item.rating}</Text>
                            <Text style={[styles.reviewText, darkMode && styles.darkText]}>({item.reviews} Reviews)</Text>
                        </View>
                        <TouchableOpacity style={styles.viewDetailsButton}>
                            <Text style={styles.viewDetailsText}>Rating</Text>
                        </TouchableOpacity>
                        </View>
                    </View>
                </View>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        padding: 10,
    },
    darkContainer: {
        backgroundColor: 'black',
    },
    itemContainer: {
        width: '100%',
        marginBottom: 20,
        borderRadius: 8,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: '#ccc',
        flexDirection: 'row',
        alignItems: "center",
        padding: 6,
    },
    itemImage: {
        width: 100,
        height: 100,
        borderRadius: 6,
    },
    itemDetails: {
        flex: 1,
        padding: 10,
        justifyContent: 'space-between',
    },
    itemName: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
        color: 'grey',
    },
    itemLocation: {
        fontSize: 14,
        color: 'grey',
        flexDirection: 'row',
        alignItems: 'center',
    },
    locationIcon: {
        marginRight: 5,
    },
    priceContainer: {
        marginTop: 5,
    },
    itemPrice: {
        fontSize: 14,
        fontWeight: 'bold',
        color: 'grey',
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    ratingIcon: {
        marginRight: 5,
    },
    ratingText: {
        fontSize: 14,
        color: '#FFD700', // Gold color for rating
    },
    reviewText: {
        fontSize: 14,
        color: 'grey',
        marginLeft: 5,
    },
    darkText: {
        color: 'white',
    },
    viewDetailsButton: {
        padding: 8,
        alignSelf: 'flex-end',
    },
    viewDetailsText: {
        color: 'grey',
        fontSize:10,
    },
});

export default CategoryD;
