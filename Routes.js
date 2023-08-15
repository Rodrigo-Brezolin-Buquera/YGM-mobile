import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { colors } from './globalStyles';
import Login from './screens/Login';


const Tab = createBottomTabNavigator();


export default function Routes() {
  return <NavigationContainer>
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: colors.cian,
        inactiveTintColor: colors.grey,
        activeBackgroundColor: colors.cian,
        inactiveBackgroundColor: colors.yellow,
        style: {
          height: 70,
        },
        labelStyle: {
          width: '100%',
          flex: 1,
          fontWeight: 'bold',
          fontSize: 16,
          lineHeight: 21,
          marginTop: 3,
          paddingTop: 21,
          backgroundColor: colors.cian
        },
        keyboardHidesTabBar: true,
      }}>
    <Tab.Screen name="Login" component={<Login/>} />
    </Tab.Navigator>
  </NavigationContainer>
}
