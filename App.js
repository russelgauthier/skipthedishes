/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {RestaurantsProvider} from './contexts/RestaurantsProvider';

import CompanyInfoScreen from './screens/CompanyInfoScreen';
import HomeScreen from './screens/HomeScreen';

const Stack = createStackNavigator();

export default function App(){
    return <RestaurantsProvider>
        <NavigationContainer>
            <Stack.Navigator initialRouteName={"Home"}>
                    <Stack.Screen name="Home" component={HomeScreen} options={{header: () => null}} />
                    <Stack.Screen name="Company Info" component={CompanyInfoScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    </RestaurantsProvider>
}
