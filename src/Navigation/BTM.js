import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import the FontAwesome icon set
import HomeScreen from '../screens/Home/Home';
import Wishlist from '../screens/Wishlist/Wishlist';
import Explore from '../screens/Explore/Explore';
import Booked from '../screens/Booked/Booked';
import User from '../screens/User/User';

const Tab = createBottomTabNavigator();

function Btm(darkMode) {

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown:false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          // Determine icon name based on route
          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home';
          } else if (route.name === 'explore') {
            iconName = focused ? 'search' : 'search';
          } else if (route.name === 'booked') {
            iconName = focused ? 'bookmark' : 'bookmark';
          } else if (route.name === 'fav') {
            iconName = focused ? 'heart' : 'heart';
          } else if (route.name === 'user') {
            iconName = focused ? 'user' : 'user';
          }

          // Return the icon component
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        inactiveTintColor: 'gray',
        showLabel: false,
        style: {
          backgroundColor: darkMode ? 'black' : 'white', // Background color based on mode
        },
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="explore" component={Explore} />
      <Tab.Screen name="booked" component={Booked} />
      <Tab.Screen name="fav" component={Wishlist} />
      <Tab.Screen name="user" component={User} />
    </Tab.Navigator>
  );
}

export default Btm;
