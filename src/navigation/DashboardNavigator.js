/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import HomePage from '../screens/Dashboard/HomePage';
import SettingsPage from '../screens/Dashboard/SettingsPage';

export default createMaterialBottomTabNavigator({
    Home: {
        screen: HomePage,
        title: 'HOME PAGE',
        navigationOptions: {
            tabBarLabel: 'Feed',
            tabBarIcon: ({ tintColor }) => (
                <Icon name='ios-paper' color={tintColor} size={20} />
            ),
        }
    },
    Settings: {
        screen: SettingsPage,
        navigationOptions: {
            tabBarLabel: 'Settings',
            tabBarIcon: ({ tintColor }) => (
                <Icon name='ios-settings' color={tintColor} size={20} />
            ),
        }
    }
}, {
    initialRouteName: 'Home',
    barStyle: {
        activeTintColor: 'orange',
        tintColor: 'white',
        backgroundColor: '#F4281F'/*'#0C2A08'*/,
        height: 50,
    },
});
