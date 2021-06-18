import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { HomeStack } from './navigator/AppNavigator';

const App = () => {
    return (
        <NavigationContainer>
            <HomeStack />
        </NavigationContainer>
    )
}

export default App