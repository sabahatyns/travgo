import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const CategoryB = ({ darkMode }) => {
    // Sample data for items in Category A
    const items = [
        { id: 1, image: require('../../assets/item-c.png'), name: 'Item 1', price: '$100', rating: '4.5' },
        { id: 2, image: require('../../assets/item-d.png'), name: 'Item 2', price: '$120', rating: '4.8' },
        // Add more items as needed
        { id: 2, image: require('../../assets/item-e.png'), name: 'Item 2', price: '$120', rating: '4.8' },
        { id: 2, image: require('../../assets/item-f.png'), name: 'Item 2', price: '$120', rating: '4.8' },
    ];

    return (
        <View style={[styles.container, darkMode && styles.darkContainer]}>
            {items.map((item, index) => (
                <View key={index} style={styles.itemContainer}>
                    <Image source={item.image} style={styles.itemImage} />
                    <View style={styles.itemDetails}>
                        <Text style={[styles.itemName, darkMode && styles.darkText]}>{item.name}</Text>
                        <View style={{
                            flexDirection:"row",
                            justifyContent:"space-between"
                        }}>
                        <Text style={[styles.itemPrice, darkMode && styles.darkText]}>{item.price}</Text>
                        <Text style={[styles.itemRating, darkMode && styles.darkText]}>({item.rating})</Text>
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
        width: '48%',
        marginBottom: 20,
       // backgroundColor: 'white',
        borderRadius: 8,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: '#ccc',
    },
    itemImage: {
        width: '100%',
        height: 150,
    },
    itemDetails: {
        padding: 10,
    },
    itemName: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
        color: 'grey',

    },
    itemPrice: {
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 2,
        color: 'grey',

    },
    itemRating: {
        fontSize: 14,
        color: 'grey',
    },
    darkText: {
        color: 'white',
    },
});

export default CategoryB;
