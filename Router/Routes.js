import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import Login from '../screens/Login';
import Admin from "../screens/Admin"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AdminNavigator from './AdminNavigator';


const Stack = createNativeStackNavigator();


export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Admin" component={AdminNavigator} />

      </Stack.Navigator>
    </NavigationContainer>
  )
}
