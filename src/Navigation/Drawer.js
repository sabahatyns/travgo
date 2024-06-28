import React from 'react';
import { createDrawerNavigator, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import { Image, Text, View } from 'react-native';
import HomeScreen from '../screens/Home/Home';
import Profile from '../screens/User/Profile';
import User from '../screens/User/User';
import Icon from 'react-native-vector-icons/FontAwesome';
import Booked from '../screens/Booked/Booked';
import Explore from '../screens/Explore/Explore';
import Pages from '../screens/Pages/Pages';

const Drawer = createDrawerNavigator();

const CustomDrawerContent = ({ navigation, descriptors, state }) => (
  <View style={{ flex: 1 }}>
    {/* Logo and Name */}
    <View style={{ flexDirection: 'row', alignItems: 'center', padding: 20 }}>
      <Image
        source={require('../assets/logo.png')} // Adjust the path to your logo image
        style={{ width: 40, height: 40, marginRight: 10 }}
      />
      <Text style={{ fontSize: 20 }}>Your App Name</Text>
    </View>
    {/* Menu Headings */}
    <Text style={{ fontSize: 16, fontWeight: 'bold', marginLeft: 20, marginTop: 10 }}>Menu</Text>
    <View style={{ marginLeft: 20 }}>
      <DrawerItemList
        state={state}
        navigation={navigation}
        descriptors={descriptors}
      />
    </View>
    {/* Others Heading */}
    <Text style={{ fontSize: 16, fontWeight: 'bold', marginLeft: 20, marginTop: 20 }}>Others</Text>
    {/* Screens under Others */}
    <DrawerItem
      label="Settings"
      onPress={() => navigation.navigate('Settings')}
      icon={({ focused, color, size }) => (
        <Icon name="cog" size={size} color={'#2196F3'} />
      )}
    />
    <DrawerItem
      label="Notifications"
      onPress={() => navigation.navigate('Notification')}
      icon={({ focused, color, size }) => (
        <Icon name="bell" size={size} color={'#2196F3'} />
      )}
    />   
  </View>
);

export default function DrawerScreen() {
  return (
    <Drawer.Navigator
      // initialRouteName="Home"
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={{
        drawerActiveTintColor: '#2196F3',
        drawerItemStyle: { marginVertical: 10 },
        headerShown: false
      }}
    >
      {/* Screens under Menu */}
      <Drawer.Screen
        name="Overview"
        component={HomeScreen}
        options={{
          drawerIcon: ({ focused, size }) => (
            <Icon name="home" size={size} color={'#2196F3'} />
          ),
        }}
      />
      <Drawer.Screen
        name="Pages"
        component={Pages}
        options={{
          drawerIcon: ({ focused, size }) => (
            <Icon name="user" size={size} color={'#2196F3'} />
          ),
        }}
      />
     
      {/* Screens under Others */}
    
      
    </Drawer.Navigator>
  );
}
