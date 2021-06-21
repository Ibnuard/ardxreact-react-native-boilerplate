import * as React from 'react'
import { StatusBar } from 'react-native';

const CustomStatusBar = ({ backgroundColor, barStyle = 'light-content' }) => {
    return <StatusBar backgroundColor={backgroundColor} barStyle={barStyle} />
}

export default CustomStatusBar