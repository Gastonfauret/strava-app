import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../strava-app/components/HomeScreen'; 
import HomeScreenStrava from '../strava-app/components/HomeScreenStrava';

const Stack = createNativeStackNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="HomeScreenStrava" component={HomeScreenStrava} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
