import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from "./src/screens/SplashScreen/Splash";
import Register from "./src/screens/Register/Register";
import Btm from "./src/Navigation/BTM";
import EditProfileScreen from "./src/screens/ProfileScreens/EditProfile";
import Address from "./src/screens/ProfileScreens/Address";
import Payment from "./src/screens/ProfileScreens/Payment";
import ChangePass from "./src/screens/ProfileScreens/ChangePass";
import ForgotPass from "./src/screens/ProfileScreens/ForgotPass";
import Security from "./src/screens/ProfileScreens/Security";
import Language from "./src/screens/ProfileScreens/Language";
import DrawerScreen from "./src/Navigation/Drawer"; // Import DrawerScreen component
import User from './src/screens/User/User';
import Signin from './src/screens/Authentication/Signin';
import Login from './src/screens/Authentication/Login';
import HomeScreen from './src/screens/Home/Home';
import Chat from './src/screens/Authentication/Chat';
import Message from './src/screens/Authentication/Message';
import Notification from './src/screens/Authentication/Notifications';
import Wishlist from './src/screens/Wishlist/Wishlist';
import Explore from './src/screens/Explore/Explore';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator  screenOptions={{headerShown:false} }>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="user" component={User} />
        <Stack.Screen name="Btm" component={Btm} />
        <Stack.Screen name="Drawer" component={DrawerScreen} /> 
        <Stack.Screen name="EditProfile" component={EditProfileScreen} />
        <Stack.Screen name="Address" component={Address} />
        <Stack.Screen name="Payment" component={Payment} />
        <Stack.Screen name="ChangePass" component={ChangePass} />
        <Stack.Screen name="Forgot" component={ForgotPass} />
        <Stack.Screen name="Security" component={Security} />
        <Stack.Screen name="Language" component={Language} />
        <Stack.Screen name="Signin" component={Signin} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="fav" component={Wishlist} />
        <Stack.Screen name="Explore" component={Explore} />
        <Stack.Screen name="Chat" component={Chat} />
        <Stack.Screen name="Message" component={Message} />
        <Stack.Screen name="Notification" component={Notification} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
