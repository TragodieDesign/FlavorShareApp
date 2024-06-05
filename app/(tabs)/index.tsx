// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import SimpleEntryScreen from './/SimpleEntryScreen';
import LoginSignupScreen from './/LoginSignupScreen';
import HomeScreen from './HomeScreen';

// Inicializar Firebase
const firebaseConfig = {

    apiKey: "AIzaSyB2LbXcky6tycsr135oNlCZWIeN_YK3I6g",

    authDomain: "auth-flavorshare.firebaseapp.com",
  
    databaseURL: "https://auth-flavorshare-default-rtdb.firebaseio.com",
  
    projectId: "auth-flavorshare",
  
    storageBucket: "auth-flavorshare.appspot.com",
  
    messagingSenderId: "350883304437",
  
    appId: "1:350883304437:web:3732d59936eb7091df06bc",
  
    measurementId: "G-M10LV4FLYJ"
  
};

//Firebase.initializeApp(firebaseConfig);

const Stack = createStackNavigator();

export default function App() {
  return (

      <Stack.Navigator initialRouteName="SimpleEntry">
        <Stack.Screen name="SimpleEntry" component={SimpleEntryScreen} options={{ headerShown: false }} />
        <Stack.Screen name="LoginSignup" component={LoginSignupScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>

  );
}
