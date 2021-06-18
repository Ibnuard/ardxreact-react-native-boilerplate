import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { HomeScreen, ProfileScreen } from '../screens';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export const HomeStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name={'Home'}
                component={HomeScreen} />
            <Stack.Screen
                name={'TabStack'}
                component={TabStack} />
            <Stack.Screen
                name={'Profile'}
                component={ProfileScreen} />
        </Stack.Navigator>
    )
}

export const TabStack = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name={'Home'} component={HomeScreen} />
            <Tab.Screen name={'Profile'} component={ProfileScreen} />
        </Tab.Navigator>
    )
}