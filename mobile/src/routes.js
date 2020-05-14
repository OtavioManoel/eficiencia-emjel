import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

import Ambientes from './pages/ambientes';
import Detalhes from './pages/detalhes';
import NovoAmbiente from './pages/NovoAmbiente';


export default function Routes() {
    return(
        <NavigationContainer>

            <AppStack.Navigator screenOptions={{ headerShown: false }}>
                <AppStack.Screen name="Ambientes" component={Ambientes} />
                <AppStack.Screen name="Detalhes" component={Detalhes} />
                <AppStack.Screen name="NovoAmbiente" component={NovoAmbiente} />
            </AppStack.Navigator>
            
        </NavigationContainer>
    );
}