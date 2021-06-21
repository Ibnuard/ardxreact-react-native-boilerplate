import * as React from 'react';
import { DefaultTheme, DarkTheme, Provider as PaperProvider } from 'react-native-paper';
import { COLOR_ACCENT, COLOR_BLACK, COLOR_PRIMARY, COLOR_WHITE } from './Colors';

export const LIGHT_THEME = ({
    ...DefaultTheme,
    roundness: 2,
    colors: {
        ...DefaultTheme.colors,
        primary: COLOR_PRIMARY,
        accent: COLOR_ACCENT,
        text: COLOR_BLACK
    }
})

export const DARK_THEME = ({
    ...DarkTheme,
    roundness: 2,
    colors: {
        ...DarkTheme.colors,
    }
})