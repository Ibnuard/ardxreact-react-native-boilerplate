import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { HomeScreen, ProfileScreen } from '../screens';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AppBar } from '../components';

import { TabBarIcon } from '../components';
import { Colors } from '../styles';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export const HomeStack = () => {
    return (
        <Stack.Navigator
            initialRouteName={'Home'}
            screenOptions={({ route }) => ({
                header: (props) => <AppBar {...props} title={route?.name} />
            })}>
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
        <Tab.Navigator screenOptions={({ route }) => ({
            tabBarIcon: (props) => <TabBarIcon {...props} route={route} />
        })}
            tabBarOptions={{
                activeTintColor: Colors.COLOR_PRIMARY,
                inactiveTintColor: Colors.COLOR_GRAY,
            }}>
            <Tab.Screen name={'Home'} component={HomeScreen} />
            <Tab.Screen name={'Profile'} component={ProfileScreen} />
        </Tab.Navigator>
    )
}