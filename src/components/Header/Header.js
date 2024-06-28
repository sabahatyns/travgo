import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { useNavigation, DrawerActions } from '@react-navigation/native'; // Import useNavigation and DrawerActions
import Icon from 'react-native-vector-icons/FontAwesome'; // Import the FontAwesome icon set or any other icon library
const Header = ({ darkMode, toggleDarkMode }) => {
  const navigation = useNavigation(); // Get navigation object

  // Function to open the drawer navigation
  const openDrawer = () => {
    console.log("Opening drawer"); // Add this line to verify if the function is being called
    //console.log(navigation); // Log navigation object to check its validity
    if (navigation) {
      navigation.navigate("Drawer");
      navigation.dispatch(DrawerActions.openDrawer());

    } else {
      console.warn("Navigation object is undefined. Ensure the component is within a navigator.");
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={openDrawer} style={styles.iconContainer}>
        <Icon name="bars" size={24} color="white" />
      </TouchableOpacity>
      <View style={styles.spacer} />
      <TouchableOpacity onPress={toggleDarkMode} style={styles.iconContainer}>
        <Text>
          <Icon name={darkMode ? "sun-o" : "moon-o"} size={24} color="white" />
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.navigate('Btm')}>
        <Icon name="user" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 16,
    backgroundColor: '#2196F3', // Blue background color
  },
  iconContainer: {
    padding: 8,
  },
  spacer: {
    flex: 1,
  },
});

export default Header;
