import * as React from 'react'

//theme and navigation
import {
    NavigationContainer,
    DarkTheme as NavigationDarkTheme,
    DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';

//theme
import {
    DarkTheme as PaperDarkTheme,
    DefaultTheme as PaperDefaultTheme,
    Provider as PaperProvider,
} from 'react-native-paper';
import merge from 'deepmerge';

import { HomeStack } from './navigator/AppNavigator';
import { PreferencesContext } from './context/Context';
import { DARK_THEME, LIGHT_THEME } from './styles/Theme';

const CombinedDefaultTheme = merge(LIGHT_THEME, NavigationDefaultTheme);
const CombinedDarkTheme = merge(DARK_THEME, NavigationDarkTheme);

const App = () => {

    const [isThemeDark, setIsThemeDark] = React.useState(false)

    let theme = isThemeDark ? CombinedDarkTheme : CombinedDefaultTheme

    const toggleTheme = React.useCallback(() => {
        return setIsThemeDark(!isThemeDark)
    }, [isThemeDark])

    const preferences = React.useMemo(
        () => ({
            toggleTheme,
            isThemeDark,
        }),
        [toggleTheme, isThemeDark]
    )

    return (
        <PreferencesContext.Provider value={preferences}>
            <PaperProvider theme={theme}>
                <NavigationContainer theme={theme}>
                    <HomeStack />
                </NavigationContainer>
            </PaperProvider>
        </PreferencesContext.Provider>
    )
}

export default App