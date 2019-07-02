/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react'
import {Platform, StyleSheet, Text, View} from 'react-native';
import {createBottomTabNavigator, createStackNavigator, createAppContainer} from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from './screens/HomeScreen';
import TeachersScreen from './screens/TeachersScreen';
import CourseScreen from "./screens/CourseScreen";
import ProfileScreen from "./screens/ProfileScreen";
import PlayerScreen from "./screens/PlayerScreen";

const HomeStack = createStackNavigator(
    {
        Home: {screen: HomeScreen},
        Player: {screen: PlayerScreen}
    },
    {
        defaultNavigationOptions: {
            //Header customization of the perticular Screen
            headerStyle: {
                backgroundColor: '#42f44b',
            },
            headerTintColor: '#FFFFFF',
            title: 'Home',
        },
    }
);

const TeachersStack = createStackNavigator(
    {
        Teachers: {screen: TeachersScreen},
        Course: {screen: CourseScreen},
        Profile: {screen: ProfileScreen}
    },
    {
        defaultNavigationOptions: {
            //Header customization of the perticular Screen
            headerStyle: {
                backgroundColor: '#42f44b',
            },
            headerTintColor: '#FFFFFF',
            title: 'Teachers',
        },
    }
);

const AppNavigator = createBottomTabNavigator(
    {
        Home: {
            screen: HomeStack,
        },
        Teachers: {
            screen: TeachersStack,
        }
    },
    {
        defaultNavigationOptions: ({navigation}) => ({
            tabBarIcon: ({focused, horizontal, tintColor}) => {
                const {routeName} = navigation.state;
                let IconComponent = Ionicons;
                let iconName;
                if (routeName === 'Home') {
                    iconName = `ios-home`;
                } else if (routeName === 'Teachers') {
                    iconName = `ios-people`;
                }
                return <IconComponent name={iconName} size={25} color={tintColor}/>;
            },
        }),
        tabBarOptions: {
            activeTintColor: '#333333',
            inactiveTintColor: 'gray',
        },
    }
);

export default createAppContainer(AppNavigator)
