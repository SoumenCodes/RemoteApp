import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import { View } from 'react-native';


const Tab = createBottomTabNavigator();

function ControlsScreen(params) {
    return (
        <View>
            <Text>Controls</Text>
        </View>
    );
}
function SettingsScreen(params) {
    return (
        <View>
            <Text>Controls</Text>
        </View>
    );
}

function InfoScreen(params) {
    return (
        <View>
            <Text>Controls</Text>
        </View>
    );
}

export default function BottomTabs() {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Controls" component={ControlsScreen} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
            <Tab.Screen name="Info" component={InfoScreen} />
        </Tab.Navigator>
    );
}
