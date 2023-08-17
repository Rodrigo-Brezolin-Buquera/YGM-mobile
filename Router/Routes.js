import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import Login from '../screens/Login';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AdminNavigator from './AdminNavigator';
import User from '../screens/User';


const Stack = createNativeStackNavigator();


export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Admin" component={AdminNavigator} />
        <Stack.Screen name="User" component={User} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
