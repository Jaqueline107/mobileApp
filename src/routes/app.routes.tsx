import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Feather from 'react-native-vector-icons/Feather';

import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile'
import { History } from '../pages/History';
import { Favorites } from '../pages/Favorites';

const Tab = createBottomTabNavigator();

const AppRoutes = () => (
    <Tab.Navigator
        screenOptions={{
            tabBarActiveBackgroundColor: '#080547',
            tabBarInactiveBackgroundColor: '#05042F',
            tabBarActiveTintColor: '#ffffff',
            tabBarInactiveTintColor: '#9ab4b8',
        }}
    >
        <Tab.Screen
            name="Dashboard"
            component={Dashboard}
            options={{
                tabBarIcon: ({ color, size }) => {
                    return <Feather name="home" size={27} color={'#fdad61'} />;
                },
            }}
        />

        <Tab.Screen
            name=" History"
            component={History}
            options={{
                tabBarIcon: ({ color, size }) => {
                    return <Feather name="clock" size={27} color={'#7cfbff'} />;
                },
            }}
        />

        <Tab.Screen
            name="Favorites"
            component={Favorites}
            options={{
                tabBarIcon: ({ color, size }) => {
                    return <Feather name="heart" size={27} color={'#fc85e2'} />;
                },
            }}
        />

        <Tab.Screen
            name="Profile"
            component={Profile}
            options={{
                tabBarIcon: ({ color, size }) => {
                    return <Feather name="user" size={27} color={'#77fc77'} />;
                },
            }}
        />
    </Tab.Navigator>
);

export default AppRoutes;
