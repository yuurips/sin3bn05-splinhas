import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/Home'
import Busca from './pages/Busca'

const Stack = createStackNavigator();

export default function Routes(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Tela inicial" component={Home} />
                <Stack.Screen name="Busca" component={Busca} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}